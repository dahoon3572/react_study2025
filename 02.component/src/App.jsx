
import './App.css'
import BattleNumber from './components/BattleNumber'
import Count from './components/Count'
import LikeCount from './components/LikeCount'
import LikeCount2 from './components/LikeCount2'
import MemberInfo from './components/MemberInfo'
import Menubox from './components/Menubox'


function App() {
  /*
   1.Component(컴포넌트)
   - UI를 표현하는 최소 단위
   - 컴포넌트를 만들 때 파일명은 반드시 첫글자를 대문자로 정의

   2.props(프로퍼티)
    - 리액트는 상위에서 하위로 데이터를 전달하는 방식(단방향)
    - 값을 전달하는 방식은 객체({key:value})로 전달
      ex) <MenuNm menuNm={"아메리카노"} price={2500}/>
        ㄴ> {"MenuNm":"아메리카노", "price":"2500"} 형태로 생성한 후 하위 컴포넌트로 전달
    - 상위 컴포넌트로부터 전달받은 값을 담고 있는 객체
  */

  return (
    <>
      {/* <div>
        <h1>아메리카노</h1>
        <p>2000</p>
      </div> */}
       {/* <div>
        <h1>카페라떼</h1>
        <p>3500</p>
      </div>
       <div>
        <h1>콜드브루</h1>
        <p>2500</p>
      </div> */}
      {/* <Menubox menuNm={"아메리카노"} price={2500}/>
      <Menubox menuNm={"카페라떼"} price={3500}/>
      <Menubox menuNm={"코드블루"} price={3000}/>
      <Menubox/>
      <Menubox/> */}
{/* <div className='container'>
    <MemberInfo team={"기아"} pNm={"강병우"}/>
    <MemberInfo team={"한화"} pNm={"류현진"}/>
    <MemberInfo team={"삼성"} pNm={"원태인"}/>
    <MemberInfo team={"쓰윽"} pNm={"김광현"}/>
 
</div> */}
   
   {/* stare 실습 */}
  {/* <Count/> */}

  {/* stare 실습2 */}
  {/* <LikeCount/> */}

   {/* stare 실습3 */}
   {/* <LikeCount2/> */}
  
   {/* stare 실습3 */}
  <BattleNumber/>
    </>
  )
}

export default App
