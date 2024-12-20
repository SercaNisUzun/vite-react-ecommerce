import { store } from './Redux/store.jsx'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import '../src/Css/Main.scss'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter basename='/vite-react-ecommerce/'>
      <App />
    </BrowserRouter>
  </Provider>,
)
