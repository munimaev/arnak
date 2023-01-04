import React from "react";
import styles from "./ResultPlayer.module.css";

function ResultPlayerScore({ cat, result, progress, percent, right }) {

  const finalCount = result[cat] < progress[cat] ? result[cat] : progress[cat];
  const finalPercent = finalCount * percent;
  return (
    <>
      {result[cat] ? (
        <div
          key={cat}
          className={`${styles.result_score} ${styles["result_score_" + cat]}`}
          style={{ width: finalPercent + "%", right: right + '%'  }}
        ></div>
      ) : null}
    </>
  );
}

export default ResultPlayerScore;
