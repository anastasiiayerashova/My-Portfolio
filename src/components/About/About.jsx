import { motion } from "framer-motion"

export default function About() {
    return (
        <section className="about" id="about">
      <div className="about-img">
        <img src="/src/img/home-img.jpg" alt="Anastasia Yerashova" />
      </div>
      <motion.div className="about-content" initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: 'easeOut' }}>
        <h2>About <span>Me</span></h2>
        <p>
          Motivated and detail-driven Front-End Developer with
           expertise in React, Redux, JavaScript, HTML5, and CSS3.
            I emphasize Agile/Scrum methodologies and prioritize teamwork,
             flexibility, and ongoing development. Throughout my education,
              I contributed to team projects, honing my skills in organization, communication, and collaboration.
           <span className="more-text">
            Additionally, I am passionate about problem-solving and building scalable, user-friendly applications. I enjoy learning new technologies and staying up-to-date with industry trends to continuously improve my skills.
        </span>
        </p>
        <button className="btn js-btn">Read More</button>
      </motion.div>
    </section>
    )
}