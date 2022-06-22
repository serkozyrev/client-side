import React, { useContext } from "react";

import AuthContext from "../../context/auth-context";
import PieCharts from "../Charts/PieCHarts/PieCharts";

import "./StatsDailyPie.css";

const StatsDaily = (props) => {
  const authCtx = useContext(AuthContext);
  return <PieCharts items={authCtx.statsDaily} statsDaily />;
};

export default StatsDaily;
