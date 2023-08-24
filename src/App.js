import { Provider } from 'react-redux';
import { CssBaseline } from '@mui/material';

import Router from './config/router';
import { store } from './redux';

const App = () => {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Router />
    </Provider>
  );
};

export default App;
