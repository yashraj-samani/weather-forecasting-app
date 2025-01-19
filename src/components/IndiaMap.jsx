import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import indiaStateMapJson from "/src/assets/indian-states.json";
import Tooltip from "./Tooltip";

function IndiaMap() {
  const [tooltipContent, setTooltipContent] = useState("");
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  const handleMouseEnter = (geo, event) => {
    const { NAME_1 } = geo.properties;
    setTooltipContent(NAME_1);
    setTooltipPosition({ x: event.clientX, y: event.clientY });
    console.log(event);
  };

  const handleMouseLeave = () => {
    setTooltipContent("");
  };

  const handleClick = (geo) => {
    const { NAME_1 } = geo.properties;
    navigate(`/weather-forecasting-app/state/${NAME_1}`);
  };

  return (
    <div>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 1000,
          center: [80, 22],
        }}
        className="map-container"
      >
        <Geographies geography={indiaStateMapJson}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onMouseEnter={(event) => handleMouseEnter(geo, event)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(geo)}
                style={{
                  default: {
                    fill: "#D6D6DA",
                    outline: "none",
                  },
                  hover: {
                    fill: "#F53",
                    outline: "none",
                  },
                  pressed: {
                    fill: "#E42",
                    outline: "none",
                  },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
      {tooltipContent && (
        <Tooltip content={tooltipContent} position={tooltipPosition} />
      )}
    </div>
  );
}

export default IndiaMap;
