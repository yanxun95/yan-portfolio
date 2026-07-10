'use client';

import Image from 'next/image';
import { useFadeIn } from '@/utils/hooks';
import styles from './Hero.module.scss';

export default function Hero() {
  const [ref, visible] = useFadeIn<HTMLElement>();

  return (
    <section id="home" className={styles.hero} ref={ref}>
      <div className={`${styles.container} ${visible ? styles.visible : ''}`}>
        <div className={styles.content}>
          <p className={styles.greeting}>Software Engineer</p>
          <h1 className={styles.name}>Hi, I&apos;m Yan</h1>
          <p className={styles.description}>
            I build scalable web applications that transform complex requirements into simple, intuitive user experiences. With professional experience in Vue.js and freelance experience in React, I enjoy creating responsive, maintainable interfaces while expanding my skills toward full-stack development.
          </p>
          <div className={styles.actions}>
            <a href="#projects" className={styles.primary}>
              View Projects
            </a>
            <a href="#contact" className={styles.secondary}>
              Contact Me
            </a>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <div className={styles.imageContainer}>
            <Image
              src="/images/profile.JPEG"
              alt="Yan Chang - Frontend Engineer"
              width={400}
              height={400}
              priority
              className={styles.profileImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
