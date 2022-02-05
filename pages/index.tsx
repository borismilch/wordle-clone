import { Header , KeyBoard, GameTable} from "@/components/.";

import { words, randomWord } from "@/utils/words";
import { useEffect } from "react";
import { ResultModal } from '@/components/.'

import { useAppSelector, useAppDispatch } from "@/hooks/redux";

import { gameStore, wordStore } from '@/store/reducers'

export default function Home() {

  const dispatch = useAppDispatch()
  const {included} = useAppSelector(state => state.game)

  const initTable = () => {

    const table = JSON.parse(localStorage.getItem('table'))
    const target = localStorage.getItem('target')
    const element = localStorage.getItem('element')
    const row = localStorage.getItem('row')
    
    if (table) {

      table.flat().forEach((item: string) => {

        if (!item) { return }
     
        if (target.includes(item.toLowerCase())) {
          dispatch(gameStore.addToIncluded(item.toLowerCase()))
        }
        else {
          if (!included.includes(item)) {dispatch(gameStore.addToBlack(item))}
        }
      })

      dispatch(wordStore.setTable({table, row, target, element}))
    }
  }

  useEffect(() => {
    const word = randomWord(words)
    
    dispatch(wordStore.setTarget(word))

    initTable()
  }, [])

  return (
    <div className="flex items-center justify-center w-screen h-screen overflow-hidden ">

      <div className="flex items-center justify-between h-screen w-[500px] mx-auto flex-col">

        <Header />

        <GameTable />

        <KeyBoard />

        <ResultModal />
   
      </div>
     
    </div>
  );
}
