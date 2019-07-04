class Song {
  constructor(id, mId, name, img,
    duration, url, singer) {
      this.id = id;
      this.mId = mId;
      this.name = name;
      this.img = img;
      this.duration = duration;
      this.url = url;
      this.singer = singer;
  }
}
// albumdesc: ""
// albumid: 7122716
// albummid: "000Gm2VZ2lheTK"
// albumname: "刺猬"
// alertid: 21
// belongCD: 1
// cdIdx: 0
// interval: 212
// isonly: 0
// label: "0"
// msgid: 14
// pay: {payalbum: 0, payalbumprice: 0, paydownload: 1, payinfo: 1, payplay: 0, …}
// preview: {trybegin: 0, tryend: 0, trysize: 960887}
// rate: 23
// singer: (2) [{…}, {…}]
// size5_1: 0
// size128: 3400288
// size320: 8500091
// sizeape: 0
// sizeflac: 42894052
// sizeogg: 4999623
// songid: 234133225
// songmid: "003Ld8Fm4dCKUj"
// songname: "刺猬"
// songorig: "刺猬"

export function createSong(data) {
  return new Song(
    data.songid,
    data.songmid,
    data.songname,
    `http://y.gtimg.cn/music/photo_new/T002R300x300M000${data.songmid}.jpg?max_age=2592000`,
    data.interval,
    '',
    data.singer.map(sin => sin.name).join('/')
  )
}
