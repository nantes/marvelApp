import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CharactersList } from '../pages/CharactersList/CharactersList';
import { Header } from '@components/Header/Header';
import { CharacterDetails } from '../pages/CharacterDetails/CharacterDetails';
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
        path: '/character-details/:id',
        element: <CharacterDetails />,
      },
    ],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
