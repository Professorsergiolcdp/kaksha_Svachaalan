from textblob import TextBlob
with open('C:/Users/A.k singh/trial/kaksha_Svachaalan/data.txt', 'r') as file:
    data = file.read().replace('\n', ' ')
blob= TextBlob(data)
senti=blob.sentiment
print(data)
print(senti[0])
if senti[0]<(-0.5):
    with open('sentiment_check.txt', 'w') as f:
        f.write('Strong words were used in the class.Please look into thee issue')
else:
    with open('sentiment_check.txt', 'w') as f:
        f.write('Strong words were not used in the class.')