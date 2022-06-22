import React, { useContext, useEffect, useState } from "react";

import "./Map.css";
import NormalMap from "./NormalMap";
import DailyEvents from "./DailyEvents";
import AuthContext from "../../context/auth-context";
import DailyStats from "./DailyStats";

const Maps = (props) => {
  const authCtx = useContext(AuthContext);
  const [selectedInfo, setSelectedInfo] = useState("0");
  const [dateListEvents, setDateListEvents] = useState([]);
  const [dateListStats, setDateListStats] = useState([]);
  const [daySelected, setDaySelected] = useState("");
  const [selectData, setSelectData] = useState("1");

  const selectDataHandler = (event) => {
    setSelectData(event.target.value);
  };

  const selectInfoHandler = (event) => {
    setSelectedInfo(event.target.value);
  };

  const selectDayHandler = (event) => {
    setDaySelected(event.target.value);
  };

  useEffect(() => {
    if (selectedInfo === "1") {
      setDaySelected("");
      setDateListEvents([]);
      for (const item in authCtx.resultDailyEvents) {
        setDateListEvents((prevDate) => {
          return [...prevDate, item];
        });
      }
    } else if (selectedInfo === "2") {
      setDaySelected("");
      setDateListStats([]);
      setSelectData("1");
      for (const item in authCtx.resultStatsDaily) {
        setDateListStats((prevDate) => {
          return [...prevDate, item];
        });
      }
    }
  }, [selectedInfo, authCtx.resultDailyEvents, authCtx.resultStatsDaily]);
  return (
    <>
      <div className="maps-control">
        <div className="row">
          <div className="col-sm-3 ">
            <select
              id="barChart"
              className="form-select field"
              value={selectedInfo}
              onChange={selectInfoHandler}
            >
              <option value="0" defaultValue>
                Choose Data...
              </option>
              <option value="1">Events by Day</option>
              <option value="2">Statistics by Day</option>
            </select>
          </div>
          {selectedInfo === "1" && (
            <div className="col-sm-3 ">
              <select
                id="barChart"
                className="form-select field"
                value={daySelected}
                onChange={selectDayHandler}
              >
                <option value="0" defaultValue>
                  Choose Date...
                </option>
                {dateListEvents.map((date, index) => (
                  <option key={index} value={date}>
                    {date}
                  </option>
                ))}
              </select>
            </div>
          )}
          {selectedInfo === "2" && (
            <>
              <div className="col-sm-3 ">
                <select
                  id="barChart"
                  className="form-select field"
                  value={daySelected}
                  onChange={selectDayHandler}
                >
                  <option value="0" defaultValue>
                    Choose Date...
                  </option>
                  {dateListStats.map((date, index) => (
                    <option key={index} value={date}>
                      {date}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-sm-3">
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
            </>
          )}
        </div>
      </div>

      {selectedInfo === "0" && <NormalMap />}
      {selectedInfo === "1" && <DailyEvents date={daySelected} />}
      {selectedInfo === "2" && (
        <DailyStats date={daySelected} data={selectData} />
      )}
    </>
  );
};

export default Maps;
