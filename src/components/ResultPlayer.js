import React from "react";
import styles from "./ResultPlayer.module.css";
import ResultPlayerScore from "./ResultPlayerScore";

function ResultPlayer({ color, name, result, percent, progress }) {

  let finalCount = 0;
  [
    "book",
    "mag",
    "tablet",
    "idol",
    "guardian",
    "item",
    "artifact",
    "fear"
  ].forEach(cat => {
    if (cat !== 'fear') {
      const catCount = result[cat] < progress[cat] ? result[cat] : progress[cat];
      finalCount = finalCount + catCount;
    } else {
      const catCount = result[cat] < progress[cat] ? result[cat] : progress[cat];
      finalCount = finalCount - catCount;
    }
  })
  return (
    <>
      <div className={`${styles.result} ${styles[`player-` + color]}`}>
        <div className={`${styles.player_icon}`}>
          <i className="fa-solid fa-user"></i>
        </div>
        <div className={`${styles.player_name}`}>
          {name}
        </div>
        <div className={`${styles.player_score}`}>
          <div className={`${styles.point}`}>
            <div className={`${styles.point_top}`}>{finalCount}</div>
            <div className={`${styles.point_middle}`}></div>
            <div className={`${styles.point_bottom}`}></div>
          </div>
        </div>
        <div className={`${styles.player_result}`}>
          {[
            "mag",
            "book",
            "tablet",
            "idol",
            "guardian",
            "item",
            "artifact",
          ].map((cat) => (
            <ResultPlayerScore
              key={cat}
              cat={cat}
              result={result}
              percent={percent}
              progress={progress}
            />
          ))}

        </div>
        <div className={`${styles.player_result} ${styles.player_result_fear}`}>
          {[
            "fear",
          ].map((cat) => (
            <ResultPlayerScore
            key={cat}
              cat={cat}
              result={result}
              percent={percent}
              progress={progress}
              right={100 - result.summ * percent}
            />
          ))}

        </div>
        
      </div>
    </>
  );
}

export default ResultPlayer;
