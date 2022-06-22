import React, { useContext } from "react";

import AuthContext from "../../context/auth-context";

import "./StatsDailyBar.css";
import BarCharts from "../Charts/BarCharts/BarCharts";

const StatsDaily = (props) => {
  const authCtx = useContext(AuthContext);
  return <BarCharts items={authCtx.statsDaily} statsDaily />;
};

export default StatsDaily;
