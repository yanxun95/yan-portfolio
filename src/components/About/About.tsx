'use client';

import { skillCategories } from '@/utils/data';
import { useFadeIn } from '@/utils/hooks';
import styles from './About.module.scss';

export default function About() {
  const [ref, visible] = useFadeIn<HTMLElement>();

  return (
    <section id="about" className={styles.about} ref={ref}>
      <div className={`${styles.container} ${visible ? styles.visible : ''}`}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        <div className={styles.content}>
          <div className={styles.bio}>
            <p>
              I spent the last few years building railway monitoring systems and data visualization dashboards — complex interfaces designed to help users understand large amounts of real-time and historical data. Working on these systems shaped how I think about performance, scalability, and building interfaces that remain clear and reliable as complexity grows.
            </p>
            <p>
              Alongside my professional Vue.js experience, I&apos;ve developed React applications through freelance projects and I&apos;m continuing to expand into backend development with Node.js, Express, and PostgreSQL. My goal is to build complete solutions that connect thoughtful frontend experiences with reliable backend systems.
            </p>
            <p>
              What I care about: maintainable code, thoughtful UX, and building software that feels simple for users while solving complex problems behind the scenes.
            </p>
          </div>
        </div>

        <div className={styles.skills}>
          {skillCategories.map((category) => (
            <div key={category.title} className={styles.skillGroup}>
              <h3 className={styles.skillGroupTitle}>{category.title}</h3>
              <div className={styles.skillList}>
                {category.skills.map((skill) => (
                  <span key={skill.name} className={styles.skillTag}>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
