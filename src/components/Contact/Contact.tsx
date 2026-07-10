'use client';

import { FiMail } from 'react-icons/fi';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { useFadeIn } from '@/utils/hooks';
import styles from './Contact.module.scss';

export default function Contact() {
  const [ref, visible] = useFadeIn<HTMLElement>();

  return (
    <section id="contact" className={styles.contact} ref={ref}>
      <div className={`${styles.container} ${visible ? styles.visible : ''}`}>
        <h2 className={styles.sectionTitle}>Get in Touch</h2>
        <p className={styles.message}>
          Feel free to reach out if you&apos;d like to collaborate or discuss
          opportunities.
        </p>

        <div className={styles.links}>
          <a
            href="mailto:yanxun951224@gmail.com"
            className={styles.contactLink}
          >
            <FiMail size={20} aria-hidden="true" />
            <span>yanxun951224@gmail.com</span>
          </a>
          <a
            href="https://github.com/yanxun95"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
          >
            <FaGithub size={20} aria-hidden="true" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/yan-xun-chang-328615181/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
          >
            <FaLinkedinIn size={20} aria-hidden="true" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}