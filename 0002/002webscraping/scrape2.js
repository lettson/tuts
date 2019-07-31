const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const writeStream = fs.createWriteStream('post.csv');

//Write headers
writeStream.write(`Title,Link \n`);

request('https://michaelhyatt.com/blog/', (error, response, html) => {
  if(!error && response.statusCode == 200){
    const $ = cheerio.load(html);

    
    $('.mh-archive-single').each((i, el) => {
      const title = $(el)
      .find('h4')
      .text()
      .replace(/\s\s+/g, '');
      const link = $(el).find('a').attr('href');
      const date = $(el).find('')

      // Write row to CSV
      writeStream.write(`${title},${link} \n`);
    });

    console.log('scraping done ');
  }

});