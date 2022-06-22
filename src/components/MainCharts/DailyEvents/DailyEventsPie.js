import React, { useContext } from "react";

import "./DailyEventsPie.css";

import AuthContext from "../../context/auth-context";
import PieCharts from "../Charts/PieCHarts/PieCharts";

const DailyEvents = (props) => {
  const authCtx = useContext(AuthContext);

  return <PieCharts items={authCtx.dailyEvents} dailyEvents />;
};

export default DailyEvents;
