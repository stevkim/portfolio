
import { motion } from 'framer-motion'

const test = ['react-original', 'supabase-plain', 'redux-original', 'mongodb-plain', 'express-original']
const text = 'react, express, typescript, javascript, redux, mongodb, sql, nosql'

const Test = () => {
  return (
    <section className="w-full min-h-[90vh] flex flex-col p-4 md:px-[20%] text-xl pt-20">
      <div
        className="flex flex-nowrap gap-4 w-full border-2 border-black"
      >
       { test.map((icon, index) => {
          return (
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ type: 'linear', delay: index * 0.1 }}
              viewport={{ once: true }}
            >

            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
export default Test