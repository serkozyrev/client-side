import React, { useContext } from "react";
import { useState } from "react";
import Table from "react-bootstrap/Table";
import Card from "../UI/Card/Card";

import "./DataTable.css";
import AuthContext from "../context/auth-context";
import Search from "../Header/Search";

const DataTable = () => {
  let infoHeading, infoData;
  let filteredData = [];
  const authCtx = useContext(AuthContext);
  const [tableChoice, setTableChoice] = useState("1");

  const selectTableHandler = (event) => {
    setTableChoice(event.target.value);
  };
  switch (tableChoice) {
    case "1":
      infoHeading = ["Date", "Events", "Location"];
      if (authCtx.locationSearch !== "" && authCtx.dateSearch !== "") {
        authCtx.geoDailyEvents.filter((item) => {
          if (
            item.poiName
              .toLowerCase()
              .includes(authCtx.locationSearch.toLowerCase()) &&
            item.date.includes(authCtx.dateSearch)
          ) {
            filteredData.push(item);
          }
          return filteredData;
        });
        infoData = filteredData.map((record, index) => (
          <tr key={index}>
            <td>{record.date}</td>
            <td>{record.eventSum}</td>
            <td>{record.poiName}</td>
          </tr>
        ));
      } else if (authCtx.locationSearch !== "") {
        authCtx.geoDailyEvents.filter((item) => {
          if (
            item.poiName
              .toLowerCase()
              .includes(authCtx.locationSearch.toLowerCase())
          ) {
            filteredData.push(item);
          }
          return filteredData;
        });
        infoData = filteredData.map((record, index) => (
          <tr key={index}>
            <td>{record.date}</td>
            <td>{record.eventSum}</td>
            <td>{record.poiName}</td>
          </tr>
        ));
      } else if (authCtx.dateSearch !== "") {
        authCtx.geoDailyEvents.filter((item) => {
          if (item.date.includes(authCtx.dateSearch)) {
            filteredData.push(item);
          }
          return filteredData;
        });
        infoData = filteredData.map((record, index) => (
          <tr key={index}>
            <td>{record.date}</td>
            <td>{record.eventSum}</td>
            <td>{record.poiName}</td>
          </tr>
        ));
      } else {
        infoData = authCtx.geoDailyEvents.map((record, index) => (
          <tr key={index}>
            <td>{record.date}</td>
            <td>{record.eventSum}</td>
            <td>{record.poiName}</td>
          </tr>
        ));
      }
      break;
    case "2":
      infoHeading = ["Date", "Hour", "Events", "Location"];
      if (authCtx.locationSearch !== "" && authCtx.dateSearch !== "") {
        authCtx.hourlyEvents.filter((item) => {
          if (
            item.poiName
              .toLowerCase()
              .includes(authCtx.locationSearch.toLowerCase()) &&
            item.date.includes(authCtx.dateSearch)
          ) {
            filteredData.push(item);
          }
          return filteredData;
        });
        infoData = filteredData.map((record, index) => (
          <tr key={index}>
            <td>{record.date}</td>
            <td>{record.hour}</td>
            <td>{record.events}</td>
            <td>{record.poiName}</td>
          </tr>
        ));
      } else if (authCtx.locationSearch !== "") {
        authCtx.hourlyEvents.filter((item) => {
          if (
            item.poiName
              .toLowerCase()
              .includes(authCtx.locationSearch.toLowerCase())
          ) {
            filteredData.push(item);
          }
          return filteredData;
        });
        infoData = filteredData.map((record, index) => (
          <tr key={index}>
            <td>{record.date}</td>
            <td>{record.hour}</td>
            <td>{record.events}</td>
            <td>{record.poiName}</td>
          </tr>
        ));
      } else if (authCtx.dateSearch !== "") {
        authCtx.hourlyEvents.filter((item) => {
          if (item.date.includes(authCtx.dateSearch)) {
            filteredData.push(item);
          }
          return filteredData;
        });
        infoData = filteredData.map((record, index) => (
          <tr key={index}>
            <td>{record.date}</td>
            <td>{record.hour}</td>
            <td>{record.events}</td>
            <td>{record.poiName}</td>
          </tr>
        ));
      } else {
        infoData = authCtx.hourlyEvents.map((record, index) => (
          <tr key={index}>
            <td>{record.date}</td>
            <td>{record.hour}</td>
            <td>{record.events}</td>
            <td>{record.poiName}</td>
          </tr>
        ));
      }
      break;
    case "3":
      infoHeading = ["Date", "Impressions", "Clicks", "Revenue", "Location"];
      if (authCtx.locationSearch !== "" && authCtx.dateSearch !== "") {
        authCtx.geoStatsDaily.filter((item) => {
          if (
            item.poiName
              .toLowerCase()
              .includes(authCtx.locationSearch.toLowerCase()) &&
            item.date.includes(authCtx.dateSearch)
          ) {
            filteredData.push(item);
          }
          return filteredData;
        });
        infoData = filteredData.map((record, index) => (
          <tr key={index}>
            <td>{record.date}</td>
            <td>{record.sumImpressions}</td>
            <td>{record.sumClicks}</td>
            <td>{record.sumRevenue}</td>
            <td>{record.poiName}</td>
          </tr>
        ));
      } else if (authCtx.locationSearch !== "") {
        authCtx.geoStatsDaily.filter((item) => {
          if (
            item.poiName
              .toLowerCase()
              .includes(authCtx.locationSearch.toLowerCase())
          ) {
            filteredData.push(item);
          }
          return filteredData;
        });
        infoData = filteredData.map((record, index) => (
          <tr key={index}>
            <td>{record.date}</td>
            <td>{record.sumImpressions}</td>
            <td>{record.sumClicks}</td>
            <td>{record.sumRevenue}</td>
            <td>{record.poiName}</td>
          </tr>
        ));
      } else if (authCtx.dateSearch !== "") {
        authCtx.geoStatsDaily.filter((item) => {
          if (item.date.includes(authCtx.dateSearch)) {
            filteredData.push(item);
          }
          return filteredData;
        });
        infoData = filteredData.map((record, index) => (
          <tr key={index}>
            <td>{record.date}</td>
            <td>{record.sumImpressions}</td>
            <td>{record.sumClicks}</td>
            <td>{record.sumRevenue}</td>
            <td>{record.poiName}</td>
          </tr>
        ));
      } else {
        infoData = authCtx.geoStatsDaily.map((record, index) => (
          <tr key={index}>
            <td>{record.date}</td>
            <td>{record.sumImpressions}</td>
            <td>{record.sumClicks}</td>
            <td>{record.sumRevenue}</td>
            <td>{record.poiName}</td>
          </tr>
        ));
      }
      break;
    case "4":
      infoHeading = [
        "Date",
        "Hour",
        "Impressions",
        "Clicks",
        "Revenue",
        "Location",
      ];
      if (authCtx.locationSearch !== "" && authCtx.dateSearch !== "") {
        authCtx.statsHourly.filter((item) => {
          if (
            item.poiName
              .toLowerCase()
              .includes(authCtx.locationSearch.toLowerCase()) &&
            item.date.includes(authCtx.dateSearch)
          ) {
            filteredData.push(item);
          }
          return filteredData;
        });
        infoData = filteredData.map((record, index) => (
          <tr key={index}>
            <td>{record.date}</td>
            <td>{record.hour}</td>
            <td>{record.impressions}</td>
            <td>{record.clicks}</td>
            <td>{record.revenue}</td>
            <td>{record.poiName}</td>
          </tr>
        ));
      } else if (authCtx.locationSearch !== "") {
        authCtx.statsHourly.filter((item) => {
          if (
            item.poiName
              .toLowerCase()
              .includes(authCtx.locationSearch.toLowerCase())
          ) {
            filteredData.push(item);
          }
          return filteredData;
        });
        infoData = filteredData.map((record, index) => (
          <tr key={index}>
            <td>{record.date}</td>
            <td>{record.hour}</td>
            <td>{record.impressions}</td>
            <td>{record.clicks}</td>
            <td>{record.revenue}</td>
            <td>{record.poiName}</td>
          </tr>
        ));
      } else if (authCtx.dateSearch !== "") {
        authCtx.statsHourly.filter((item) => {
          if (item.date.includes(authCtx.dateSearch)) {
            filteredData.push(item);
          }
          return filteredData;
        });
        infoData = filteredData.map((record, index) => (
          <tr key={index}>
            <td>{record.date}</td>
            <td>{record.hour}</td>
            <td>{record.impressions}</td>
            <td>{record.clicks}</td>
            <td>{record.revenue}</td>
            <td>{record.poiName}</td>
          </tr>
        ));
      } else {
        infoData = authCtx.statsHourly.map((record, index) => (
          <tr key={index}>
            <td>{record.date}</td>
            <td>{record.hour}</td>
            <td>{record.impressions}</td>
            <td>{record.clicks}</td>
            <td>{record.revenue}</td>
            <td>{record.poiName}</td>
          </tr>
        ));
      }
      break;
    default:
      break;
  }

  return (
    <div className="expenses-table">
      <Card>
        <div className="row">
          <div className="col-sm-2 me-auto  bd-highlight">
            <select
              id="pieChart"
              className="form-select field "
              value={tableChoice}
              onChange={selectTableHandler}
            >
              <option value="1" defaultValue>
                Daily Events
              </option>
              <option value="2">Hourly Events</option>
              <option value="3">Statistics Daily</option>
              <option value="4">Statistics Hourly</option>
            </select>
          </div>
          <div className="col-sm-2 search-box">
            <Search location />
          </div>
          <div className="col-sm-2 search-box">
            <Search date />
          </div>
        </div>
        <Table responsive>
          <thead>
            <tr>
              {infoHeading.map((infoHeader, index) => (
                <th key={index}>{infoHeader}</th>
              ))}
            </tr>
          </thead>
          <tbody>{infoData}</tbody>
        </Table>
      </Card>
    </div>
  );
};

export default DataTable;
