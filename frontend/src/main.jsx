import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/global.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App.jsx'
import {AuthProvider} from './context/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
  
    <Provider store={store}>
      <AuthProvider>
        <App/>
      </AuthProvider>
    </Provider>
  
)
