import React, {lazy, Suspense} from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
const LazyAbout = lazy(() => import("./LazyComponent"));

const LazyMain = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <Suspense fallback="loding">
              <LazyAbout />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
};

export default LazyMain;
