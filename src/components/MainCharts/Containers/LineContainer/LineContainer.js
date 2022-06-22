import React from "react";

import HourlyEventsLine from "../../HourlyEvents/HourlyEventsLine";
import DailyEventsLine from "../../DailyEvents/DailyEventsLine";
import StatsDailyLine from "../../StatsDaily/StatsDailyLine";
import StatsHourlyLine from "../../StatsHourly/StatsHourlyLine";

const LineContainer = (props) => {
  let infoLine;
  switch (props.choice) {
    case "1":
      infoLine = <HourlyEventsLine chartType="Line" />;
      break;
    case "2":
      infoLine = <DailyEventsLine chartType="Line" />;
      break;
    case "3":
      infoLine = <StatsHourlyLine chartType="Line" />;
      break;
    case "4":
      infoLine = <StatsDailyLine chartType="Line" />;
      break;
    default:
      break;
  }
  return infoLine;
};

export default LineContainer;
