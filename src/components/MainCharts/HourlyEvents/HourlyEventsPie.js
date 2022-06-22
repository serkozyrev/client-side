import React, { useContext } from "react";

import "./HourlyEventsPie.css";

import AuthContext from "../../context/auth-context";
import PieCharts from "../Charts/PieCHarts/PieCharts";

const HourlyEvents = (props) => {
  const authCtx = useContext(AuthContext);
  return <PieCharts items={authCtx.eventsHourForDay} hourlyEvents />;
};

export default HourlyEvents;
