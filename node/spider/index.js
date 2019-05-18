const https = require('https');
// fs 文件操作的内置模块
const fs = require('fs');
//路径解析模块
const path = require('path')
const cheerio = require('cheerio')
// 服务器端 $ jquery
const url = 'https://movie.douban.com/top250';
const imageDir = './images/';

function spideMovies(start) {
  https.get(url + `?start=${start}`, (res) => {
    //请求成功的回调函数，放在第二个参数
    res.setEncoding('utf-8')
    let html = ''
    // 源源不断收到数据，触发data事件
    res.on('data', (chunk) => {
      html += chunk;
      console.log(chunk);
    })
    // 数据发送完毕
    res.on('end', () => {
      //可以用的 html
      const $ = cheerio.load(html)
      let movies = []
      $('.item').each(function () {
        //爬取图片
        //this在哪个作用域之内查找    -> 在每一部电影里面找，不加则默认全局，每次循环只找到第一张
        const picUrl = $('.pic a img', this).attr('src');
        // 电影名字
        const title = $('.title', this).text();
        //  电影演员
        const star = $('.info .star .rating_num', this).text()
        // 电影详情
        const link = $('a', this).attr('href');
        const movie = {
          title,
          star,
          link,
          picUrl
        }
        movies.push(movie)
        //入库？
        //console.log(picUrl);
        //写个方法保存在本地
        downloadImg(picUrl);

      })
      //文件名上标识 数据的页数
      saveLocalData(start / 25, movies);
    })
  })
}

const dataDir = './moviesData/'
function saveLocalData(page,movies) {
  // movies 数组文本信息
  fs.writeFile(dataDir + `data${page}.json`,
    JSON.stringify(movies), (err) => {
      if (!err) {
        console.log('数据保存成功');
      } else {
        console.log(err);
      }
    })
}

function downloadImg(picUrl) {
  https.get(picUrl, (res) => {
    //图片内容 二进制
    res.setEncoding('binary')
    let imageData = '';
    res.on('data', (chunk) => {
      imageData += chunk;
    })
    res.on('end', () => {
      //文件写入
      fs.writeFile(imageDir + path.basename(picUrl), imageData,
        'binary', (err) => {
          if (!err) {
            console.log('image downloaded', path.basename(picUrl))
          }
        })
    })
  })
}

//全部爬取
//es6 generate 函数
function* doSpider(x) {
  let start = 0;
  while (start < x) {
    yield start

    spideMovies(start);
    start += 25
  }
}
for (let x of doSpider(250)) {
  console.log('爬取', x)
}