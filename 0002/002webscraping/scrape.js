const request = require('request');
const cheerio = require('cheerio');

request('https://michaelhyatt.com/blog/', (error, response, html) => {
  if(!error && response.statusCode == 200){
    const $ = cheerio.load(html);

    const siteHeading = $('#mh-archive-header');

    //console.log(siteHeading.text()); 
    //const output = siteHeading.find('h1').next().text();
    //console.log(output);

    // const output = siteHeading.find('h1').parent().text();
    // console.log(output);
    
    $('.nav-item a').each((i, el) =>{
      const item = $(el).text();
      const link = $(el).attr('href');

      console.log(link); 
    });
  }

});