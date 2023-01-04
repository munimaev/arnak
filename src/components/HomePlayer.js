import React from "react";
import styles from "./HomePlayer.module.css";

function HomePlayer({ color, name, setName }) {
  const [isEditMode, setEditMode] = React.useState(false);
  const [innerValue, setInnerValue] = React.useState(name);
  return (
    <>
      {isEditMode ? (
        <div className={`${styles.change} ${styles["change_" + color]}}`}>
          <div className={`${styles.change_icon}`}>
            <i className="fa-solid fa-user"></i>
          </div>
          <div className={`${styles.change_field}`}>
            <input type="text" value={innerValue} onChange={(e) => setInnerValue(e.target.value)} />
          </div>
          <div className={`${styles.change_close}`} onClick={() => {
            setInnerValue(name);
            setEditMode(false);
            }}>
            <i className="fa-solid fa-xmark"></i>
          </div>
          <div className={`${styles.change_accept}`} onClick={() => {
            setEditMode(false);
            setName({color, value: innerValue})
            }}>
            <i className="fa-solid fa-check"></i>
          </div>
        </div>
      ) : (
        <div className={`${styles.change} ${styles["change_" + color]}`}>
          <div className={`${styles.change_icon}`}>
            <i className="fa-solid fa-user"></i>
          </div>
          <div className={`${styles.change_name}`}>{name}</div>
          <div
            className={`${styles.change_edit}`}
            onClick={() => setEditMode(true)}
          >
            <i className="fa-solid fa-edit"></i>
          </div>
        </div>
      )}
    </>
  );
}

export default HomePlayer;
