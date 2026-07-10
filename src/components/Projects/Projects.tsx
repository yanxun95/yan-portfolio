'use client';

import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { projects } from '@/utils/data';
import { useFadeIn } from '@/utils/hooks';
import styles from './Projects.module.scss';

export default function Projects() {
  const [ref, visible] = useFadeIn<HTMLElement>();

  return (
    <section id="projects" className={styles.projects} ref={ref}>
      <div className={`${styles.container} ${visible ? styles.visible : ''}`}>
        <h2 className={styles.sectionTitle}>Projects</h2>
        <div className={styles.list}>
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`${styles.row} ${index % 2 === 1 ? styles.reversed : ''}`}
            >
              {(() => {
                const href = project.liveUrl || project.githubUrl;
                const image = (
                  <Image
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    fill
                    sizes="(max-width: 767px) 100vw, 45vw"
                    className={styles.projectImage}
                  />
                );

                return href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.imageWrapper}
                    aria-label={`View ${project.title}`}
                  >
                    {image}
                  </a>
                ) : (
                  <div className={styles.imageWrapper}>{image}</div>
                );
              })()}
              <div className={styles.rowContent}>
                <p className={styles.eyebrow}>Featured Project</p>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.tags}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className={styles.tag}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className={styles.links}>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <FaGithub size={16} aria-hidden="true" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <FiExternalLink size={16} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
