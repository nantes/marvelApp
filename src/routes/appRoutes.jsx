import { useState } from 'react';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import CharactersList from '../pages/CharactersList/CharactersList';
import { Header } from '@components/Header/Header';
import CharacterDetails from '../pages/CharacterDetails/CharacterDetails';
import FavoriteCharactersList from '../pages/FavoriteCharactersList/FavoriteCharactersList';

const AppRoutes = () => {
  const [isLoading, setIsLoading] = useState(true);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Header isLoading={isLoading} />,
      children: [
        {
          path: '/',
          element: <CharactersList setIsLoading={setIsLoading} />,
        },
        {
          path: '/favorites',
          element: <FavoriteCharactersList />,
        },
        {
          path: '/character-details/:id',
          element: <CharacterDetails setIsLoading={setIsLoading} />,
        },
      ],
    },
    {
      path: '*',
      element: <Navigate to='/' replace />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
