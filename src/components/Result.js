import React from "react";
import styles from "./Result.module.css";
import ResultPlayer from "./ResultPlayer";

const getResRaw = (totalPoints, color) => {
  return Object.keys(totalPoints).reduce(
    (prev, curr) => {
      const summ =
        curr === "fear" ? prev.summ : prev.summ + totalPoints[curr][color];
      return { ...prev, summ, [curr]: totalPoints[curr][color] };
    },
    { summ: 0 }
  );
};

const getMaxs = (res, cat) => {
  const summs = [res.red[cat], res.yellow[cat], res.blue[cat], res.red[cat]];
  summs.sort();
  return summs.pop();
};

const defaultProgress = {
  mag: 0,
  book: 0,
  tablet: 0,
  idol: 0,
  guardian: 0,
  item: 0,
  artifact: 0,
  fear: 0,
};

function Result({ names, totalPoints, setPoints, setScoring }) {
  const [resRaw] = React.useState({
    red: getResRaw(totalPoints, "red"),
    yellow: getResRaw(totalPoints, "yellow"),
    green: getResRaw(totalPoints, "green"),
    blue: getResRaw(totalPoints, "blue"),
  });

  const maxs = {
    mag: getMaxs(resRaw, "mag"),
    book: getMaxs(resRaw, "book"),
    tablet: getMaxs(resRaw, "tablet"),
    idol: getMaxs(resRaw, "idol"),
    guardian: getMaxs(resRaw, "guardian"),
    item: getMaxs(resRaw, "item"),
    artifact: getMaxs(resRaw, "artifact"),
    fear: getMaxs(resRaw, "fear"),
    summ: getMaxs(resRaw, "summ"),
  };

  const percent = Math.round((100 / maxs.summ) * 1000) / 1000;

  const [progress, setProgress] = React.useState(defaultProgress);

  const [timer, setTimer] = React.useState(null);

  React.useEffect(() => {
    setScoring({...progress    })
  }, [progress, setScoring])

  const updateProgress = () => {
    if (!timer) {
      const newTimer = setInterval(() => {
        setProgress((prev) => {
          const arr = [
            "book",
            "mag",
            "tablet",
            "idol",
            "guardian",
            "item",
            "artifact",
            "fear",
          ];

          const cat = arr.find((item) => prev[item] < maxs[item]);

          if (!cat) {
            clearInterval(timer);
            return {
              ...prev,
            };
          }
          
          return {
            ...prev,
            [cat]: prev[cat] + 1,
          };
        });
      }, 250);
      setTimer(newTimer);
    }
  };

  React.useEffect(() => {
    return () => {
      clearInterval(timer);
    };
  }, [timer]);

  return (
    <>
      <div className={styles.calculate}>
        <span className={styles.setting} onClick={() => updateProgress()}>
          Calculate
        </span>
      </div>

      <ResultPlayer
        result={resRaw.red}
        color="red"
        percent={percent}
        progress={progress}
        name={names.red}
      />
      <ResultPlayer
        result={resRaw.yellow}
        color="yellow"
        percent={percent}
        progress={progress}
        name={names.yellow}
      />
      <ResultPlayer
        result={resRaw.green}
        color="green"
        percent={percent}
        progress={progress}
        name={names.green}
      />
      <ResultPlayer
        result={resRaw.blue}
        color="blue"
        percent={percent}
        progress={progress}
        name={names.blue}
      />

      <div
        className={styles.reset}
        onClick={() => {
          setPoints("reset");
          setProgress(defaultProgress);
          clearInterval(timer);
          setScoring({})
        }}
      >
        <span className={styles.setting}>Reset Score</span>
      </div>
    </>
  );
}

export default Result;
