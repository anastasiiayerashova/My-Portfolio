import { motion } from "framer-motion"

const textAnimation = {
    hidden: { 
        scale: 0.5, 
        opacity: 0 
    },
    visible: custom => ({
        scale: 1,
        opacity: 1,
        transition: { delay: custom * 0.2, duration: 0.4 }
    })
};

export default function Home() {

return (
    <section className="home" id="home">
      <div className="home-content">
        <motion.h1 variants={textAnimation} initial='hidden' animate='visible' custom={2}>Hi, It's <span>Anastasia</span></motion.h1>
        <motion.h3 custom={3} variants={textAnimation} initial='hidden' animate='visible' >I'm a&nbsp;<span>Full-Stack Developer</span></motion.h3>
        <motion.p custom={4} variants={textAnimation} initial='hidden' animate='visible'>
          Inspired and detail-oriented Full-Stack Developer skilled in React, JavaScript, Node.js, HTML5 and CSS3.
          I specialize in creating user-friendly web
          development projects with a focus on Agile/Scrum and value teamwork,
          adaptability, and continuous learning. A fast learner and
          problem-solver, I am committed to delivering impactful and efficient
          solutions</motion.p>
        <div className="social-icons">
          <a href="https://github.com/anastasiiayerashova" target="_blank">
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/anastasia-yerashova/" target="_blank">
            <i className="bx bxl-linkedin-square"></i>
          </a>
          <a href="https://djinni.co/q/a23ba9b3c9/" target="_blank">
            <i className="bx bxl-django"></i>
          </a>
        </div>
        <div className="btn-group">
          <a href="#contact" className="button">Hire</a>
          <a href="#contact" className="button">Contact</a>
        </div>
      </div>
      <motion.div className="home-img" variants={textAnimation} initial='hidden' animate='visible' custom={1}>
        <img src="/img/home-img.jpg" alt="Anastasia Yerashova" />
      </motion.div>
    </section>
    )
}