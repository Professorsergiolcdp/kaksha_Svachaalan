import pyaudio
import pyttsx3
import datetime
import speech_recognition as sr
from win10toast import ToastNotifier
toaster =ToastNotifier()
engine = pyttsx3.init('sapi5')
voices = engine.getProperty('voices')
engine.setProperty('voice',voices[0].id)
def speak(audio):
    engine.say(audio)
    engine.runAndWait()
def takeCommand():
    r = sr.Recognizer()
    with sr.Microphone() as source:
        print("listening")
        r.energy_threshold=1000
        r.pause_threshold = 0.5
        audio = r.listen(source)
        try:
           # print("recognising...")
            query = r.recognize_google(audio,language='en-in')
            if name_to_be_searched in query:
                print("Bruh!I got you")
            print("user said:",query)
        except Exception as e:
            print("say that again please...")
            return  "None"
        return query


def wishMe():
    hour = int(datetime.datetime.now().hour)
    if hour>=0 and hour<12:
        speak("Good morning")
    elif hour>=12 and hour<18:
        speak("good afternoon!")
    else:
        speak("good evening")
#speak("hello SIR i m ur bot")
if __name__=="__main__":
 #   wishMe()
    #print("1")
    name_to_be_searched="David"
    toaster.show_toast("Demo notification",
                   "Hello world",
                   duration=10)
    takeCommand()
