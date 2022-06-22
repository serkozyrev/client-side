import React, { useContext } from "react";

import "./StatsHourlyPie.css";
import AuthContext from "../../context/auth-context";
import PieCharts from "../Charts/PieCHarts/PieCharts";

const StatsHourly = (props) => {
  const authCtx = useContext(AuthContext);
  return <PieCharts items={authCtx.statsHourForDay} statsHourly />;
};

export default StatsHourly;
