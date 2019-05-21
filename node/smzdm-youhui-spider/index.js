const request = require('request');
const cheerio = require('cheerio')
request('https://www.smzdm.com/youhui/', (err, res) => {
  if(!err){
    //console.log(res.body);
    const $ = cheerio.load(res.body, {
      // decodeEntities 要不要解析 html entity(&nbsp,$lt,&gt)
      decodeEntities: false
    })
    $('.list.list_preferential').each(function() {
                      //限制在当前项中查找
      const price = $('.listTitle .red', this).text();
      let title = $('.itemName a', this).html();
      //取代 <span></span> 为空格
      title = title.replace(/<.*>.*<\/.*>/g, '');
      const img = $('.picLeft img',this).attr('src');
      const desc = $('.lrInfo', this).text().trim();
      console.log({
        title, price, img, desc
      })
      
    })
  }
})