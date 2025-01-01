export default function Header({ setIsOpen }) {
    
return (
    <header className="header">
      <a href="#home" className="logo">Anastasia&nbsp;<span>Yerashova</span></a>
        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
       <a href="#contact" className="gradient-btn">Contact Me</a>
       <button className="mob-open-btn" type="button" id="menu-open-btn" onClick={() => setIsOpen(true)}>
       <span className="visually-hidden">Open menu</span>
        <svg className="mob-open-btn-icon" width="32" height="32">
          <use href="/src/img/icons.svg#icon-menu"></use>
        </svg>
        </button>
    </header>
    )
}
