import styles from "./Category.module.css";
import Home from "./Home";
import Result from "./Result";
import Score from "./Score";
import Title from "./Title";

const pages = {
  home: {
    icon: null,
    title: "Arnak Calculator",
  },
  mag: {
    icon: <i className="fa-solid fa-book title_icon"></i>,
    title: "Reserch - Magnifying Glass",
    min: 0,
    max: 28,
    step: 1,
  },
  book: {
    icon: (
      <i className="fa-solid fa-magnifying-glass fa-rotate-90 title_icon"></i>
    ),
    title: "Reserch - Book",
    min: 0,
    max: 18,
    step: 1,
  },
  tablet: {
    icon: <i className="fa-solid fa-users-rectangle title_icon"></i>,
    title: "Temple Tiles",
    min: 0,
    max: 30,
    step: 1,
  },
  idol: {
    icon: <i className="fa-solid fa-podcast title_icon"></i>,
    title: "Idols",
    min: 0,
    max: 30,
    step: 1,
  },
  guardian: {
    icon: <i className="fa-solid fa-shield-cat title_icon"></i>,
    title: "Guardians",
    min: 0,
    max: 40,
    step: 5,
  },
  item: {
    icon: <i className="fa-solid fa-trowel title_icon"></i>,
    title: "Item cards",
    min: 0,
    max: 20,
    step: 1,
  },
  artifact: {
    icon: <i className="fa-solid fa-wand-magic-sparkles title_icon"></i>,
    title: "Artifact cards",
    min: 0,
    max: 20,
    step: 1,
  },
  fear: {
    icon: <i className="fa-solid fa-skull title_icon"></i>,
    title: "Fear cards",
    min: 0,
    max: 20,
    step: 1,
  },
  trophy: {
    icon: <i className="fa-solid fa-trophy title_icon"></i>,
    title: "Results",
  },
};

function Category({ page, points, totalPoints, setPoints, names, setName, setScoring }) {
  return (
    <div className={styles.category}>
      <Title name={page}>
        {pages[page].icon} {pages[page].title}
      </Title>

      {page === "home" ? (
        <div className={styles.players}>
          <Home names={names} setName={setName} setPoints={setPoints} setScoring={setScoring}/>
        </div>
      ) : page === "trophy" ? (
        <div className={styles.players}>
        <Result names={names} setName={setName} setPoints={setPoints} totalPoints={totalPoints} setScoring={setScoring}/>
      </div>
      ) : (
        <div className={styles.players}>
          <Score
            name={names.red}
            category={page}
            settings={pages[page]}
            color="red"
            points={points.red}
            setPoints={setPoints}
          ></Score>
          <Score
            name={names.yellow}
            category={page}
            settings={pages[page]}
            color="yellow"
            points={points.yellow}
            setPoints={setPoints}
          ></Score>
          <Score
            name={names.green}
            category={page}
            settings={pages[page]}
            color="green"
            points={points.green}
            setPoints={setPoints}
          ></Score>
          <Score
            name={names.blue}
            category={page}
            settings={pages[page]}
            color="blue"
            points={points.blue}
            setPoints={setPoints}
          ></Score>
        </div>
      )}
    </div>
  );
}

export default Category;
