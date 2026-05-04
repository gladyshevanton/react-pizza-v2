import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

// @ts-ignore
import "./scss/app.scss";
import MainLayout from "./layouts/MainLayout";

const Cart = React.lazy(
  () => import(/* webpackChunkName: "Cart"*/ "./pages/Cart"),
);
const FullPizza = React.lazy(
  () => import(/* webpackChunkName: "FullPizza"*/ "./pages/FullPizza"),
);
const NotFound = React.lazy(
  () => import(/* webpackChunkName: "CartNotFound"*/ "./pages/NotFound"),
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route
          path="cart"
          element={
            <Suspense fallback={<div>Идёт загрузка корзины...</div>}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path="pizza/:id"
          element={
            <Suspense fallback={<div>Идёт загрузка...</div>}>
              <FullPizza />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<div>Идёт загрузка...</div>}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
