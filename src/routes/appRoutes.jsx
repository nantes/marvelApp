import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CharactersList } from '../pages/CharactersList/CharactersList';
import { Header } from '@components/Header/Header';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    children: [
      {
        path: '/',
        element: <CharactersList />,
      },
    ],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
