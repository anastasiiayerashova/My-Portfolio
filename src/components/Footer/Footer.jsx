export default function Footer() {
    return (
         <footer className="footer">
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
      <ul className="list">
        <li>
          <a href="#">FAQ</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <p className="copyright">© Anastasia Yerashova | All Rights Reserved</p>
    </footer>

    )
}