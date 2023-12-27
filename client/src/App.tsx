import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { PublicLayout } from "@src/layouts/PublicLayout";

const Home = lazy(() => import("@src/views/Home"));
const Register = lazy(() => import("@src/views/Register"));
const Login = lazy(() => import("@src/views/Login"))

function App() {
  return (
    <Suspense fallback={<div>loading</div>}>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/Login" element={<Login/>} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
