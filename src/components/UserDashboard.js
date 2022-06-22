import React, { useState } from "react";
import BarContainer from "./MainCharts/Containers/BarContainer/BarContainer";
import LineContainer from "./MainCharts/Containers/LineContainer/LineContainer";
import PieContainer from "./MainCharts/Containers/PieContainer/PieContainer";

import Card from "./UI/Card/Card";

import "./UserDashboard.css";

const UserDashboard = () => {
  const [selectedInfoBar, setSelectedInfoBar] = useState("1");
  const [selectedInfoLine, setSelectedInfoLine] = useState("1");
  const [selectedInfoPie, setSelectedInfoPie] = useState("1");

  const selectBarHandler = (event) => {
    setSelectedInfoBar(event.target.value);
  };
  const selectPieHandler = (event) => {
    setSelectedInfoPie(event.target.value);
  };
  const selectLineHandler = (event) => {
    setSelectedInfoLine(event.target.value);
  };

  return (
    <>
      <div className="mt-5 text-center expenses">
        <div className="transaction-container">
          <Card className="transaction-body__bar">
            <div className="d-flex justify-content-center">
              <div className="col-8 mb-4 mt-3 transaction-container">
                <h6 className="form-label" htmlFor="description">
                  Information to Visualize
                </h6>
                <select
                  id="barChart"
                  className="form-select field"
                  value={selectedInfoBar}
                  onChange={selectBarHandler}
                >
                  <option value="1" defaultValue>
                    Events by Hour
                  </option>
                  <option value="2">Events by Day</option>
                  <option value="3">Statistics by Hour</option>
                  <option value="4">Statistics by Day</option>
                </select>
              </div>
            </div>
            <BarContainer choice={selectedInfoBar} />
          </Card>
          <Card className="transaction-body__pie">
            <div className="d-flex justify-content-center">
              <div className="col-8 mb-4 mt-3 transaction-container">
                <h6 className="form-label" htmlFor="description">
                  Information to Visualize
                </h6>
                <select
                  id="pieChart"
                  className="form-select field"
                  value={selectedInfoPie}
                  onChange={selectPieHandler}
                >
                  <option value="1" defaultValue>
                    Events by Hour
                  </option>
                  <option value="2">Events by Day</option>
                  <option value="3">Statistics by Hour</option>
                  <option value="4">Statistics by Day</option>
                </select>
              </div>
            </div>
            <PieContainer choice={selectedInfoPie} />
          </Card>
          <Card className="transaction-body__line">
            <div className="d-flex justify-content-center">
              <div className="col-8 mb-4 mt-3 transaction-container">
                <h6 className="form-label" htmlFor="description">
                  Information to Visualize
                </h6>
                <select
                  id="lineChart"
                  className="form-select field"
                  value={selectedInfoLine}
                  onChange={selectLineHandler}
                >
                  <option value="1" defaultValue>
                    Events by Hour
                  </option>
                  <option value="2">Events by Day</option>
                  <option value="3">Statistics by Hour</option>
                  <option value="4">Statistics by Day</option>
                </select>
              </div>
            </div>
            <LineContainer choice={selectedInfoLine} />
          </Card>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
