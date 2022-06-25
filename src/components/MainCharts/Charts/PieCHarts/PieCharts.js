import React, { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import "./PieCharts.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieCharts = (props) => {
  const [selectData, setSelectData] = useState("1");
  const [daySelected, setDaySelected] = useState("2017-01-01");

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
    const data = {
      labels: date_list,
      datasets: [
        {
          label: "# of Votes",
          data: events,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(64, 123, 47, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(64, 123, 47, 1)",
          ],
          borderWidth: 2,
        },
      ],
    };
    return (
      <div className="col-sm-10 d-flex justify-content-center">
        <div className="col-sm-10 d-flex justify-content-center">
          <Pie data={data} />
        </div>
      </div>
    );
  }
  if (props.statsDaily) {
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
        break;
      case "2":
        dataSelected = clicks;
        break;
      case "3":
        dataSelected = impressions;
        break;
      default:
        break;
    }
    const data = {
      labels: date_list,
      datasets: [
        {
          label: "# of Votes",
          data: dataSelected,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(64, 123, 47, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(64, 123, 47, 1)",
          ],
          borderWidth: 2,
        },
      ],
    };
    return (
      <div className="row">
        <div className="col-sm-8 d-flex align-self-center">
          <Pie data={data} />
        </div>
        <div className="col-sm-4 d-flex flex-column align-items-start">
          <div className="col-sm-11">
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
    console.log(hours);

    let dataSelectedForStat;

    switch (selectData) {
      case "1":
        dataSelectedForStat = revenue;
        break;
      case "2":
        dataSelectedForStat = clicks;
        break;
      case "3":
        dataSelectedForStat = impressions;
        break;
      default:
        break;
    }
    const data = {
      labels: hours,
      datasets: [
        {
          label: "# of Votes",
          data: dataSelectedForStat,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(64, 123, 47, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(64, 123, 47, 1)",
          ],
          borderWidth: 2,
        },
      ],
    };
    return (
      <>
        <div className="row">
          <div className="col-sm-8 d-flex align-self-center">
            <Pie data={data} />
            <div className="col-sm-6">
              <div className="col-sm-12 d-flex flex-column">
                <div className="col-sm-10">
                  <select
                    id="pieChart"
                    className="form-select field"
                    value={daySelected}
                    onChange={selectDayHandler}
                  >
                    {date_list.map((date, index) => (
                      <option key={index} value={date}>
                        {date}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-sm-10">
                  <select
                    id="pieChart"
                    className="form-select field "
                    value={selectData}
                    onChange={selectDataHandler}
                  >
                    <option value="1" defaultValue>
                      Revenue
                    </option>
                    <option value="2">Impressions</option>
                    <option value="3">Clicks</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
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
    const data = {
      labels: hours,
      datasets: [
        {
          label: "# of Votes",
          data: events,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(64, 123, 47, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(64, 123, 47, 1)",
          ],
          borderWidth: 2,
        },
      ],
    };
    return (
      <div className="row">
        <div className="col-sm-8 d-flex align-self-center">
          <Pie data={data} />
          <div className="col-sm-6">
            <div className="col-sm-12 d-flex flex-column">
              <div className="col-sm-10">
                <select
                  id="pieChart"
                  className="form-select field"
                  value={daySelected}
                  onChange={selectDayHandler}
                >
                  {date_list.map((date, index) => (
                    <option key={index} value={date}>
                      {date}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default PieCharts;
