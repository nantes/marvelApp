import { HelmetProvider } from 'react-helmet-async';
import AppRoutes from './routes/appRoutes';
import '@theme/global.css';

const App = () => (
  <HelmetProvider>
    <AppRoutes />
  </HelmetProvider>
);

export default App;
