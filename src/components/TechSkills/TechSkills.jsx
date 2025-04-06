import InfiniteScroll from '../../blocks/Components/InfiniteScroll/InfiniteScroll.jsx'

const TechSkills = () => {

  const items = [
  { content: <p>Node.js</p> },
  { content: <p>JavaScript</p> },
  { content: <p>Nest.js</p> },
  { content: <p>React</p> },
  { content: <p>Express.js</p> },
  { content: <p>Next.js</p> },
  { content: <p>Vite</p> },
];

    return (
        <section>
            <h2 className="heading">Tech Skills</h2>
            <div style={{height: '800px', marginTop: '10rem', position: 'relative'}}>
                <InfiniteScroll items={items} isTilted={true} tiltDirection='left' autoplay={true} autoplaySpeed={4} autoplayDirection="down" pauseOnHover={true}/>
            </div>
        </section>
    )
 }

export default TechSkills