import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EventDetail from './components/EventDetail.tsx'
import EventsList from './components/EventsList.tsx'
import Stratch from './components/Stratch.tsx'
import { Provider } from 'react-redux'
import {store} from './redux/store/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/events" element={<EventsList />} />
    <Route path="/events/:id" element={<EventDetail />} />
    <Route path="/manage/:id" element={<App />} />
    <Route path="/createvent" element={<App />} />
    <Route path="/scratch" element={<Stratch />} />
  </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
