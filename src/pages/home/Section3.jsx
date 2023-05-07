import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
// import { state } from '../../store'
import { useInView } from 'react-intersection-observer'

function Section3() {
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: '-100px 0px 0px 0px'
  })

  const fillVariants = {
    initial: {
      width: 0
    },
    animate: {
      width: '100%',
      transition: {
        duration: 1,
        ease: 'easeInOut'
      }
    }
  }

  const arrowVariants = {
    animate: {
      y: [0, 20, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: 'reverse'
      }
    }
  }
  const isMobile = window.innerWidth <= 480;


  return (
    <div ref={ref} style={{ height: '100vh' ,scrollSnapAlign: 'start', position: 'relative' }}>
      <motion.section
        initial={{ x: -1200, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        exit={{ x: 1200, opacity: 0 }}
        transition={{ type: 'spring', duration: 1, delay: 0.5 }}>
        <div className="section3">
          <h1
            initial={{ x: -1600, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', damping: 5, stiffness: 10, restDelta: 0.001, duration: 0.3 }}>
            AURO VERSE.
          </h1>
          <div className="section3-content">
          <motion.div
            initial={{ x: -400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              damping: 7,
              stiffness: 10,
              restDelta: 0.001,
              duration: 0.6,
              delay: 0.2,
              delayChildren: 0.2
            }}>
            <p>
              Where Innovation Meets Fun - Be There for an Unforgettable Experience! <br /> <strong>Don't Miss the opportunity.</strong>
            </p>
            <button className="myButton" 
            // style={{}} 
            // onClick={() => (state.intro = false)}
            >
              Register Now
            </button>
          </motion.div>
        </div>
        </div>
        
        <div className="scroll-text" style={{ position: 'relative',marginTop:'5rem', visibility: isMobile? 'hidden': 'visible' }}>
          <p style={{ position: 'relative', fontStyle: 'italic', textAlign: 'center', marginBottom: -40 }}>Scroll down for more</p>
          <motion.div
            className="fill"
            variants={fillVariants}
            initial="initial"
            animate={'animate' }
            style={{
              position: 'relative',
              left: 0,
              height: '5px',
              zIndex: 1,
              width: '0%'
            }}>
            <motion.span
              className="arrow"
              variants={arrowVariants}
              animate={inView ? 'animate' : 'initial'}
              style={{
                position: 'absolute',
                bottom: '30px',
                left: '48.5%',
                transform: 'translateX(-50%)',
                display: 'block',
                width: '24px',
                height: '24px'
                // zIndex: 1,
              }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24">
                <path
                  fill="white"
                  d="M12.707 15.707l5-5a.999.999 0 0 0-1.414-1.414l-4.293 4.293-4.293-4.293a.999.999 0 1 0-1.414 1.414l5 5a.999.999 0 0 0 1.414 0z"
                />
              </svg>
            </motion.span>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

export default Section3
