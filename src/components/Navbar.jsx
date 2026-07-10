import styles from "./Navbar.module.css";
import logoDragonBall from "../assets/logo.png";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img 
          src={logoDragonBall} 
          alt="Dragon Ball Logo" 
          className={styles.logoImg} 
        />
        <div className={styles.logoText}>DRAGON BALL API</div>
      </div>
      <div className={styles.links}>
        <a href="https://web.dragonball-api.com/documentation" target="_blank" rel="noreferrer">API Doc</a>
      </div>
    </nav>
  );
}

export default Navbar;