export type bdType = {
  id: string;
  type: string;
  title: string;
  hint: string;
  description: string;
  geometry: number[][] | number[];
  images: string[];
  more: string;
};

const bd: bdType[] = [
  {
    id: '1',
    type: 'roads',
    title: 'ул. Академика Курчатова',
    hint: 'ул. Академика Курчатова',
    description:
      'Улица названа в честь трижды Героя Социалистического Труда, академика АН СССР и АН Узбекской ССР, доктора физико-математических наук, профессора,  основателя и первого директора Института атомной энергии, Курчатова Игоря Васильевича',
    geometry: [
      [53.83578, 27.468698],
      [53.837911, 27.472917],
      [53.841098, 27.477736],
    ],
    images: [
      'http://cdn.iz.ru/sites/default/files/styles/900x506/public/article-2018-01/RIAN_83854.HR_.ru_.jpg?itok=Qcf5FTh5',
      'https://mcdn.tvzvezda.ru/storage/news_other_images/2019/11/30/e1292afe9b684332a8b1b4bd2952af43.jpg',
    ],
    more: 'https://ru.wikipedia.org/wiki/%D0%9A%D1%83%D1%80%D1%87%D0%B0%D1%82%D0%BE%D0%B2,_%D0%98%D0%B3%D0%BE%D1%80%D1%8C_%D0%92%D0%B0%D1%81%D0%B8%D0%BB%D1%8C%D0%B5%D0%B2%D0%B8%D1%87',
  },
];

export default bd;
