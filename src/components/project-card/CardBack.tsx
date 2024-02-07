interface Props {
  gif: string | undefined;
  handleSetActive: () => void;
}

const CardBack = ({ gif, handleSetActive} :Props) => {
  return (
    <div className='card-back z-[-2] absolute bg-base-100 w-full h-full top-0 left-0 flex justify-center items-center' onClick={handleSetActive}>
      <img src={gif} className="h-full w-auto object-fill object-left-top"/>
    </div>
  )
}
export default CardBack