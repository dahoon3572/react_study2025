import React, { useState } from 'react'

// 실습) 숫자 맞추기
// 1. 버튼을 클릭했을 때, 랜덤한 숫자 생성하기(1~3)
    // -parseInt(Math.random() + 3)+1


// 2. 사용자가 누른 버튼의 값과 랜덤한 숫자 비교하기
//     - 정답인 경우 -> "정답입니다~"
//     - 틀린 경우 ->"땡~!"
//     * 누른 버튼의 값 가져오는 방법 -> event객체.target

const BattleNumber = () => {
    const [selectNum,setSelectNum] = useState(0) ;
    const [num,setNum] = useState(0);
    const [print,setPrint] = useState("");

    const handleClick = (event) => {
       const userNum = parseInt(event.target.innerText);
       const randomNum = parseInt(Math.random()*3)+1;
    

    setSelectNum(userNum);
    setNum(randomNum);
     if (userNum === randomNum) {
      setPrint("정답입니다~ ");
    } else {
      setPrint("땡~! ");
    }
}
  return (
    <div>
      <p>
        <button onClick={handleClick}>1</button>
        <button onClick={handleClick}>2</button>
        <button onClick={handleClick}>3</button>
      </p>
      <p>내가 입력한 숫자 : {selectNum} </p>
      <p>랜덤한 숫자 : {num} </p>
      <p>{print}</p>
    </div>
  )
}

export default BattleNumber
