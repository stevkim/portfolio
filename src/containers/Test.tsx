import { useEffect, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion'

const Test = () => {
  const target = 'WELCOME'
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const [word, setWord] = useState(target);
  const [test, setTest] = useState(true);

  const handleMouseOver = () => {
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
    handleMouseOver()
    setTimeout(() => {
      setTest(false);
    }, 2000)
  }, [])


  return (
      <AnimatePresence>
        {test && <motion.div
            initial={{ y: -500 }}
            animate={{ y : 0 }}
            transition={{ type: 'linear' }}
            exit={{ x: 500, opacity: 0 }}
            className="text-[8rem] w-full text-center highlight font-bold absolute top-[10%]"
            >
              {
              word.split('').map(letter => {
                return <span>{letter}</span>
              })
              }</motion.div>
        }
      </AnimatePresence>
  )
}
export default Test