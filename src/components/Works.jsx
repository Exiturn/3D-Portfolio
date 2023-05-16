import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github, site } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_site_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full"
      >
        <div className='relative w-full h-[230px]'>
          <img src={image} alt={name} className='w-full h-full object-fill rounded-2xl' />

          <div className='flex justify-end absolute inset-0 gap-[10]'>
            <div className='inset-0  flex justify-end m-1 card-img_hover z-10'>
              <div onClick={() => window.open(live_site_link, "_blank")} className={`bg-white ${styles.worksIcons} hover:border-black hover:border-2 ease-in duration-200`}>
                <img src={site} alt="website" className='w-1/2 h-1/2 object-contain '/>
              </div>
            </div>

            <div className='inset-0  flex justify-end m-1 card-img_hover z-10'>
              <div onClick={() => window.open(source_code_link, "_blank")} className={`black-gradient ${styles.worksIcons} hover:border-white hover:border-2 ease-in duration-200`}>
                <img src={github} alt="github" className='w-1/2 h-1/2 object-contain' />
              </div>
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Projects</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Here are some of the projects I have worked on. Each project will be described and a link
          to the Github repository is provided if you would like to take a look at the code. These projects
          reflect the skills I am confident with and also technologies I am learning! These projects are not
          an indication of my skill ceiling, I'm only going to get better!
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`}
            {...project}
            index={index} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "works");