import { type RouteObject } from 'react-router-dom';
import Index from './pages/index';
import PNews from './pages/pNews/PNews';

const newsList = [
  'Road',
  'Kafe',
  'Event',
  'Weather',
  'Rent'
];

export const routesConfig: RouteObject[] = [
  {
    path: "/index",
    element: <Index />,
  },
  {
    path: "/news",
    element: <PNews label='Last News' newslist={newsList} />,
    // children: [{path: "newsLast",element: <NewsLast />,},],
  },
];