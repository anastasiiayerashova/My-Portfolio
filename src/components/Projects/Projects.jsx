import { motion } from "framer-motion"

export default function Projects({ data }) {

return (
    <motion.section className="projects" id="projects" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: 'easeOut' }}>
      <h2 className="heading">Projects</h2>
        <ul className="projects-box">
          {data.map(project => (
            <li className="project-card" key={project.id}>
                <img src={project.image} alt={project.alt} />
                <h3>{project.title}</h3>
                <p className="skills">[{project.skills.join(', ')}]</p>
                <p>{project.description}</p>
                <a href={project.url} target="_blank" className="button">Review project</a>
            </li>
          ))}
        </ul>
    </motion.section>
    )
}