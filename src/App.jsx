import { BrowserRouter, Route, Routes } from 'react-router';
import { Layout } from './Components/Layout/Layout';
import { AppProvider } from './Components/Provider/Provider';
import { Chapter } from './Pages/Chapter/Chapter';
import { Error404 } from './Pages/Error404/Error404';
import { Home } from './Pages/Home';
import { LegalMentions } from './Pages/LegalMentions/LegalMentions';
import { Redirect } from './Pages/Redirect/Redirect';

import './App.css';


export function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path={'/chapter/:id'} element={<Chapter />} />
            <Route path='/redirect' element={<Redirect />} />
            <Route path='/mentions-legales' element={<LegalMentions />} />
            <Route path='*' element={<Error404 />} />
          </Route>
        </Routes>
      </AppProvider>
    </BrowserRouter>
  )
}