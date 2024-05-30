import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
const MobileMenu = (props: {
  setRotate: (arg0: boolean) => void
  rotate: any
  setShowElement: (arg0: boolean) => void
  ShowElement: any
}) => {
  const closeMenu = () => {
    props.setRotate(!props.rotate)
    props.setShowElement(!props.ShowElement)
  }
  return (
    <>
      <motion.div
        initial={{ x: '100%' }}
        animate={props.rotate ? { x: '0' } : { x: '100%' }}
        transition={{ x: { duration: 0.4 } }}
        className='fixed z-20 flex h-screen w-full duration-300 md:hidden'
      >
        <div
          onClick={() => closeMenu()}
          className='bg-MobileNavColor/30 h-full w-1/4 backdrop-blur-sm hover:cursor-pointer'
        ></div>
        <div
          className='flex h-full w-3/4 flex-col items-center 
        justify-center space-y-8 bg-MobileNavBarColor font-sans'
        >
          <Link
            to='aboutSection'
            spy={true}
            smooth={true}
            offset={-50}
            duration={200}
            onClick={() => closeMenu()}
            className='flex flex-col space-y-2 text-center'
          >
            <span className='font-mono text-xs text-AAsecondary'>01.</span>
            <span
              className='font-Text2 text-sm text-white duration-300
             hover:cursor-pointer hover:text-AAsecondary sm:text-base'
            >
              About
            </span>
          </Link>
          <Link
            to='WhereIhaveWorkedSection'
            spy={true}
            smooth={true}
            offset={-250}
            duration={200}
            onClick={() => closeMenu()}
            className='flex flex-col space-y-2 text-center'
          >
            <span className='font-mono text-xs text-AAsecondary hover:cursor-pointer'>02.</span>
            <span
              className='font-Text2 text-sm text-white duration-300
             hover:cursor-pointer hover:text-AAsecondary sm:text-base'
            >
              Experience
            </span>
          </Link>
          <Link
            to='SomethingIveBuiltSection'
            spy={true}
            smooth={true}
            offset={100}
            duration={200}
            onClick={() => closeMenu()}
            className='flex flex-col space-y-2 text-center'
          >
            <span className='font-mono text-xs text-AAsecondary'>03.</span>
            <span
              className='font-Text2 text-sm text-white duration-300
             hover:cursor-pointer hover:text-AAsecondary sm:text-base'
            >
              Work
            </span>
          </Link>
          <Link
            to='GetInTouchSection'
            spy={true}
            smooth={true}
            offset={100}
            duration={200}
            onClick={() => closeMenu()}
            className='flex flex-col space-y-2 text-center'
          >
            <span className='font-mono text-xs text-AAsecondary'>04.</span>
            <span
              className='font-Text2 text-sm text-white duration-300
             hover:cursor-pointer hover:text-AAsecondary sm:text-base'
            >
              Contact
            </span>
          </Link>
          <a href={'/resume.pdf'} target={'_blank'} rel='noreferrer'>
            <button
              className='rounded border border-AAsecondary  px-5
           py-2 font-Text2 text-xs text-AAsecondary hover:bg-ResumeButtonHover sm:px-10 sm:py-4'
            >
              Resume
            </button>
          </a>
        </div>
      </motion.div>
    </>
  )
}
export default MobileMenu
