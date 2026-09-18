import styles from "./Portfolio.module.css";

function Portfolio() {
  const projects = [
    {
      title: "Web Development",
      description: "เว็บไซต์ที่พัฒนาด้วย HTML, CSS และ JavaScript",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
    {
      title: "React Project",
      description: "โปรเจกต์เว็บไซต์ที่สร้างด้วย React",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    },
    {
      title: "Computer System",
      description: "โปรเจกต์ด้าน Computer System",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    },
  ];

  return (
    <section id="portfolio" className={styles.portfolio}>
      <h2>My Portfolio</h2>

      <div className={styles.portfolioContainer}>
        {projects.map((project, index) => (
          <div className={styles.card} key={index}>
            <img src={project.image} alt={project.title} />

            <div className={styles.cardContent}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
