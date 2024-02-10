import { useEffect, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion'

const Welcome = () => {
  const target = 'WELCOME'
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const [word, setWord] = useState(target);
  const [animate, setAnimate] = useState(true);

  const handleScramble = () => {
    let iteration = 0
    let requestId: number | null = null
    const { length } = word

    const scrambleText = () => {
      setWord(prevText => {
        const scrambledText = prevText
          .split('')
          .map((_, index) => {
            if (index < iteration) {
              return target[index]
            }
            return letters[Math.floor(Math.random() * length)]
          })
          .join('')
        iteration += 1 / 10

        if (iteration >= length) {
          setWord(target)
          cancelAnimationFrame(requestId as number)
        }

        return scrambledText
      })
      requestId = requestAnimationFrame(scrambleText)
    }

    requestId = requestAnimationFrame(scrambleText)
  }

  useEffect(() => {
    handleScramble()
    const setter = setTimeout(() => {
      setAnimate(false);
    }, 2000)

    return () => clearTimeout(setter)
  }, [])

  return (
    <AnimatePresence>
      {animate && <motion.div
          initial={{ y: -500 }}
          animate={{ y : 0 }}
          transition={{ type: 'linear' }}
          exit={{ x: 500, opacity: 0 }}
          className="text-[5rem] md:text-[10rem] w-full h-[80vh] highlight font-bold absolute flex justify-center items-center"
          >
            {word}
          </motion.div>
      }
    </AnimatePresence>
  )
}
export default Welcome