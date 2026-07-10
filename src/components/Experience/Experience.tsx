'use client';

import { useState } from 'react';
import { experiences } from '@/utils/data';
import { useFadeIn } from '@/utils/hooks';
import styles from './Experience.module.scss';

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [ref, visible] = useFadeIn<HTMLElement>();
  const active = experiences[activeIndex];

  return (
    <section id="experience" className={styles.experience} ref={ref}>
      <div className={`${styles.container} ${visible ? styles.visible : ''}`}>
        <h2 className={styles.sectionTitle}>Experience</h2>

        <div className={styles.content}>
          <div
            className={styles.tabs}
            role="tablist"
            aria-label="Experience tabs"
            style={
              {
                '--tab-count': experiences.length,
                '--active-index': activeIndex,
              } as React.CSSProperties
            }
          >
            {experiences.map((exp, index) => (
              <button
                key={exp.company}
                role="tab"
                aria-selected={index === activeIndex}
                className={`${styles.tab} ${index === activeIndex ? styles.active : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                {exp.company}
              </button>
            ))}
            <span className={styles.tabIndicator} />
          </div>

          <div className={styles.panel} role="tabpanel">
            <h3 className={styles.role}>
              {active.role}
              {active.url ? (
                <>
                  {' @ '}
                  <a
                    href={active.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.companyLink}
                  >
                    {active.company}
                  </a>
                </>
              ) : (
                <span className={styles.companyName}>{` @ ${active.company}`}</span>
              )}
            </h3>
            <p className={styles.period}>{active.period}</p>
            <ul className={styles.highlights}>
              {active.highlights.map((item, i) => (
                <li key={i} className={styles.highlight}>
                  {item}
                </li>
              ))}
            </ul>
            {active.technologies?.length && (
              <ul className={styles.technologies} aria-label="Technologies used">
                {active.technologies.map((tech) => (
                  <li key={tech} className={styles.chip}>
                    {tech}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
