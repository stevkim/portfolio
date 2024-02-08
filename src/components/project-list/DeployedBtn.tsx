interface Props {
  link: string;
}

const DeployedBtn = ({ link }: Props) => {
  return (
    <a href={link} rel='noreferrer' target="_blank" className="flex items-center p-2 rounded-sm text-xs text-primary hover:text-accent w-fit font-semibold cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width='16' height='16' className="mr-1">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
      </svg>
      link
    </a>
  )
}
export default DeployedBtn