

const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{await page.goto('https://8081-afcacefcabffbcfacbdcbaeafebdbefedd.examlyiopb.examly.io/');
  await page.setViewport({ width:1100, height:600, })
  // await page.screenshot({path: 'example.png'});
      await page.type('#age', '25');

  await page.click('#button');
      const ageGroup = await page.$eval('p', p => p.textContent);
      if(ageGroup == "The person is in the age group: Adult")
      console.log("Success 1");
      else
      console.log("fail 1");
  }
    catch(e){
      console.log(e);
      console.log('TESTCASE:test_case1:failure');
    }finally{
      await page.close();
      await browser.close();
    }})();

    (async () => {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      try{await page.goto('https://8081-afcacefcabffbcfacbdcbaeafebdbefedd.examlyiopb.examly.io/');
      // await page.setViewport({ width:1100, height:600, })
      // await page.screenshot({path: 'example.png'});
          await page.type('#age', '11');
    
      await page.click('#button');
          const ageGroup = await page.$eval('p', p => p.textContent);
          if(ageGroup == "The person is in the age group: Childhood")
          console.log("Success 2");
          else
          console.log("fail 2");
      }
        catch(e){
          console.log(e);
          console.log('TESTCASE:test_case1:failure');
        }finally{
          await page.close();
          await browser.close();
        }})();

        (async () => {
          const browser = await puppeteer.launch();
          const page = await browser.newPage();
          try{await page.goto('https://8081-afcacefcabffbcfacbdcbaeafebdbefedd.examlyiopb.examly.io/');
          // await page.setViewport({ width:1100, height:600, })
          // await page.screenshot({path: 'example.png'});
              await page.type('#age', '17');
        
          await page.click('#button');
              const ageGroup = await page.$eval('p', p => p.textContent);
              if(ageGroup == "The person is in the age group: Teenage")
              console.log("Success 3");
              else
              console.log("fail 3");
          }
            catch(e){
              console.log(e);
              console.log('TESTCASE:test_case1:failure');
            }finally{
              await page.close();
              await browser.close();
            }})();

            (async () => {
              const browser = await puppeteer.launch();
              const page = await browser.newPage();
              try{await page.goto('https://8081-afcacefcabffbcfacbdcbaeafebdbefedd.examlyiopb.examly.io/');
              // await page.setViewport({ width:1100, height:600, })
              // await page.screenshot({path: 'example.png'});
                  await page.type('#age', '2');
            
              await page.click('#button');
                  const ageGroup = await page.$eval('p', p => p.textContent);
                  if(ageGroup == "The person is in the age group: Toddler years")
                  console.log("Success 4");
                  else
                  console.log("fail 4");
              }
                catch(e){
                  console.log(e);
                  console.log('TESTCASE:test_case1:failure');
                }finally{
                  await page.close();
                  await browser.close();
                }})();

                (async () => {
                  const browser = await puppeteer.launch();
                  const page = await browser.newPage();
                  try{await page.goto('https://8081-afcacefcabffbcfacbdcbaeafebdbefedd.examlyiopb.examly.io/');
                  // await page.setViewport({ width:1100, height:600, })
                  // await page.screenshot({path: 'example.png'});
                      await page.type('#age', '0');
                
                  await page.click('#button');
                      const ageGroup = await page.$eval('p', p => p.textContent);
                      if(ageGroup == "The person is in the age group: Foetus Infancy")
                      console.log("Success 5");
                      else
                      console.log("fail 5");
                  }
                    catch(e){
                      console.log(e);
                      console.log('TESTCASE:test_case1:failure');
                    }finally{
                      await page.close();
                      await browser.close();
                    }})();

                    (async () => {
                      const browser = await puppeteer.launch();
                      const page = await browser.newPage();
                      try{await page.goto('https://8081-afcacefcabffbcfacbdcbaeafebdbefedd.examlyiopb.examly.io/');
                      // await page.setViewport({ width:1100, height:600, })
                      // await page.screenshot({path: 'example.png'});
                          await page.type('#age', '121');
                    
                      await page.click('#button');
                          const ageGroup = await page.$eval('p', p => p.textContent);
                          if(ageGroup == "The person is in the age group: Invalid age")
                          console.log("Success 6");
                          else
                          console.log("fail 6");
                      }
                        catch(e){
                          console.log(e);
                          console.log('TESTCASE:test_case1:failure');
                        }finally{
                          await page.close();
                          await browser.close();
                        }})();

                        (async () => {
                          const browser = await puppeteer.launch();
                          const page = await browser.newPage();
                          try{await page.goto('https://8081-afcacefcabffbcfacbdcbaeafebdbefedd.examlyiopb.examly.io/');
                          // await page.setViewport({ width:1100, height:600, })
                          // await page.screenshot({path: 'example.png'});
                              await page.type('#age', '65');
                        
                          await page.click('#button');
                              const ageGroup = await page.$eval('p', p => p.textContent);
                              if(ageGroup == "The person is in the age group: Senior citizen")
                              console.log("Success 7");
                              else
                              console.log("fail 7");
                          }
                            catch(e){
                              console.log(e);
                              console.log('TESTCASE:test_case1:failure');
                            }finally{
                              await page.close();
                              await browser.close();
                            }})();
    

