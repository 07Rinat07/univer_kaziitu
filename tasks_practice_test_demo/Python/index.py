from datetime import datetime
now = datetime.now()
print(now.strftime("%Y-%m-%d"))             # 2017-05-03
print(now.strftime("%d/%m/%Y"))             # 03/05/2017
print(now.strftime("%d/%m/%y"))             # 03/05/17
print(now.strftime("%d %B %Y (%A)"))        # 03 May 2017 (Wednesday)
print(now.strftime("%d/%m/%y %I:%M"))       # 03/05/17 01:36