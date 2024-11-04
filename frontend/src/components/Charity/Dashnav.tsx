import { RiNotification2Line } from 'react-icons/ri'

type DashnavProps = {
    title: string
  }
  
  export default function Dashnav({ title }: DashnavProps) {
    return (
      <nav className="relative right-52 xl:right-0 w-[240px] xl:w-[1020px]  xl:ml-4  bg-secondary py-4 px-6 flex justify-between items-center rounded-lg border">
        <h1 className="text-3xl ml-2 font-bold">{title}</h1>
        <RiNotification2Line className="text-gray-100 text-3xl" />
      </nav> 
    ) 
  }