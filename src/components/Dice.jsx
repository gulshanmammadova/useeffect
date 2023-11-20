import React from 'react'
import img1 from './images/dice1.png'
import img2 from './images/dice2.png'
import img3 from './images/dice3.png'
import img4 from './images/dice4.png'
import img5 from './images/dice5.png'
import img6 from './images/dice6.png'
import { useState } from 'react'


const Dice = () => {
    let imgArrays1=[img1,img2,img3,img4,img5,img6]
    const [imgOne, setImgOne] = useState(img1)
    const [imgTwo, setImgTwo] = useState(img1)

    const changeImage=()=>{
        setImgOne(imgArrays1[Math.floor(Math.random()*6)])
      
}
const changeImage2=()=>{
    setImgTwo(imgArrays1[Math.floor(Math.random()*6)])
  
}
  return (
    <div>
      <img src={imgOne} alt="" onClick={()=>changeImage()}/>
      <img src={imgTwo} alt="" onClick={()=>changeImage2()}/>

    </div>
  )
}

export default Dice
