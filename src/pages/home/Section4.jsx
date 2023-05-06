import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion'

function Section4({height}) {
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: '-100px 0px 0px 0px',
  });
  const fillVariants = {
    initial: {
      width: 0
    },
    animate: {
      width: '100%',
      transition: {
        duration: 2,
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

  return (
    <div ref={ref} style={{ position: 'relative', height: '100vh', scrollSnapAlign: 'start' }}>
      <section style={{ opacity: inView ? 1 : 0 }}>
    
        <div className="section4" style={{ position: 'relative' }}>
          <p style={{ position: 'relative',fontStyle: 'italic', textAlign: 'center' }}>Click for more</p>
            <motion.span
              className="arrow"
              variants={arrowVariants}
              animate={ 'animate'}
              style={{
                position: 'relative',
                bottom: '6rem',
                left: '48%',
                display: 'block',
                width: '24px',
                height: '24px'
              }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24">
              <path fill="white" d="M12,6.5l5,5l-1.41,1.41L12,9.32l-3.59,3.59L7,11.5l5,-5z" />
              </svg>
            </motion.span>
        </div>

      </section>
    </div>
  );
}

export default Section4;
