import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: (token) => {},
});

export const AuthContextProvider = (props) => {
  const [statsDaily, setStatsDaily] = useState([]);
  const [poiResult, setPoiResult] = useState([]);
  const [geoPoiResult, setGeoPoiResult] = useState([]);
  const [geoStatsDaily, setGeoStatsDaily] = useState([]);
  const [resultStatsDaily, setResultStatsDaily] = useState([]);
  const [statsHourly, setStatsHourly] = useState([]);
  const [hourlyEvents, setHourlyEvents] = useState([]);
  const [dailyEvents, setDailyEvents] = useState([]);
  const [geoDailyEvents, setGeoDailyEvents] = useState([]);
  const [resultDailyEvents, setResultDailyEvents] = useState([]);
  const [statsHourForDay, setStatsHourForDay] = useState([]);
  const [eventsHourForDay, setEventsHourForDay] = useState([]);
  const [locationSearch, setLocationSearch] = useState("");
  const [dateSearch, setDateSearch] = useState("");

  useEffect(() => {
    const fetchStatsDaily = async () => {
      try {
        const responseData = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/stats/daily`
        );
        const res = await responseData.json();
        setStatsDaily(res.dailyStatResult);
        setGeoStatsDaily(res.statForGeo);
        setResultStatsDaily(res.dailyResultStat);
      } catch (err) {}
    };

    fetchStatsDaily();
  }, []);

  useEffect(() => {
    const fetchStatsHourly = async () => {
      try {
        const responseData = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/stats/hourly`
        );
        const res = await responseData.json();
        setStatsHourly(res.hourlyStatResult);
        setStatsHourForDay(res.statForEachDay);
      } catch (err) {}
    };

    fetchStatsHourly();
  }, []);

  useEffect(() => {
    const fetchEventsDaily = async () => {
      try {
        const responseData = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/events/daily`
        );
        const res = await responseData.json();
        setDailyEvents(res.dailyResult);
        setGeoDailyEvents(res.resultsForGeo);
        setResultDailyEvents(res.dailyResultStat);
      } catch (err) {}
    };
    fetchEventsDaily();
  }, []);

  useEffect(() => {
    const fetchEventsHourly = async () => {
      try {
        const responseData = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/events/hourly`
        );
        const res = await responseData.json();
        setHourlyEvents(res.hourlyResult);
        setEventsHourForDay(res.eventForEachDay);
      } catch (err) {}
    };
    fetchEventsHourly();
  }, []);

  useEffect(() => {
    const fetchEventsHourly = async () => {
      try {
        const responseData = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/poi`
        );
        const res = await responseData.json();
        setPoiResult(res.poiResult);
        setGeoPoiResult(res.geoPoiResult);
      } catch (err) {}
    };
    fetchEventsHourly();
  }, []);

  const contextValue = {
    resultDailyEvents,
    resultStatsDaily,
    geoPoiResult,
    poiResult,
    locationSearch,
    setLocationSearch,
    dateSearch,
    setDateSearch,
    statsDaily,
    setStatsDaily,
    statsHourly,
    setStatsHourly,
    setDailyEvents,
    setHourlyEvents,
    dailyEvents,
    hourlyEvents,
    statsHourForDay,
    eventsHourForDay,
    geoDailyEvents,
    geoStatsDaily,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
