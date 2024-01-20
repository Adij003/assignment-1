import React from 'react'
import Card from '../components/Card'
import FrameOne from '../assets/FrameOne.png'
import FrameTwo from '../assets/FrameTwo.png'
import FrameThree from '../assets/FrameThree.png'

function SubPageCard() {
  return (
    <div className='SubPageCardBox flex flex-row justify-around mx-28 mb-10'>
      <Card cardName = {'Technology'} cardImg = {FrameOne}/>
      <Card cardName = {'Real Estate'} cardImg = {FrameTwo}/>
      <Card cardName = {'Private Equity'} cardImg = {FrameThree}/>
      
    </div>
  )
}

export default SubPageCard