import {motion} from 'framer-motion'


const Skill = ({name, x, y}) => {
  return(
    <motion.div className='flex items-center justify-center rounded-full 
      font-semibold bg-dark text-light py-3 px-6 absolute shadow-dark cursor-pointer'
      whileHover={{scale: 1.05}}
      initial={{x:0,y:0}}
      whileInView={{x:x,y:y}}
      transition={{duration:1.5}}
      viewport={{once: true}}
      >
      {name}
    </motion.div>
  )
}

function Skills() {
  return (
    <>
      <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
      <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>

        <motion.div className='flex items-center justify-center rounded-full 
         font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer'
         whileHover={{scale: 1.05}}
         >
          web
        </motion.div>

        <Skill name='HTML' x='-5vw' y='-9vw'/>
        <Skill name='CSS' x='-23vw' y='2vw'/>
        <Skill name='JavaScript' x='0vw' y='14vw'/>
        <Skill name='React' x='20vw' y='6vw'/>
        <Skill name='Next' x='-20vw' y='-15vw'/>
        <Skill name='TypeScript' x='15vw' y='-12vw'/>
        <Skill name='Tailwind CSS' x='30vw' y='-5vw'/>
        <Skill name='Sanity' x='-25vw' y='18vw'/>
        <Skill name='Figma' x='25vw' y='18vw'/>
        <Skill name='FireBase' x='0vw' y='-20vw'/>
      </div>
    </>
  )
}

export default Skills