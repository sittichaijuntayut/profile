import styles from "./Number.module.css";

function Number() {
  return (
    <section className={styles.number}>
      <h2>My Experience</h2>

      <div className={styles.numberContainer}>
        <div className={styles.numberCard}>
          <h3>10</h3>
          <p>Projects Completed</p>
        </div>

        <div className={styles.numberCard}>
          <h3>5</h3>
          <p>Technologies</p>
        </div>

        <div className={styles.numberCard}>
          <h3>2</h3>
          <p>Years Learning</p>
        </div>
      </div>
    </section>
  );
}

export default Number;
