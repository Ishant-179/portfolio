import React from 'react'
import Tilt from 'react-parallax-tilt' // Changed import
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { textVariant, fadeIn } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt tiltMaxAngleX={45}
tiltMaxAngleY={45}
scale={1}
transitionSpeed={450}
 className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        {/* Changed options prop name and structure for react-parallax-tilt */}
        <div
          tiltMaxAngleX={45}
          tiltMaxAngleY={45}
          scale={1}
          transitionSpeed={450}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        My web development expertise centers on crafting dynamic and interactive experiences. I leverage React.js for building robust front-ends, Node.js for scalable back-end solutions, and Three.js to incorporate immersive 3D visualizations. This combination allows me to create performant, full-stack applications with rich, engaging user interfaces. I'm proficient in integrating these technologies to deliver seamless and visually compelling web experiences.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")