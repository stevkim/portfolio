import portrait from '../../assets/images/portrait.avif'

const SelfPortrait = () => {
  return (
    <div className='relative portrait-wrapper overflow-hidden flex justify-center items-center'>
      <img src={portrait} alt='Steven rock climbing' className='portrait rounded-sm border-4 border-transparent'/>
    </div>
  )
}

export default SelfPortrait;