import React, { useState } from 'react'

const LikeCount = () => {
    const [num,setNum] = useState(0);
    const [emoji,setEmoji] = useState("💋");

    const handleClick = () => {
       if(emoji ==="👉"){
        setEmoji("👌");
        setNum(num +1)
       }else{
        setEmoji("👉");
        setNum(num -1)
       }
    }
  return (
    <div>
        {/* style = {{width:300, height:250}} */}
        <img src={"src/assets/img/정성우.jpg"} alt={"정승우 리즈"}
          width={300}/>
          <p>{<span onClick={handleClick}>{emoji}</span>}좋아요{num}개</p>
          
    </div>
  )
}

export default LikeCount
