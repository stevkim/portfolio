import { ICONS } from '../assets/siteData.js';

const TechStack = () => (
  <div className='border-2 p-10 rounded-sm bg-base-200 text-center flex flex-col items-center w-fit mx-auto'>
    <h3 className='text-3xl mb-8 font-semibold'>my tech stack.</h3>
    <div className='grid grid-cols-3 gap-2'>
      {
        ICONS.map(url => {
          return <img width='120' height='80' className='mx-auto' key={url} src={url} alt='Tech Stack Badge' />
        })
      }
    </div>
  </div>
)

export default TechStack;