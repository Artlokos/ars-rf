import { type RouteObject } from 'react-router-dom';
import Index from './pages/index';
import PNews from './pages/pNews/PNews';

export const routesConfig: RouteObject[] = [
  {
    path: "/index",
    element: <Index />,
  },
  {
    path: "/news",
    element: <PNews label='good' />,
    // children: [{path: "newsLast",element: <NewsLast />,},],
  },
];