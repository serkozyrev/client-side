import React, { useRef, useState, useContext, useEffect } from "react";
import markerImage from "./markerImage.png";

import "ol/ol.css";
import * as ol from "ol";
import Map from "ol/Map";
import Point from "ol/geom/Point";
import VectorSource from "ol/source/Vector";
import { OSM } from "ol/source";
import View from "ol/View";
import { Icon, Style, Fill, Stroke, Text } from "ol/style";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { fromLonLat } from "ol/proj";
import AuthContext from "../../context/auth-context";

const DailyStats = (props) => {
  const authCtx = useContext(AuthContext);
  let eqWorksData, cnTowerData, niagaraData, harbourData;
  let eqWorks, cnTower, niagara, vancHarb;
  let date_list = [];
  const [map, setMap] = useState();
  const [featuresLayer, setFeaturesLayer] = useState();

  for (const item in authCtx.resultDailyEvents) {
    date_list.push(item);
  }
  let dataSelect = Object.keys(authCtx.resultStatsDaily)
    .filter((key) => key === props.date)
    .reduce((obj, key) => {
      return Object.assign(obj, {
        [key]: authCtx.resultStatsDaily[key],
      });
    }, {});
  let dataSelected;

  switch (props.data) {
    case "1":
      dataSelected = "sumRevenue";
      break;
    case "2":
      dataSelected = "sumImpressions";
      break;
    case "3":
      dataSelected = "sumClicks";
      break;
    default:
      break;
  }
  for (const item in dataSelect) {
    for (const itemValue in dataSelect[item]) {
      switch (dataSelect[item][itemValue]["poiName"]) {
        case "EQ Works":
          eqWorksData = dataSelect[item][itemValue][dataSelected];
          break;
        case "CN Tower":
          cnTowerData = dataSelect[item][itemValue][dataSelected];
          break;
        case "Niagara Falls":
          niagaraData = dataSelect[item][itemValue][dataSelected];
          break;
        case "Vancouver Harbour":
          harbourData = dataSelect[item][itemValue][dataSelected];
          break;
        default:
          break;
      }
    }
  }
  if (eqWorksData === undefined) {
    eqWorks = new ol.Feature({
      geometry: new Point(fromLonLat([-79.3899, 43.6708])),
      name: "EQ Works",
    });
  } else {
    eqWorks = new ol.Feature({
      geometry: new Point(fromLonLat([-79.3899, 43.6708])),
      name: `EQ Works\n ${eqWorksData}`,
    });
  }
  if (cnTowerData === undefined) {
    cnTower = new ol.Feature({
      geometry: new Point(fromLonLat([-79.3871, 43.6426])),
      name: "CN Tower",
    });
  } else {
    cnTower = new ol.Feature({
      geometry: new Point(fromLonLat([-79.3871, 43.6426])),
      name: `CN Tower\n ${cnTowerData}`,
    });
  }
  if (niagaraData === undefined) {
    niagara = new ol.Feature({
      geometry: new Point(fromLonLat([-79.0849, 43.0896])),
      name: "Niagara Falls",
    });
  } else {
    niagara = new ol.Feature({
      geometry: new Point(fromLonLat([-79.0849, 43.0896])),
      name: `Niagara Falls\n ${niagaraData}`,
    });
  }
  if (harbourData === undefined) {
    vancHarb = new ol.Feature({
      geometry: new Point(fromLonLat([-123.0884, 49.2965])),
      name: "Vancouver Harbour",
    });
  } else {
    vancHarb = new ol.Feature({
      geometry: new Point(fromLonLat([-123.0884, 49.2965])),
      name: `Vancouver Harbour\n ${harbourData}`,
    });
  }

  const iconStyle = new Style({
    image: new Icon({
      anchor: [0.5, 46],
      anchorXUnits: "fraction",
      anchorYUnits: "pixels",
      src: markerImage,
      scale: 0.05,
    }),
    text: new Text({
      font: "14px Calibri,sans-serif",
      overflow: true,
      offsetY: -12,
      fill: new Fill({
        color: "#0000FF",
      }),
      stroke: new Stroke({
        color: "#fff",
        width: 3,
      }),
    }),
  });
  const style = [iconStyle];

  const mapElement = useRef();

  const mapRef = useRef();
  mapRef.current = map;

  useEffect(() => {
    const initalFeaturesLayer = new VectorLayer({
      source: new VectorSource(),
    });

    const initialMap = new Map({
      target: mapElement.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        initalFeaturesLayer,
      ],
      view: new View({
        center: fromLonLat([-79.3899, 43.6708]),
        zoom: 12,
      }),
    });

    setMap(initialMap);
    setFeaturesLayer(initalFeaturesLayer);
  }, []);

  useEffect(() => {
    if (
      eqWorks !== null &&
      cnTower !== null &&
      niagara !== null &&
      vancHarb !== null &&
      featuresLayer
    ) {
      featuresLayer.setSource(
        new VectorSource({
          features: [eqWorks, cnTower, niagara, vancHarb],
        })
      );
      featuresLayer.setStyle(function (feature) {
        iconStyle.getText().setText(feature.get("name"));
        return style;
      });

      map.getView().fit(featuresLayer.getSource().getExtent(), {
        padding: [100, 100, 100, 100],
      });
    }
  }, [
    eqWorks,
    cnTower,
    niagara,
    vancHarb,
    featuresLayer,
    map,
    iconStyle,
    style,
  ]);
  return (
    <>
      <div ref={mapElement} className="map-event"></div>
    </>
  );
};

export default DailyStats;
