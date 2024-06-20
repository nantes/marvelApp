import { HelmetProvider } from 'react-helmet-async';
import AppRoutes from './routes/appRoutes';
import {
  MarvelCharactersProvider,
  FavoriteCharactersProvider,
} from './context/CharactersContext';
import '@theme/global.css';

const App = () => (
  <HelmetProvider>
    <FavoriteCharactersProvider>
      <MarvelCharactersProvider>
        <AppRoutes />
      </MarvelCharactersProvider>
    </FavoriteCharactersProvider>
  </HelmetProvider>
);

export default App;
