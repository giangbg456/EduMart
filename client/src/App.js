// import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { FiSettings } from 'react-icons/fi'
import { publicRoutes } from './routes/routes'
import DefaultLayout from './Layout/DefaultLayout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Layout = route.layout || DefaultLayout;
            const Page = route.component;

            return ( 
              <Route 
                key={index} 
                path={route.path} 
                element={
                  <Layout >
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
