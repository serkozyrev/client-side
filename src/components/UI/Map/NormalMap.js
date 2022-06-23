import React, { useRef, useEffect } from "react";
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
const NormalMap = () => {
  let mapRef = useRef();
  let eqWorks, cnTower, niagara, vancHarb;
  eqWorks = new ol.Feature({
    geometry: new Point(fromLonLat([-79.3899, 43.6708])),
    name: "EQ Works",
  });
  cnTower = new ol.Feature({
    geometry: new Point(fromLonLat([-79.3871, 43.6426])),
    name: "CN Tower",
  });
  niagara = new ol.Feature({
    geometry: new Point(fromLonLat([-79.0849, 43.0896])),
    name: "Niagara Falls",
  });
  vancHarb = new ol.Feature({
    geometry: new Point(fromLonLat([-123.0884, 49.2965])),
    name: "Vancouver Harbour",
  });
  let iconStyle = new Style({
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
  let style = [iconStyle];
  let vectorSource = new VectorSource({
    features: [eqWorks, cnTower, niagara, vancHarb],
  });

  let markerVectorLayer = new VectorLayer({
    source: vectorSource,
    style: function (feature) {
      iconStyle.getText().setText(feature.get("name"));
      return style;
    },
  });

  useEffect(() => {
    let map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat([-79.3871, 43.6426]),
        zoom: 12,
      }),
    });
    if (map) {
      map.addLayer(markerVectorLayer);
    }
  }, []);
  return (
    <div className="maps">
      <div className="map" ref={mapRef}></div>
    </div>
  );
};

export default NormalMap;
