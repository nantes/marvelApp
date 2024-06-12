import { HelmetProvider } from 'react-helmet-async';
import AppRoutes from './routes/appRoutes';
import { FavoriteCharactersProvider } from './context/FavoriteCharactersContext';
import '@theme/global.css';

const App = () => (
  <HelmetProvider>
    <FavoriteCharactersProvider>
      <AppRoutes />
    </FavoriteCharactersProvider>
  </HelmetProvider>
);

export default App;
