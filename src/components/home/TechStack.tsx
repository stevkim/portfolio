import { ICONS } from '../../assets/siteData.js';

const TechStack = () => {
  return (
    <div className="my-20 text-center flex flex-col items-center">
      <div className='border-2 p-10 rounded-md  bg-base-200'>
        <h3 className='text-3xl mb-8 font-semibold'>my tech stack</h3>
        <div className='grid grid-cols-3 gap-2'>
          {
            ICONS.map(url => {
              return <img className='mx-auto' key={url} src={url} alt='Tech Stack Badge' />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default TechStack;