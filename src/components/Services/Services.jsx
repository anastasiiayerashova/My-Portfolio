import { motion } from "framer-motion"

export default function Services() {

    return (
        <motion.section className="services" id="services" initial={{ opacity: 0, y: 50 }}  whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: 'easeOut' }}>
           <h2 className="heading">Services</h2>
             <div className="services-container">
               <div className="service-box">
                <div className="service-info">
                  <i className="bx bx-code-alt"></i>
                  <h4>Fullstack Development</h4>
                  <p> I bring together the best of frontend and backend development to create complete, end-to-end web solutions. From designing
                    responsive user interfaces to building secure and scalable
                    server-side systems, I ensure every aspect of a project works seamlessly together</p>
                </div>
               </div>
              <div className="service-box">
                <div className="service-info">
                  <i className="bx bx-code"></i>
                  <h4>Frontend Development</h4>
                  <p>I create visually appealing and user-centric interfaces that deliver
                    a seamless experience across all devices. From intuitive navigation
                    to responsive layouts, I ensure every detail enhances usability and
                    accessibility. My focus is on building modern, efficient, and scalable
                    front-end solutions tailored to the needs of each project</p>
                </div>
              </div>
              <div className="service-box">
                <div className="service-info">
                  <i className="bx bx-code-curly"></i>
                  <h4>Backend Development</h4>
                  <p>I develop reliable and high-performance server-side systems
                    that form the backbone of web applications. With a strong
                    emphasis on data security and efficiency, I ensure smooth
                    communication between the server and client. Whether it’s building
                    RESTful APIs, managing databases, or optimizing server performance,
                    I deliver backend solutions that are scalable and robust</p>
                </div>
              </div>
           </div>
        </motion.section>
    )
}