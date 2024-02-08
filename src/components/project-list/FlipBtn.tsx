interface Props {
  Flip: () => void;
}

const FlipBtn = ({ Flip }: Props) => (
  <button onClick={Flip} className="flex items-center bg-secondary hover:bg-accent p-2 rounded-sm text-xs text-base-200 hover:text-primary w-fit font-semibold cursor-pointer">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="16" height="16" className="mr-1">
      <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 6-6m0 0 6 6m-6-6v12a6 6 0 0 1-12 0v-3" />
    </svg>
    see more
  </button>
)

export default FlipBtn