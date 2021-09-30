const mountainNames = [
  'Mount Everest',
  'K2',
  'Kangchenjunga',
  'Lhotse',
  'Makalu',
  'Cho Oyu',
  'Dhaulagiri I',
  'Manaslu',
  'Nanga Parbat',
  'Annapurna I',
  'Gasherbrum I',
  'Broad Peak',
  'Gasherbrum II',
  'Shisha Pangma',
  'Gyachung Kang',
  'Gasherbrum III',
  'Annapurna II',
  'Gasherbrum IV',
  'Himalchuli',
];

const mountainHeights = [
  8848, 8611, 8586, 8516, 8485, 8188, 8167, 8163, 8126, 8091, 8080, 8051, 8035,
  8027, 7952, 7946, 7937, 7932, 7893,
];

const mountainImagePaths = [
  './media/01-Everest.png',
  './media/02-K2.png',
  './media/03-Kangchenjunga.png',
  './media/04-Lhotse.png',
  './media/05-Makalu.png',
  './media/06-Cho-Oyu.png',
  './media/07-Dhaulagiri-I.png',
  './media/08-Manaslu.png',
  './media/09-Nanga-Parbat.png',
  './media/10-Annapurna-I.png',
  './media/11-Gasherbrum-I.png',
  './media/12-Broad-Peak.png',
  './media/13-Gasherbrum-II.png',
  './media/14-Shisha-Pangma.png',
  './media/15-Gyachung-Kang.png',
  './media/16-Gasherbrum-III.png',
  './media/17-Annapurna-II.png',
  './media/18-Gasherbrum-IV.png',
  './media/19-Himalchuli.png',
];

class Mountain {
  constructor(name, height, imagePath, id) {
    this.name = name;
    this.height = height;
    this.imagePath = imagePath;
    this.id = id;
  }
}

export { Mountain, mountainHeights, mountainImagePaths, mountainNames };
