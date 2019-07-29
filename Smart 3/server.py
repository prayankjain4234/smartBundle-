from flask import Flask, request,Response,json
from flask_cors import CORS, cross_origin
from flask_restful import Resource, Api
from json import dumps
from flask_jsonpify import jsonify
import os
import zipfile
import glob
from flask import send_file
import psycopg2
from humanize import naturalsize
from data_class import FileDeatils
from location import locationset
import zipfile

con = psycopg2.connect(
            database="db",
            user = "postgres",
            password = "postgres")
cur = con.cursor()

cur.execute("select id, name from car")

rows = cur.fetchall()

for r in rows:
    print (f"id {r[0]} name {r[1]}")

#commit the transcation 
con.commit()

#close the cursor
cur.close()

#close the connection
con.close()


app = Flask(__name__)
api = Api(app)
filenamedownload=''
CORS(app)
filelist=[]

@app.route('/prune', methods=['POST'])
def rules():
    RULE_1=request.json['RULE_1']
    RULE_2=request.json['RULE_2']
    RULE_3=request.json['RULE_3']
    #call function to send the set of rules call
    resp = Response(status=200, mimetype='application/json')
    return  resp

@app.route('/getBundleFiles', methods=["GET"])
def getfile():
    product=request.args['product']
    global location
    location=request.args['location']
    locationset(location)
    fileDeatilslist=[]
    fileDeatilslist=getfiles(location)
                
    jsonData = json.dumps(fileDeatilslist, default = lambda x: x.__dict__)
    resp = Response(jsonData, status=200, mimetype='application/json')
    return  resp

@app.route('/getOptimizeBundleFiles', methods=["GET"])
def getOptimize():
    optimzelocation=''
    fileDeatilslist=[]
    fileDeatilslist=getfiles(location)
    jsonData = json.dumps(fileDeatilslist, default = lambda x: x.__dict__)
    resp = Response(jsonData, status=200, mimetype='application/json')
    return  resp

@app.route('/zipSmartBundle', methods=["POST"])
def ziplocation():
    filename="smart.zip"
    zf = zipfile.ZipFile("smart.zip", "w")
    for dirname, subdirs, files in os.walk(location):
        zf.write(dirname)
        for filename in files:
            zf.write(os.path.join(dirname, filename))
    zf.close()
    jsonData='{ "outputFileLocation":'+os.path.join(dirname,filename)+'}'
    resp = Response(jsonData, status=200, mimetype='application/json')
    return  resp

def getfiles(location):
    fileDeatilslist=[]
    for r, d, f in os.walk(location):
        for file in f:
            if '.log' in file:
                fileDeatilslist.append(FileDeatils(os.path.join(file),(os.path.getsize(os.path.join(r, file))/1000000)))
    return fileDeatilslist

if __name__ == '__main__':
   app.run(port=5002)