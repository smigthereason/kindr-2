import React from 'react'
import { RiNotification2Line } from 'react-icons/ri'

type DashnavProps = {
    title: string
  }
  
  export default function Dashnav({ title }: DashnavProps) {
    return (
      <nav className="w-full bg-secondary py-4 px-6 flex justify-between items-center rounded-md">
        <h1 className="text-xl font-bold">{title}</h1>
        <RiNotification2Line className="text-gray-100 text-2xl" />
      </nav> 
    ) 
  }