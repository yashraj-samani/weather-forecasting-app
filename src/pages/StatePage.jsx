import React from "react";
import { useParams } from "react-router-dom";

const StatePage = () => {
  const { stateName } = useParams();

  return (
    <div>
      <h1>Weather in {stateName}</h1>
      <p>Here you can display weather details for {stateName}.</p>
    </div>
  );
};

export default StatePage;
