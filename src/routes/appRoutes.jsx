import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
