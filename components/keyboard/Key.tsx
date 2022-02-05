import React from 'react';

import { IKey } from '@/models/.';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { wordStore, gameStore } from '@/store/reducers'

const Key: React.FC<{item: IKey}> = ({item}) => {

  const dispatch = useAppDispatch()
  const { black, included } = useAppSelector(state => state.game)
  const { target } = useAppSelector(state => state.word)

  const { element, row, table } = useAppSelector(state => state.word)

  const addLetter = () => {

    dispatch(wordStore.addLetter(item.key.toLowerCase()))
  }

  const enterRow = () => {

    table[row].forEach(item => {
     
      if (target.includes(item.toLowerCase())) {
        dispatch(gameStore.addToIncluded(item.toLowerCase()))
      }
      else {
        if (!included.includes(item)) {dispatch(gameStore.addToBlack(item))}
      }
    })

    if (table[row].join('') === target && target) { 
      setTimeout(() => {dispatch(wordStore.winGame()); dispatch(gameStore.clearFields()), 500}) 
    }
    if (element === 4) dispatch(wordStore.enterRow())
  }

  const className = included.includes(item.key.toLowerCase()) ? "button_included" : black.includes(item.key.toLowerCase()) ? 'button_black'  : "key"

  return (
    <>
    {item.type === 'placeholder' ?
     <div className='w-[22px] md-block hidden'></div> :
      <button 
        onClick={item.type === 'enter' ? enterRow.bind(null) : addLetter.bind(null)}
        className={className}
        key= {item.key}> {item.key}
      </button>
    }

    </>
  )
};

export default Key;
