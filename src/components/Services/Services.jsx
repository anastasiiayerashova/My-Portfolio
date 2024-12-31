import { motion } from "framer-motion"

export default function Services() {
    return (
         <motion.section className="services" id="services" initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: 'easeOut' }}>
      <h2 className="heading">Services</h2>
      <div className="services-container">
        <div className="service-box">
          <div className="service-info">
            <i className="bx bxl-figma"></i>
            <h4>UI / UX Design</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Praesentium mollitia quam in atque aliquam? Maxime, reiciendis
              facilis, esse rerum incidunt illum explicabo deleniti
            </p>
          </div>
        </div>

        <div className="service-box">
          <div className="service-info">
            <i className="bx bx-code"></i>
            <h4>Frontend Development</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Praesentium mollitia quam in atque aliquam? Maxime, reiciendis
              facilis, esse rerum incidunt illum explicabo deleniti
            </p>
          </div>
        </div>

        <div className="service-box">
          <div className="service-info">
            <i className="bx bx-code-curly"></i>
            <h4>Backend Development</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Praesentium mollitia quam in atque aliquam? Maxime, reiciendis
              facilis, esse rerum incidunt illum explicabo deleniti
            </p>
          </div>
        </div>
      </div>
    </motion.section>
    )
}