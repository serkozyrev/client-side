import React, { useContext } from "react";

import "./DailyEventsBar.css";

import AuthContext from "../../context/auth-context";
import BarCharts from "../Charts/BarCharts/BarCharts";

const DailyEvents = (props) => {
  const authCtx = useContext(AuthContext);
  return <BarCharts items={authCtx.dailyEvents} dailyEvents />;
};

export default DailyEvents;
