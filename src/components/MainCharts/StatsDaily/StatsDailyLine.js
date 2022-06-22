import React, { useContext } from "react";

import AuthContext from "../../context/auth-context";
import LineCharts from "../Charts/LineCharts/LineCharts";

import "./StatsDailyLine.css";

const StatsDaily = (props) => {
  const authCtx = useContext(AuthContext);
  return <LineCharts items={authCtx.statsDaily} statsDaily />;
};

export default StatsDaily;
