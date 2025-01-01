import { motion } from "framer-motion"
import { useState } from "react"

export default function About() {
    const [showText, setShowText] = useState(false)
    const handleToggle = () => setShowText((prev) => !prev)

    return (
    <section className="about" id="about">
      <div className="about-img">
        <img src="/src/img/home-img.jpg" alt="Anastasia Yerashova" />
      </div>
      <motion.div className="about-content" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: 'easeOut' }}>
        <h2>About <span>Me</span></h2>
        <p>
          Motivated and detail-driven Front-End Developer with
          expertise in React, Redux, JavaScript, HTML5, and CSS3.
          I emphasize Agile/Scrum methodologies and prioritize teamwork,
          flexibility, and ongoing development. Throughout my education,
          I contributed to team projects, honing my skills in organization, communication, and collaboration.
        </p>
        <motion.p className="more-text" initial={{ opacity: 0, height: 0, display: 'none' }} animate={{ opacity: showText ? 1 : 0, height: showText ? 'auto' : 0,
            display: showText ? 'block' : 'none', }} 
            transition={{ duration: 0.7 }}>
                Additionally, I am passionate about problem-solving and building scalable,
                user-friendly applications. I enjoy learning new technologies and staying
                up-to-date with industry trends to continuously improve my skills.
        </motion.p>
        <button className="button" onClick={handleToggle}>{showText ? 'Hide' : 'Read more'}</button>
      </motion.div>
    </section>
    )
}