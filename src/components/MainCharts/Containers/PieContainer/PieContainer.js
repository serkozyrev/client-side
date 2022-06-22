import React from "react";

import HourlyEventsPie from "../../HourlyEvents/HourlyEventsPie";
import DailyEventsPie from "../../DailyEvents/DailyEventsPie";
import StatsDailyPie from "../../StatsDaily/StatsDailyPie";
import StatsHourlyPie from "../../StatsHourly/StatsHourlyPie";

const PieContainer = (props) => {
  let infoPie;
  switch (props.choice) {
    case "1":
      infoPie = <HourlyEventsPie chartType="Pie" />;
      break;
    case "2":
      infoPie = <DailyEventsPie chartType="Pie" />;
      break;
    case "3":
      infoPie = <StatsHourlyPie chartType="Pie" />;
      break;
    case "4":
      infoPie = <StatsDailyPie chartType="Pie" />;
      break;
    default:
      break;
  }
  return infoPie;
};

export default PieContainer;
