import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./Components/Admin/Admin";
import FashionConsultants from "./Components/Admin/Manage/FashionConsultants";
import Fabric from "./Components/Admin/Manage/Fabric";
import Garments from "./Components/Admin/Manage/Garments";
import About from "./Components/Admin/Manage/About";
import Users from "./Components/Admin/Manage/Users";
import Queries from "./Components/Admin/Manage/Queries";
import ConsultantBooking from "./Components/Admin/Manage/ConsultantBooking";
import FAQs from "./Components/Admin/Manage/FAQs";
import Home from "./Components/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="" element={<Home />} />
        <Route exact path="/admin" element={<Admin />}>
          <Route path="manage">
            <Route exact path="fashion" element={<FashionConsultants />} />
            <Route exact path="fabric" element={<Fabric />} />
            <Route exact path="garments" element={<Garments />} />
            <Route exact path="faq" element={<FAQs/>} />
            <Route exact path="about" element={<About />} />
            <Route exact path="users" element={<Users />} />
            <Route exact path="queries" element={<Queries />} />
            <Route exact path="consultant" element={<ConsultantBooking />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
