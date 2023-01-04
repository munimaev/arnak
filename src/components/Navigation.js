import styles from "./Navigation.module.css";

function Navigation({page, setPage, scoring}) {
  return (
    <nav className={styles.nav}>
        <ul>
          <li className={page ==='home' ? styles.active : ''} >
            <span onClick={() => setPage('home')}><i className="fa-solid fa-house"></i></span>
          </li>
          <li className={`${styles.book} ${page ==='book' ? styles.active : ''} ${scoring.book ? styles.scoring : ''}`}>
            <span onClick={() => setPage('book')}><i className="fa-solid fa-book"></i></span>
          </li>
          <li className={`${styles.mag} ${page ==='mag' ? styles.active : ''} ${scoring.mag ? styles.scoring : ''}`}>
            <span onClick={() => setPage('mag')}
              ><i className="fa-solid fa-magnifying-glass fa-rotate-90"></i
            ></span>
          </li>
          <li className={`${styles.tablet} ${page ==='tablet' ? styles.active : ''} ${scoring.tablet ? styles.scoring : ''}`}>
            <span onClick={() => setPage('tablet')}><i className="fa-solid fa-users-rectangle"></i></span>
          </li>
          <li className={`${styles.idol} ${page ==='idol' ? styles.active : ''} ${scoring.idol ? styles.scoring : ''}`}>
            <span onClick={() => setPage('idol')}><i className="fa-solid fa-podcast"></i></span>
          </li>
          <li className={`${styles.guardian} ${page ==='guardian' ? styles.active : ''} ${scoring.guardian ? styles.scoring : ''}`}>
            <span onClick={() => setPage('guardian')}><i className="fa-solid fa-shield-cat"></i></span>
          </li>
          <li className={`${styles.item} ${page ==='item' ? styles.active : ''} ${scoring.item ? styles.scoring : ''}`}>
            <span onClick={() => setPage('item')}><i className="fa-solid fa-trowel"></i></span>
          </li>
          <li className={`${styles.artifact} ${page ==='artifact' ? styles.active : ''} ${scoring.artifact ? styles.scoring : ''}`}>
            <span onClick={() => setPage('artifact')}><i className="fa-solid fa-wand-magic-sparkles"></i></span>
          </li>
          <li className={`${styles.fear} ${page ==='fear' ? styles.active : ''} ${scoring.fear ? styles.scoring : ''}`}>
            <span onClick={() => setPage('fear')}><i className="fa-solid fa-skull"></i></span>
          </li>
          <li>
            <span onClick={() => setPage('trophy')}><i className="fa-solid fa-trophy"></i></span>
          </li>
        </ul>
      </nav>
  );
}

export default Navigation;
