import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./components/Layout";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const NotFound = lazy(() => import("./pages/NotFound"));

function PageLoader() {
  return <div className="page-loader">Loading...</div>;
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          index
          element={
            <Suspense fallback={<PageLoader />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="about"
          element={
            <Suspense fallback={<PageLoader />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="blog/:slug"
          element={
            <Suspense fallback={<PageLoader />}>
              <BlogPost />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<PageLoader />}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}
