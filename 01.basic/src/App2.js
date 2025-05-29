import React from 'react'

const App2 = () => {
    let name = prompt("너의 이름은?");
    let today =new Date();
    let month = today.getMonth()+1;
    let season = '';
    
  if(3<=month <=5){
    season="봄.."
  }else if(6<=month <=8){
    season="여름.."

  }else if(9<=month <=11){
    season=" 가을.."

  }else{
    season="겨울.."
    
  }
    
    console.log(today.toLocaleDateString());
    console.log(today.getMonth()+1);

  return (  // 화면에 출력되는 칸
    
    <div>
        <h1>{today.toLocaleDateString()}</h1>
        <hr/>
    <p>{name}님 안녕하세요~ 오늘은 {season}입니다~ 행복한 하루 되세요~</p>
    </div>
  )
}

export default App2
