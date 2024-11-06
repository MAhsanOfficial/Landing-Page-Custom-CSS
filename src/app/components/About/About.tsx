import React from 'react'
import Image from 'next/image'
import styles from './About.module.css' 

const About: React.FC = () => {
  return (
    <section id='about' className={styles.aboutSection}>
  
      <div className={styles.imageContainer}>
        <Image 
          src="https://i.pinimg.com/736x/29/6d/cd/296dcdbd03d450dfda7ffc92232b08b8.jpg" 
          alt="Ahsan's profile"  
          layout="responsive"
          width={500} 
          height={500} 
          className={styles.image} 
        />
      </div>
      

      <div className={styles.textContainer}>
        <h1 className={styles.heading}>
          I'm Ahsan, a Passionate Front-End Web Developer Dedicated to Transforming Innovative Ideas into Digital Realities.
        </h1>
        <p className={styles.paragraph}>
          Leveraging the power of modern technologies like React.js, Next.js, TypeScript, and Tailwind CSS, I strive to create elegant and efficient solutions to complex challenges. Whether it's crafting intuitive user interfaces or optimizing website performance, I'm committed to delivering top-notch results that exceed expectations.
        </p>
        <p className={styles.paragraph}>
          Front-end Specialist in Web Development... I am also a Student Leader at GIAIC 🎓, where I am Enrolled in Certified Cloud Applied Generative AI Engineer. I'm eager to embark on a journey towards becoming a versatile Full-Stack, DevOps, and Cloud Engineer.
        </p>
        <p className={styles.paragraph}>
          Tech Enthusiast with one year of experience in Front-End Development, specializing in Tailwind CSS, JavaScript, and TypeScript. 🚀 I have expertise in these technologies, and if you'd like to work on web applications or any skill-based project, let me know — I'm ready to collaborate.
        </p>
      </div>
    </section>
  )
}

export default About
