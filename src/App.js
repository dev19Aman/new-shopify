import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from './components/custom/Loading';

const Home = lazy(() => import('./pages/Home'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const PageNotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/magento/checkout-request/:id" element={<ProductDetail />} />
           <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
