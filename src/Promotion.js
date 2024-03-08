import { useState, useEffect } from 'react';
import GetPage from "./components/GetPage";
import * as cheerio from 'cheerio';
import emailjs from '@emailjs/browser';

function Promotion() {
  const [html, setHtml] = useState();
  const [price, setPrice] = useState();

  useEffect(() => {
    Html();
  }, [])

  async function Html(){
    const html = await GetPage("https://www.morele.net/fotel-sense7-materialowy-sentinel-czarny-8148250/");
    setHtml(html.data)
  }

  var templateParams = {
    name: 'James',
    notes: 'Check this out!',
  };

  const ScoreTable = async() => {
    if(html){
      const $ = cheerio.load(html);
      const placeTitle = $('#product_price_brutto').text();
      if(price && placeTitle){
        console.log('working')
        if(price !== parseInt(placeTitle)){
          await emailjs.send('service_gpnyjmu', 'template_vurr4ao', templateParams, 'aIUXDF1E27inXVykg').then(
            (response) => {
              console.log('SUCCESS!', response.status, response.text);
            },
            (error) => {
              console.log('FAILED...', error);
            },
          );
        }
      }
      setPrice(parseInt(placeTitle))
    }
  }

  setInterval(ScoreTable, 60000);
}


export default Promotion;
