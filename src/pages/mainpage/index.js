import React from 'react'
import mm from './style.module.css'
import IndexBA from './indexBA'


const Index = () => {
  return (
    <div className={mm.mainContainer}>
      <div className={mm.subContainer}>
      <h2>Enter your password</h2>
      <IndexBA/>
      
      </div>
    </div>
  )
}

export default Index
