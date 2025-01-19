import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import indiaStateMapJson from "/src/assets/indian-states.json";

function Map() {
  const [tooltipContent, setTooltipContent] = useState("");
  const navigate = useNavigate();

  const handleMouseEnter = (geo) => {
    const { NAME_1 } = geo.properties;
    setTooltipContent(NAME_1);
  };

  const handleMouseLeave = () => {
    setTooltipContent("");
  };

  const handleClick = (geo) => {
    const { NAME_1 } = geo.properties;
    navigate(`/state/${NAME_1}`);
  };

  return (
    <div>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 1000,
          center: [80, 22],
        }}
        className="composableMapContainer"
      >
        <Geographies geography={indiaStateMapJson}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onMouseEnter={() => handleMouseEnter(geo)}
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
      {tooltipContent && <div className="tooltip">{tooltipContent}</div>}
    </div>
  );
}

export default Map;
