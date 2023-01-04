import styles from "./Home.module.css";
import HomePlayer from "./HomePlayer";

function Home({names, setName, setPoints, setScoring}) {
  return (
    <>
    <HomePlayer color="red" name={names.red} setName={setName}/>
    <HomePlayer color="yellow" name={names.yellow} setName={setName}/>
    <HomePlayer color="green" name={names.green} setName={setName}/>
    <HomePlayer color="blue" name={names.blue} setName={setName}/>
      <div className={`${styles.settings}`}>
        <span className={`${styles.setting}`}>
          Language: Ru
        </span>
        <span className={`${styles.setting}`} onClick={() => {
          setPoints('reset');
          setScoring({})
        }}>
          Reset Score
        </span>
      </div>
    </>
  );
}

export default Home;
