import React from 'react';
import Charity from '@/components/Home/Charities';
import GetCharity from './GetCharity';



const Charities: React.FC = () => {
 

  return (
    <section className="bg-black text-white ml-60 w-[1080px]">
      
      <Charity />
      
      <GetCharity />
    </section>
  );
};

export default Charities;