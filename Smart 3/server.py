from flask import Flask, request,Response,json
from flask_cors import CORS, cross_origin
from flask_restful import Resource, Api
from json import dumps
import os
import zipfile
import glob
from flask import send_file
from humanize import naturalsize
from data_class import FileDeatils
from location import locationset
import zipfile
from smart_bundle import SmartBundle
from smart_bundle import SmartBundle

s = SmartBundle()
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
    output = s.get_smart_bundle(location=location, request1=RULE_1, request2=RULE_2, request3=RULE_3)
    print("this is the output of")
    print(output)
    resp = Response(status=200, mimetype='application/json')
    return  resp

@app.route('/getBundleFiles', methods=["GET"])
def getfile():
    product=request.args['product']
    global location
    location=request.args['location']
    print (location)
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

@app.route('/sendjson')
def getjson():
    path = location + "/smartServiceBundle"
    dat = s.sendjson(path)
    print(dat)
    return dat

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