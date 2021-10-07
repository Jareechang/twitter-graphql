import {
  TrendingItem
} from '@app/gql-types';

const trendingItems : TrendingItem[] = [
  {
    id: '1',
    thumbnail: 'https://via.placeholder.com/150/1ee8a4',
    title: '#FarCry6',
    tweets: '66k'
  },
  {
    id: '2',
    thumbnail: 'https://via.placeholder.com/150/1ee8a4',
    title: 'Meme Stonks',
    tweets: '100k'
  },
  {
    id: '3',
    thumbnail: 'https://via.placeholder.com/150/1ee8a4',
    title: 'The Dark Knight just released in theaters',
    tweets: ''
  },
  {
    id: '4',
    thumbnail: 'https://via.placeholder.com/150/1ee8a4',
    title: 'NBA finals 2021',
    tweets: '50.5k'
  },
  {
    id: '4',
    thumbnail: 'https://via.placeholder.com/150/1ee8a4',
    title: 'Vaccines',
    tweets: '20.5k'
  },
];

export const trending = (): TrendingItem[] => {
  return trendingItems;
}
