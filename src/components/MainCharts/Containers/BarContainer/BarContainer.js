import React from "react";

import HourlyEventsBar from "../../HourlyEvents/HourlyEventsBar";
import DailyEventsBar from "../../DailyEvents/DailyEventsBar";
import StatsDailyBar from "../../StatsDaily/StatsDailyBar";
import StatsHourlyBar from "../../StatsHourly/StatsHourlyBar";

const BarContainer = (props) => {
  let infoBar;
  switch (props.choice) {
    case "1":
      infoBar = <HourlyEventsBar chartType="Bar" />;
      break;
    case "2":
      infoBar = <DailyEventsBar chartType="Bar" />;
      break;
    case "3":
      infoBar = <StatsHourlyBar chartType="Bar" />;
      break;
    case "4":
      infoBar = <StatsDailyBar chartType="Bar" />;
      break;
    default:
      break;
  }
  return infoBar;
};

export default BarContainer;
