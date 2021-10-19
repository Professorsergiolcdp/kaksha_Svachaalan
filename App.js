const fs= require("fs");
const puppy= require("puppeteer");
const puppeteer = require('puppeteer-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())
let id = [`https://meet.google.com/ipd-bdrx-uyu`];

async function main()

{ if (!fs.existsSync("screenshots"))
    {
      fs.mkdirSync("screenshots");
    }

let browser=await puppy.launch({
    headless:false,
    defaultViewport: false
   });

   let tabs=await browser.pages();
let tab=tabs[0];

const context = browser.defaultBrowserContext();
await context.overridePermissions(
    "https://meet.google.com/", ["microphone", "camera", "notifications"]
);
for(let j=0;j<1;j++)
 {  
   //1st lecture    
   if(j==0)
    {  
       await meet(id[j],tab);
    }
            
  }
await browser.close(); 
}


async function meet(meetID,tab)
{   
  await tab.waitForTimeout(2500);
  await tab.goto("https://meet.google.com/");
  await tab.waitForSelector('input[type="text"]');
  await tab.click('input[type="text"]');
  await tab.waitForTimeout(1000);
  await tab.keyboard.type(meetID, { delay: 200 }); 
  await tab.waitForTimeout(800);
  await tab.keyboard.press('Enter');
  await tab.waitForNavigation();
  
  //to turn off camera Ctrl+E
  await tab.waitForTimeout(8000);
  await tab.keyboard.down('ControlLeft');
  await tab.keyboard.press('KeyE');
  await tab.keyboard.up('ControlLeft');
  await tab.waitForTimeout(2000);
      
  
  //to turn off mic using Ctrl+D
  
  await tab.keyboard.down('ControlLeft');
  await tab.keyboard.press('KeyD');
  await tab.keyboard.up('ControlLeft');
  await tab.waitForTimeout(2000);

  // To join 
      
  let CL=await tab.$$(".NPEfkd.RveJvd");
  await CL[0].click();    
  
  //to reach at message option
  await tab.waitForTimeout(30000);
      for (let i=1; i<=2; i++) {
          await tab.keyboard.press('Tab');
          await tab.waitForTimeout(1000);
      }
  //press at message option and send a message    
  await tab.keyboard.press('Enter');
  await tab.waitForTimeout(1500);
  await tab.keyboard.type("Good morning!", { delay: 100 });
  await tab.keyboard.press('Enter');

  //for coming out of the message 
  await tab.waitForTimeout(1000);
  await tab.keyboard.press('Tab');
  await tab.keyboard.press('Enter');
  
  //wait till the meeting ends
  await tab.waitForTimeout(10000);

  //to end the call  
  for (let i=1; i<=6; i++)
   {
      await tab.keyboard.press('Tab');
      await tab.waitForTimeout(1000);
   }
     
  await tab.keyboard.press('Enter');    
}
main();