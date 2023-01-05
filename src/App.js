import "./App.css";
import Navigation from "./components/Navigation";
import Category from "./components/Category";
import React from "react";

const pointsForCategoryDefault = {
  red: 0,
  green: 0,
  yellow: 0,
  blue: 0,
};

const pointsDefault = {
  book: { ...pointsForCategoryDefault },
  mag: { ...pointsForCategoryDefault },
  tablet: { ...pointsForCategoryDefault },
  idol: {...pointsForCategoryDefault},
  item: { ...pointsForCategoryDefault },
  guardian: { ...pointsForCategoryDefault },
  artifact: { ...pointsForCategoryDefault },
  fear: { ...pointsForCategoryDefault },
};
const pointsDefaultString = JSON.stringify(pointsDefault);

const namesDefault = {
  red: 'Red Player',
  yellow: 'Yellow Player',
  green: 'Green Player',
  blue: 'Blue Player',
}

function App() {
  const [page, setPage] = React.useState("home");
  const [scoring, setScoring] =  React.useState({});
  const [names, setName] = React.useReducer(
    (prev, arg) => {
      const { color, value } = arg;
      return {
        ...prev,
        [color]: value,
      };
    },
    JSON.parse(JSON.stringify(namesDefault))
  );
  const [points, setPoints] = React.useReducer(
    (prev, arg) => {
      if (arg === 'reset') {
       return JSON.parse(pointsDefaultString)
      }
      const { category, color, value } = arg;
      return {
        ...prev,
        [category]: {
          ...prev[category],
          [color]: Number(value),
        },
      };
    },
    JSON.parse(pointsDefaultString)
  );
  return (
    <div className="main">
      <div className="categoties">
        <Category
          page={page}
          points={points[page]}
          totalPoints={points}
          setPoints={setPoints}
          names={names} 
          setName={setName}
          setScoring={setScoring}
        />
      </div>
      <Navigation page={page} setPage={setPage} scoring={scoring}/>
    </div>
  );
}

export default App;
