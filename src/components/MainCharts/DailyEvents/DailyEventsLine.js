import React, { useContext } from "react";

import "./DailyEventsLine.css";

import AuthContext from "../../context/auth-context";
import LineCharts from "../Charts/LineCharts/LineCharts";

const DailyEvents = (props) => {
  const authCtx = useContext(AuthContext);

  return <LineCharts items={authCtx.dailyEvents} dailyEvents />;
};

export default DailyEvents;
