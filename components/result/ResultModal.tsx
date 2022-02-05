import React from 'react';

import { useAppSelector, useAppDispatch } from '@/hooks/redux'; 
import { wordStore, gameStore } from '@/store/reducers';

const ResultModal = () => {

  const {gameWinned, gameEnded} = useAppSelector(state => state.word)
  const { included } = useAppSelector(state => state.game)
  const dispatch = useAppDispatch()

  const restartGame = () => {
    dispatch(wordStore.refreshGame())
    dispatch(gameStore.clearFields())
  }

  return (
    <div className={'overlay ' + (gameEnded ? 'opacity-100 visible' : 'opadity-0 invisible')}>

      <div className='bg-white rounded-lg flex flex-col justify-end drop-shadow p-5 w-[300px] h-[300px] text-center gap-4'>

        <p className={'text-3xl text-gray-700 font-semibold ' + (gameWinned && 'text-green-600')}>  {gameWinned ? 'Congratulations!!!' : 'Im so sorry ' } </p>

        <p className='text-1xl text-gray-700 font-semibold '>The word will be changed next time, you can play more than one time a day</p>

        <p className='text-3xl text-gray-700 font-semibold '>  </p>

        <p className='text-blue-500 text-xl font-bold '> Total score is: { (included.length * 20) + (gameWinned ? 100 : 0)  } </p>

        <button 
          onClick={restartGame.bind(null)}
          className='but'>restart</button>
      </div>

    </div>
  )
};

export default ResultModal;
