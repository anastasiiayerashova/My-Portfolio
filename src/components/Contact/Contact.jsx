import { motion } from "framer-motion"

const variants = {
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 1, ease: 'easeOut' },
    }),
    hidden: { opacity: 0, y: 50 },
  };

export default function Contact() {
    return (
        <section id="contact" className="section">
  <div className="container work-wrapper">
    <div className="work-left">
      <motion.h2 className="work-title" variants={variants} custom={1} initial='hidden' whileInView='visible' viewport={{ once: true }}>
        Let's<span> work together</span>
      </motion.h2>
      <span className="work-bg"></span>
      <motion.p className="work-text" variants={variants} custom={2} initial='hidden' whileInView='visible' viewport={{ once: true }}>
        contact me to transform your ideas into exceptional solutions.
      </motion.p>
      <motion.ul className="work-list" variants={variants} custom={3} initial='hidden' whileInView='visible' viewport={{ once: true }}>
        <li className="work-item">
          <svg className="work-icon" width="24" height="24">
            <use href="/src/img/icons.svg#icon-phone"></use>
          </svg>
          <a className="work-link" href="tel:+380904567890">+38 090 456 78 90</a>
        </li>
        <li className="work-item">
          <svg className="work-icon" width="24" height="24">
            <use href="/src/img/icons.svg#icon-mail"></use>
          </svg>
          <a className="work-link" href="mailto:lloydjefferson@gmail.com"
            >yerashova.a@gmail.com</a
          >
        </li>
        <li className="work-item">
          <svg className="work-icon" width="24" height="24">
            <use href="/src/img/icons.svg#icon-map"></use>
          </svg>
          <a className="work-link" href="https://www.google.com/maps?q=New+York,+USA" target="_blank">Seville, Spain</a>
        </li>
      </motion.ul>
    </div>
    <motion.div className="work-right" variants={variants} custom={4} initial='hidden' whileInView='visible' viewport={{ once: true }}>
      <form className="work-form" noValidate>
        <input
          className="work-input"
          type="email"
          name="email"
          placeholder="Your email*"
          pattern="^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$"
          id="email"
          required
        />
        <label htmlFor="email" className="visually-hidden">Email</label>
        <svg className="work-success-icon" width="16" height="16">
          <use href="./img/icons.svg#icon-ack"></use>
        </svg>
        <p className="error-input js-error">Invalid email, try again</p>
        <textarea
          className="work-message"
          placeholder="Message"
          name="message"
          id="message"
        ></textarea>
        <label htmlFor="message" className="visually-hidden">Message</label>
        <p className="error-input-msg js-error">All fields must be filled</p>
        <button type="submit" className="work-btn gradient-btn" data-bs-toggle="modal"
  data-bs-target="#workModal">send message</button>
      </form>
      <span className="work-loader visually-hidden"></span>
                </motion.div>
                </div>

   
</section>
    )
}