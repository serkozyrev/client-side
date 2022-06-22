import React, { useContext } from "react";

import "./HourlyEventsBar.css";

import AuthContext from "../../context/auth-context";
import BarCharts from "../Charts/BarCharts/BarCharts";

const HourlyEvents = (props) => {
  const authCtx = useContext(AuthContext);
  return <BarCharts items={authCtx.eventsHourForDay} hourlyEvents />;
};

export default HourlyEvents;
