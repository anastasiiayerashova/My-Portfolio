import { motion } from "framer-motion"

const variantsOverlay = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1
    },
    exit: {
        opacity: 0
    },
}

const variantsMenu = {
  initial: {
    x: "100%", 
    opacity: 0,
  },
  animate: {
    x: '70%', 
    opacity: 1,
    transition: {
    duration: 0.05, 
    },
  },
  exit: {
    x: "100%", 
    opacity: 0,
    transition: { 
      duration: 0.05,
    },
  },
};

export default function MobMenu({ isOpen, setIsOpen }) {

    return (
        <div className={`mob-menu-overlay ${isOpen ? "active" : ""}`} onClick={() => setIsOpen(false)}
            >
            <div className={`mob-menu ${isOpen ? "active" : ""}`} id="mobile-menu" onClick={(e) => e.stopPropagation()}
                >
               <nav className="mob-menu-nav">
                    <a href="#home" className="logo logo-mob">Anastasia&nbsp;<span>Yerashova</span></a>
                    <button className="mob-menu-close-btn" id="menu-close-btn" onClick={() => setIsOpen(false)}>
                    <span className="visually-hidden">Close menu</span>
                      <svg className="mob-menu-close-btn-icon" width="32" height="32">
                       <use href="/img/icons.svg#icon-close"></use>
                      </svg>
                    </button>
               </nav>
               <ul className="mob-nav-list ">
                <li className="mob-nav-item">
                  <a className="mob-nav-link" href="#about" onClick={() => setIsOpen(false)}>About Me</a>
                </li>
                <li className="mob-nav-item">
                  <a className="mob-nav-link" href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
                </li>
                <li className="mob-nav-item">
                  <a className="mob-nav-link" href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
                </li>
               </ul>
            </div>
        </div>
    )
}