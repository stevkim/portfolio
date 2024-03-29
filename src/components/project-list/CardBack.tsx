interface Props {
  gif: string | undefined;
  handleSetActive: () => void;
}

const CardBack = ({ gif, handleSetActive} :Props) => (
  <div className='card-back z-[-2] absolute bg-base-300 w-full h-full top-0 left-0 flex justify-center items-center' onClick={handleSetActive}>
    <img src={gif} className="h-full w-auto object-contain"/>
  </div>
)

export default CardBack