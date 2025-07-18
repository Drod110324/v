import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import 'antd/dist/reset.css'
import './index.css'
import App from './App.jsx'
import { Fragment } from 'react'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)

export default App;
