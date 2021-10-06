import Everest from './media/01-Everest.png';
import K2 from './media/02-K2.png';
import Kangchenjunga from './media/03-Kangchenjunga.png';
import Lhotse from './media/04-Lhotse.png';
import Makalu from './media/05-Makalu.png';
import ChoOyu from './media/06-Cho-Oyu.png';
import DhaulagiriI from './media/07-Dhaulagiri-I.png';
import Manaslu from './media/08-Manaslu.png';
import NangaParbat from './media/09-Nanga-Parbat.png';
import AnnapurnaI from './media/10-Annapurna-I.png';
import GasherbrumI from './media/11-Gasherbrum-I.png';
import BroadPeak from './media/12-Broad-Peak.png';
import GasherbrumII from './media/13-Gasherbrum-II.png';
import ShishaPangma from './media/14-Shisha-Pangma.png';
import GyachungKang from './media/15-Gyachung-Kang.png';
import GasherbrumIII from './media/16-Gasherbrum-III.png';
import AnnapurnaII from './media/17-Annapurna-II.png';
import GasherbrumIV from './media/18-Gasherbrum-IV.png';
import Himalchuli from './media/19-Himalchuli.png';

import ChinaFlag from './media/flags/china.png';
import NepalFlag from './media/flags/nepal.png';
import IndiaFlag from './media/flags/india.png';
import PakistanFlag from './media/flags/pakistan.png';

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

const mountainCountries = [
  ['Nepal', 'China'],
  ['Pakistan', 'China'],
  ['Nepal', 'India'],
  ['Nepal', 'China'],
  ['Nepal', 'China'],
  ['Nepal', 'China'],
  ['Nepal'],
  ['Nepal'],
  ['Pakistan'],
  ['Nepal'],
  ['Pakistan', 'China'],
  ['Pakistan', 'China'],
  ['Pakistan', 'China'],
  ['China'],
  ['Nepal', 'China'],
  ['Pakistan', 'China'],
  ['Nepal'],
  ['Pakistan'],
  ['Nepal'],
];

const mountainHeights = [
  8848, 8611, 8586, 8516, 8485, 8188, 8167, 8163, 8126, 8091, 8080, 8051, 8035,
  8027, 7952, 7946, 7937, 7932, 7893,
];

const mountainImages = [
  Everest,
  K2,
  Kangchenjunga,
  Lhotse,
  Makalu,
  ChoOyu,
  DhaulagiriI,
  Manaslu,
  NangaParbat,
  AnnapurnaI,
  GasherbrumI,
  BroadPeak,
  GasherbrumII,
  ShishaPangma,
  GyachungKang,
  GasherbrumIII,
  AnnapurnaII,
  GasherbrumIV,
  Himalchuli,
];

const GetFlag = (country) => {
  switch (country) {
    case 'Nepal': {
      return NepalFlag;
    }
    case 'India': {
      return IndiaFlag;
    }
    case 'Pakistan': {
      return PakistanFlag;
    }
    case 'China': {
      return ChinaFlag;
    }
    default:
      return NepalFlag;
  }
};

class Mountain {
  constructor(name, height, image, countries, id) {
    this.name = name;
    this.height = height;
    this.image = image;
    this.id = id;
    this.countries = countries;
  }
}

export {
  Mountain,
  mountainHeights,
  mountainImages,
  mountainNames,
  mountainCountries,
  GetFlag,
};
