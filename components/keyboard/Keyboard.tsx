import React, { useEffect } from 'react';
import { keys } from '@/utils/keys'
import { Key, RiDeleteBack2Line } from '..'

import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { wordStore } from '@/store/reducers/'
import { gameStore } from '@/store/reducers/';

import {isLetter} from '@/utils/isLetter'
 
const Keyboard = () => {

  const { table, row, target } = useAppSelector(state => state.word)

  const dispatch = useAppDispatch()

  const removeLetter = () => {
    dispatch(wordStore.removeLetter()) 
  }

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') { 
      table[row].forEach(item => {
        if (target.includes(item)) {
          dispatch(gameStore.addToIncluded(item))
        }
        else {
          dispatch(gameStore.addToBlack(item))
        }
      })
      dispatch(wordStore.enterRow()); return 
    }
    if (e.key === 'Backspace') {  dispatch(wordStore.removeLetter()); return}

    if (table[row].join('') === target && target) { 
      setTimeout(() => {dispatch(wordStore.winGame()); dispatch(gameStore.clearFields()), 500}) 
    }

    isLetter(e.key) && dispatch(wordStore.addLetter(e.key.toLowerCase()))
  }

  useEffect(() => {
    window.onkeydown = onKeyDown

    return () => window.onkeydown = null
  }, [])
                                                 

  return (
    <div className="flex max-w-[484px] mx-auto justify-center py-4 flex-wrap gap-[5px]">

     {
       keys.map((item, idx) => (
         <Key item={item} key={idx} />
       ))
     }

     <button className="key" onClick={removeLetter.bind(null)}>
      <RiDeleteBack2Line className="text-2xl text-gray-700" />
     </button>
     
    </div>
  )
};

export default Keyboard;
