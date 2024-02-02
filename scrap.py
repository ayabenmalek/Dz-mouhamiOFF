import requests
from bs4 import BeautifulSoup
import pandas as pd
avocats = []

for i in range (1,45):
  url = f"https://avocatalgerien.com/listings/category/code-bancaire/page/{i}/"
  response = requests.get(url)
  response = response.content
  soup = BeautifulSoup( response,'html.parser')
  liste = soup.find('div',class_='list')
  article = liste.find_all('article')

  for art in article:
     image = art.find('img')
     image = image.attrs['src']
     nom_prenom = art.find('h2',class_='entry-title')
     nom_prenom = nom_prenom.text.strip()
     stars = art.find('div',class_='stars-cont')
     stars_div = stars.find('div', class_='stars')
     etoile = stars_div['class'][1]
     competences = art.find('p',class_='listing-cat')
     competences = competences.text.strip()[12:]
     phone = art.find('p',class_='listing-phone')
     phone = phone.text.strip()[5:]
     adr = art.find('p',class_='listing-address')
     adr = adr.text.strip()
     description = art.find('p',class_='listing-description')
     description = description.text.strip()[15:]
     avocats.append([image , nom_prenom ,etoile ,competences , phone, adr , description])

df = pd.DataFrame(avocats , columns=[image , nom_prenom ,etoile ,competences , phone, adr , description])
df.to_csv('avocats.csv')


