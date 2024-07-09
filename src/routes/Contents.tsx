import { Routes, Route } from "react-router-dom";
import Bookings from "../components/bookings/Bookings";

function Contents() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Bookings />} />
        <Route path="/logout" element={<h1>logout path</h1>} />
      </Routes>
    </>
  );
}

export default Contents;
