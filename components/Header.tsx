import React from 'react';
import { BiHelpCircle, IoMdSettings, VscGraph, AppIcon } from '.'

const Header = () => {
  return (
    <div className="flex items-center justify-between p-2 w-full border-b border-gray-300 ">

     <AppIcon 
       Icon={<BiHelpCircle />}
     />

     <div className="absolute right-0 left-0 w-full flex items-center justify-center">
       <h1 className="font-sans text-4xl font-bold tracking-widest">WORDLE</h1>
     </div>

     <div className="flex items-center gap-1">

        <AppIcon 
          Icon={<VscGraph />}
        />

       <AppIcon 
          Icon={<IoMdSettings />}
        />
     </div>



    </div>
  )
};

export default Header;
