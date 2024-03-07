import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routing/router'
import { Provider } from 'react-redux'
import store from './store'
import { ConfigProvider, theme } from 'antd'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider   // for ant design components
        theme={{
          algorithm: theme.darkAlgorithm,
          token: {
            colorPrimary: '#01A140',
            fontSize: '16px'
          }
        }}

      >
        <RouterProvider router={router} />
      </ConfigProvider>
    </Provider>
  </React.StrictMode>,
)
