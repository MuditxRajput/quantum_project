// In App we need to design the react router dom...
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import PdfView from "./Components/PdfView";
import AboutUs from "./Pages/AboutUs";
import AddPdf from "./Pages/AddPdf";
import ForgetPassword from "./Pages/ForgetPassword";
import Homepage from "./Pages/Homepage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import AdminRoutes from "./Routes/AdminRoutes";
import store from "./Store/configStore";
const App = () => {
  return (
    
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/About" element={<AboutUs/>} />
          <Route path="/Contact" element={<Homepage/>} />
          <Route path="/Home" element={<Homepage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/forgetPassword" element = {<ForgetPassword/>}  />
          <Route path="/dashboard" element ={<AdminRoutes/>}>
             <Route path="" element={<AddPdf/>} />
          </Route>
          <Route path="/view" element = {<PdfView/>} /> 
        </Routes>
      </BrowserRouter>
    </Provider>
   
  );
};
export default App;
