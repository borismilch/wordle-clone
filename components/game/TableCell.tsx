import React from 'react';
import { useAppSelector } from '@/hooks/redux'

import { memo } from 'react';

const TableCell: React.FC<{item: string, idx: number, itemidx: number}> = ({item, idx, itemidx}) => {
  const {element, row, target} = useAppSelector(state => state.word)

  const canShowAnswear = (row ) > idx && item  
  const isIncludes = canShowAnswear && (target.includes(item.toLowerCase()))
  const isTarget = isIncludes && target[itemidx] === item.toLowerCase()

  const className = isTarget ? 'cell_green' : isIncludes ? 
   "cell_filled" : canShowAnswear ? "cell_black" : item ?  "cell_typed" : 'cell_empty'

  return (
    <div 
      className={className}>
      {item}
    </div>
  )
};

export default memo(TableCell);
