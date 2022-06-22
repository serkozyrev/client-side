import React, { useContext } from "react";

import "./StatsHourlyLine.css";
import AuthContext from "../../context/auth-context";
import LineCharts from "../Charts/LineCharts/LineCharts";

const StatsHourly = (props) => {
  const authCtx = useContext(AuthContext);
  return <LineCharts items={authCtx.statsHourForDay} statsHourly />;
};

export default StatsHourly;
