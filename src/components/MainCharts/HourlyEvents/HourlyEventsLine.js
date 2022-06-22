import React, { useContext } from "react";

import "./HourlyEventsLine.css";

import AuthContext from "../../context/auth-context";
import LineCharts from "../Charts/LineCharts/LineCharts";

const HourlyEvents = (props) => {
  const authCtx = useContext(AuthContext);
  return <LineCharts items={authCtx.eventsHourForDay} hourlyEvents />;
};

export default HourlyEvents;
