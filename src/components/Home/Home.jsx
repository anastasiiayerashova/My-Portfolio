

export default function Home() {
    return (
          <section className="home" id="home">
      <div className="home-content">
        <h1>Hi, It's <span>Anastasia</span></h1>
        <h3>I'm a&nbsp;<span>Full-Stack Developer</span></h3>
        <p>
          Inspired and detail-oriented Front-End Developer skilled in HTML, CSS,
          JavaScript, and React. I specialize in creating user-friendly web
          development projects with a focus on Agile/Scrum and value teamwork,
          adaptability, and continuous learning. A fast learner and
          problem-solver, I am committed to delivering impactful and efficient
          solutions
        </p>
        <div className="social-icons">
          <a href="https://github.com/anastasiiayerashova" target="_blank">
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/anastasia-yerashova/"
            target="_blank"
          >
            <i className="bx bxl-linkedin-square"></i>
          </a>
          <a href="https://djinni.co/q/a23ba9b3c9/" target="_blank">
            <i className="bx bxl-django"></i>
          </a>
        </div>
        <div className="btn-group">
          <a href="#" className="btn">Hire</a>
          <a href="#contact" className="btn">Contact</a>
        </div>
      </div>

      <div className="home-img">
        <img src="/src/img/home-img.jpg" alt="Anastasia Yerashova" />
      </div>
    </section>
    )
}