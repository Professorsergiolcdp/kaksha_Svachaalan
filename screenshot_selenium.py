# importing webdriver from selenium
from selenium import webdriver

from PIL import Image

# Here Chrome will be used
def main():
    driver = webdriver.Chrome()

# URL of website
    url = "https://www.geeksforgeeks.org/"

# Opening the website
    driver.get(url)

    driver.save_screenshot("image.png")

# Loading the image
    image = Image.open("image.png")

# Showing the image
    image.show()
if __name__=="__main__":
    main()