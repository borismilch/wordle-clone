import React from 'react';

import { TableCell } from '..'
import { useAppSelector } from '@/hooks/redux'; 

const GameTable = () => {

  const { table } = useAppSelector(state => state.word)

  return (
    <div className='flex-grow justify-center items-center flex'>
      <div className="grid grid-cols-5 gap-1 grid-rows-6">

       {table.map((row, idx) => (
        row.map((item, i) => (
          <TableCell key={ idx + '' + i} idx={idx} itemidx = {i} item={item} />
        ))
       ))}

      </div>
    </div>
  )
};

export default GameTable;
