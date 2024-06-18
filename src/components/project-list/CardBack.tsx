interface Props {
  gif: string | undefined;
  handleSetActive: () => void;
}

const CardBack = ({ gif, handleSetActive }: Props) => (
  <div
    className="card-back absolute left-0 top-0 z-[-2] flex h-full w-full items-center justify-center bg-base-300"
    onClick={handleSetActive}
  >
    <img src={gif} className="h-full w-auto object-contain" />
  </div>
);

export default CardBack;
