import os
import time
from datetime import datetime
import json


class SmartBundle:
    ts = datetime.now()

    def getErrorOf(self,path,outputdir,time):
        time = time * 60
        files = []
        print(path)
        # r=root, d=directories, f = files
        for r, d, f in os.walk(path):
            for file in f:
                if '.log' in file:
                    files.append(os.path.join(r, file))
        hs = open(outputdir + "/LastError.log", "a")
        for f in files:
            hs.write("erros from " + f)
            readedfile = open(f, 'r')
            for line in readedfile:
                words = line.split(" ")
                length = len(words)
                if (length > 5):
                    if "[ WARN ]" in line:
                        dt = datetime.strptime(words[1] + words[2], '%Y-%m-%d%H:%M:%S.%f')
                        hs.write(line)
                        if ((self.ts - dt).total_seconds()) <= time:
                            hs.write('\n\n\n')
                    elif "[ERROR]" in line:
                        if words[4] not in f:
                            dt = datetime.strptime(words[1] + words[2], '%Y-%m-%d%H:%M:%S.%f')
                            if ((self.ts - dt).total_seconds()) <= time:
                                hs.write('\n\n\n')
        hs.close()

        # This is function which return all the Error and Warning

    def getConsolidateError(self,path,outputdir):
        files = []
        # r=root, d=directories, f = files
        for r, d, f in os.walk(path):
            print(path)
            for file in f:
                if '.log' in file:
                    files.append(os.path.join(r, file))
        print("done with the for loop")
        hs = open(outputdir + "/Error.log", "a")
        for f in files:
            print("This is file of name " + f)
            hs.write("erros from " + f)
            readedfile = open(f, 'r')
            for line in readedfile:
                words = line.split(" ")
                length = len(words)
                if (length > 5):
                    if "[ WARN ]" in line:
                        hs.write(line)
                    elif "[ERROR]" in line:
                        hs.write(line)
        hs.close()
        print("complete")

    def getSysConfig(self,path,outputdir):
        filename = "/Users/jprayank/Downloads/app.json"
        with open(filename, 'r') as f:
            datastore = json.load(f)
        files = []
        # r=root, d=directories, f = files
        for r, d, f in os.walk(path):
            for file in f:
                if '.log' in file:
                    files.append(os.path.join(r, file))
        hs = open(outputdir + "/configlog.log", "a")
        for f in files:
            hs.write("erros from " + f)
            readedfile = open(f, 'r')
            for line in readedfile:
                words = line.split(" ")
                length = len(words)
                if (length > 5):
                    # Use the new datastore datastructure
                    data = (datastore["configurationIdentifiers"])
                for dt in data:
                    if dt["api"] in line:
                        hs.write(line)
                        hs.write('\n\n\n')
        hs.close()
        print("completed")

    def get_smart_bundle(self,location, request1, request2, request3):
        path = location + "/smartServiceBundle"
        try:
            os.mkdir(path)
        except OSError as e:
            print("Creation of the directory %s failed" % path,e)
        else:
            print("Successfully created the directory %s " % path)
        if request1:
            self.getSysConfig(location,path)
        if request2:
            self.getConsolidateError(location,path)
        if request3:
            self.getErrorOf(location,path,60)
        return path

