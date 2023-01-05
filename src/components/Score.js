import React from "react";
import styles from "./Score.module.css";

function Score({name,  category, color, points, setPoints, settings }) {
  const [isRangeMaode, setRangeMaode] = React.useState(true);
  return (
    <div className={styles.player + " " + styles["player-" + color]}>
      <div className={styles.player_icon}>
        <i className="fa-solid fa-user"></i>
      </div>
      <div className={styles.player_name}>{name}</div>
      <div
        className={styles.player_score}
        onClick={() => setRangeMaode(!isRangeMaode)}
      >
        <div className={styles.point}>
          <div className={styles.point_top}>{points || 0}</div>
          <div className={styles.point_middle}></div>
          <div className={styles.point_bottom}></div>
        </div>
      </div>

      {isRangeMaode ? (
        <>
          <div className={styles.player_input}>
            <input
              type="range"
              min={settings.min}
              max={settings.max}
              step={settings.step}
              value={points}
              onChange={(e) => {
                setPoints({ category, color, value: Number(e.target.value) });
              }}
              style={{"backgroundSize": `${(points- settings.min)/(settings.max - settings.min)*100}% 100%, 100% 100%`}}
            />
          </div>
          <div className={styles.player_min}>{settings.min}</div>
          <div className={styles.player_max}>{settings.max}</div>
        </>
      ) : (
        <div className={styles.player_field}>
          <input
            type="text"
            value={points}
            onChange={(e) => {
              setPoints({ category, color, value: e.target.value });
            }}
          />
          <div
            className={styles.player_cross}
            onClick={() => {
              setRangeMaode(true);
            }}
          >
            <i className="fa-solid fa-check"></i>
          </div>
        </div>
      )}
    </div>
  );
}

export default Score;
