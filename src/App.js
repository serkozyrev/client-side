import React from "react";
import { Routes, Route } from "react-router-dom";
import DataTable from "./components/DataTable/DataTable";
import GeoVisual from "./components/GeoVisualization/GeoVisual";

import Header from "./components/Header/Header";

import UserDashboard from "./components/UserDashboard";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<UserDashboard />} />
        <Route exact path="/data_tables" element={<DataTable />} />
        <Route exact path="/geo_location" element={<GeoVisual />} />
      </Routes>
    </>
  );
}

export default App;
