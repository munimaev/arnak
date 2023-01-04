import styles from "./Title.module.css";

function Title({children, name}) {
  return (
    <div className={styles.title + " " + styles["title-" + name]}>
      <div className={styles.title_name_wrapper}>
        <div className={styles.title_name}>{children}</div>
      </div>
    </div>
  );
}

export default Title;
