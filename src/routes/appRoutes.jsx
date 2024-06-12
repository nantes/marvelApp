import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import { CharactersList } from '../pages/CharactersList/CharactersList';
import { Header } from '@components/Header/Header';
import { CharacterDetails } from '../pages/CharacterDetails/CharacterDetails';
import { FavoriteCharactersList } from '../pages/FavoriteCharactersList/FavoriteCharactersList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    children: [
      {
        path: '/',
        element: <CharactersList />,
      },
      {
        path: '/favorites',
        element: <FavoriteCharactersList />,
      },
      {
        path: '/character-details/:id',
        element: <CharacterDetails />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to='/' replace />,
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
