import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { NotFound } from "./components/NotFound";
import { Register } from "./components/Register";
import { ForgotPassword } from "./components/ForgotPassword";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={""}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
