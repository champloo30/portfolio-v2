'use client'

import React, { useEffect } from 'react'
import { motion, Variants, useScroll, useAnimationControls } from "framer-motion"

const ScrollToTopVariants: Variants = {
  hide: { opacity: 0, transition: {duration: 0.5} },
  show: { opacity: 1, transition: {duration: 0.5} },
};

export default function ScrollToTop() {
  const { scrollYProgress } = useScroll()
  const controls = useAnimationControls()
  const isBrowser = () => typeof window !== 'undefined'

  useEffect(() => {
    return scrollYProgress.on('change', (latestValue) => {
      if (latestValue > 0.1) {
        controls.start('show');
      } else {
        controls.start('hide');
      }
    });
  });

  function toTop() {
    if (!isBrowser()) return
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <motion.button variants={ScrollToTopVariants} initial="hide" animate={controls} aria-labelledby='Scroll To Top' onClick={toTop}>
      <svg className='fill-secondary dark:fill-dark_secondary w-7 hover:fill-title dark:hover:fill-dark_title hover:-translate-y-2 transition linear duration-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M450-332h60v-182l74 74 42-42-146-146-146 146 42 42 74-74v182Zm30 252q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z"/></svg>
    </motion.button>
  )
}
