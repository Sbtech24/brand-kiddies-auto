import React from 'react'
import style from "./page.module.css"
import Header from '@/components/Header/Header'
const page = () => {
  return (
    <div className={style.container}>
     <Header/>
    </div>
  )
}

export default page