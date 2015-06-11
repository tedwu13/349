import csv
import random

f = csv.DictReader(open("words.csv", 'rU'))


data = []
for row in f:   # iterates the rows of the file in orders
	randomNum = random.randint(1,5)
	if randomNum == 5:
	    data.append(row)
	   
def preProcess(data):
	print data['words']
	print data.coefficients
	print data.index


preProcess(data)
print "importing"
def writeCSV():
	with open('tests.csv', 'wb') as fp:
	    a = csv.writer(fp, delimiter=',')
	    a.writerows([data])
	    print [data]

writeCSV()















