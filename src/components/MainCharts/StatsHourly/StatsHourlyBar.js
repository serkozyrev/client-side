import React, { useContext } from "react";

import "./StatsHourlyBar.css";
import AuthContext from "../../context/auth-context";
import BarCharts from "../Charts/BarCharts/BarCharts";

const StatsHourly = (props) => {
  const authCtx = useContext(AuthContext);
  return <BarCharts items={authCtx.statsHourForDay} statsHourly />;
};

export default StatsHourly;
