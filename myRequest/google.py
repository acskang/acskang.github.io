from urllib import request, parse

params = {"v": "EuC-yVzHhMI", "t": "5m56s"}
querystring = parse.urlencode(params)

url = "https://www.youtube.com/watch" + "?" + querystring
print(url)

resp = request.urlopen(url)
html = resp.read().decode('utf-8')

f = open("black.html", "w", encoding='UTF-8')
f.write(html)
f.close()


sendata['text'] = '야구선수'
jsonData = json.dumps(sendata)
r = requests.post("http://192.168.35.193:8001/api/chatterbot/", data=jsonData)