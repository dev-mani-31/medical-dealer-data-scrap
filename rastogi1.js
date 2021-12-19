const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
let buffer = fs.readFileSync('./rastogi1.json');
let data = JSON.parse(buffer);

url = 'https://www.lordshomoeopathic.com/dealers-list';
request(url, cb);

function cb(error, response, html) {
  if (error) {
    console.log('Error');
  } else {
    extractdata(html);
  }
}

function extractdata(html) {
  let $ = cheerio.load(html);
  let namearr = $('.col-md-4.col-sm-6.col-sms-12 .loc h4');
  let phonearr = $('.col-md-4.col-sm-6.col-sms-12 .loc strong');
  for (let i = 0; i < namearr.length; i++) {
    let n = $(namearr[i]).text();
    let p = $(phonearr[i]).text();
    data.push({
      name: n,
      phone: p,
    });
  }
  let stringData = JSON.stringify(data);
  fs.writeFileSync('rastogi1.json', stringData);
}
