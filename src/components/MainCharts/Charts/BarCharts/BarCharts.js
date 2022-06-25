import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import "./BarCharts.css";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarCharts = (props) => {
  const [daySelected, setDaySelected] = useState("2017-01-01");
  const [selectData, setSelectData] = useState("1");

  const selectDataHandler = (event) => {
    setSelectData(event.target.value);
  };

  const selectDayHandler = (event) => {
    setDaySelected(event.target.value);
  };

  if (props.dailyEvents) {
    let date_list = [],
      events = [];
    for (const item of props.items) {
      date_list.push(item.date);
      events.push(item.eventSum);
    }

    const options = {
      plugins: {
        title: {
          display: true,
          text: "Daily Events Bar",
          font: {
            size: 14,
          },
        },
      },
      responsive: true,
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true,
        },
      },
    };

    const labels = date_list;

    const data = {
      labels,
      datasets: [
        {
          label: "EventSum",
          data: events,
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
      ],
    };
    return (
      <div className="d-flex justify-content-center">
        <div className="col-sm-8 ">
          <Bar options={options} data={data} />
        </div>
      </div>
    );
  }
  if (props.statsDaily) {
    let barName = "";
    let date_list = [],
      revenue = [],
      clicks = [],
      impressions = [];

    for (const item of props.items) {
      date_list.push(item.date);
      revenue.push(item.sumRevenue);
      clicks.push(item.sumClicks);
      impressions.push(item.sumImpressions);
    }
    let dataSelected;

    switch (selectData) {
      case "1":
        dataSelected = revenue;
        barName = "Revenue";
        break;
      case "2":
        dataSelected = clicks;
        barName = "Clicks";
        break;
      case "3":
        dataSelected = impressions;
        barName = "Impressions";
        break;
      default:
        break;
    }

    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Statistics Per Day",
          font: {
            size: 14,
          },
        },
      },
    };

    const labels = date_list;

    const data = {
      labels,
      datasets: [
        {
          label: barName,
          data: dataSelected,
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
      ],
    };
    return (
      <div className="d-flex justify-content-center  transaction-container-bar">
        <div className="col-6 mx-4 d-flex justify-content-center">
          <select
            id="pieChart"
            className="form-select field "
            value={selectData}
            onChange={selectDataHandler}
          >
            <option value="1" defaultValue>
              Revenue Summary
            </option>
            <option value="2">Impressions Summary</option>
            <option value="3">Clicks Summary</option>
          </select>
        </div>
        <div className=" col-7 mx-4 d-flex justify-content-center">
          <Bar options={options} data={data} />
        </div>
      </div>
    );
  }
  if (props.hourlyEvents) {
    let date_list = [],
      hours = [],
      events = [];

    for (const item in props.items) {
      date_list.push(item);
    }
    let dataSelect = Object.keys(props.items)
      .filter((key) => key === daySelected)
      .reduce((obj, key) => {
        return Object.assign(obj, {
          [key]: props.items[key],
        });
      }, {});
    for (const item in dataSelect) {
      for (const itemValue in dataSelect[item]) {
        events.push(dataSelect[item][itemValue]["events"]);
        hours.push(`${dataSelect[item][itemValue]["hour"]}:00 hour`);
      }
    }

    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Number of Events Per Hour",
          font: {
            size: 14,
          },
        },
      },
    };

    const labels = hours;
    const data = {
      labels,
      datasets: [
        {
          label: "Number of Events",
          data: events,
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
      ],
    };

    return (
      <div className="d-flex justify-content-center  transaction-container-bar">
        <div className="col-6 mx-4 d-flex justify-content-center">
          <select
            id="lineChart"
            className="form-select field "
            value={daySelected}
            onChange={selectDayHandler}
          >
            {date_list.map((date, i) => (
              <option key={i} value={date}>
                {date}
              </option>
            ))}
          </select>
        </div>
        <div className="col-8 mx-4 d-flex justify-content-center">
          <Bar options={options} data={data} />
        </div>
      </div>
    );
  }
  if (props.statsHourly) {
    let date_list = [],
      hours = [],
      revenue = [],
      clicks = [],
      impressions = [];

    for (const item in props.items) {
      date_list.push(item);
    }
    let dataSelect = Object.keys(props.items)
      .filter((key) => key === daySelected)
      .reduce((obj, key) => {
        return Object.assign(obj, {
          [key]: props.items[key],
        });
      }, {});
    for (const item in dataSelect) {
      for (const itemValue in dataSelect[item]) {
        revenue.push(dataSelect[item][itemValue]["revenue"]);
        hours.push(`${dataSelect[item][itemValue]["hour"]}:00 hour`);
        impressions.push(dataSelect[item][itemValue]["impressions"]);
        clicks.push(dataSelect[item][itemValue]["clicks"]);
      }
    }

    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        scales: {
          y: {
            suggestedMin: 650,
            suggestedMax: 1000,
          },
        },
        title: {
          display: true,
          text: "Amount of Events Per Hour",
          font: {
            size: 14,
          },
        },
      },
    };

    const labels = hours;

    const data = {
      labels,
      datasets: [
        {
          label: "Revenue",
          data: revenue,
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
        {
          label: "Clicks",
          data: clicks,
          borderColor: "rgb(64, 123, 47)",
          backgroundColor: "rgba(64, 123, 47, 0.5)",
        },
      ],
    };
    const dataImpression = {
      labels,
      datasets: [
        {
          label: "Impressions",
          data: impressions,
          borderColor: "rgb(180, 52, 88)",
          backgroundColor: "rgba(180, 52, 88, 0.5)",
        },
      ],
    };

    return (
      <div className="d-flex justify-content-center  transaction-container-bar">
        <div className="col-6 mx-4 d-flex justify-content-center bar-margin">
          <select
            id="lineChart"
            className="form-select field "
            value={daySelected}
            onChange={selectDayHandler}
          >
            {date_list.map((date) => (
              <option value={date}>{date}</option>
            ))}
          </select>
        </div>
        <div className="col-6 mx-4 d-flex justify-content-center">
          <Bar options={options} data={data} />
          <Bar options={options} data={dataImpression} />
        </div>
      </div>
    );
  }
};

export default BarCharts;
