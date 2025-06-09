
import 'bootstrap/dist/css/bootstrap.min.css' // import도 순서에 영향이 있다. 
import './App.css'
import MapArrayExam from './componennts/MapArrayExam'
import MapObjectExam from './componennts/MapObjectExam'
import MenuBoard from './componennts/MenuBoard'
import FilterExam from './componennts/FilterExam'

function App() {
  

  return (
    <>
     {/* map() 함수 실습 1 */}
     {/* <MapArrayExam/> */}

     {/* map() 함수 실습 2 */}
     {/* <MapObjectExam/> */}

     {/* filter() 함수 실습 */}
     {/* <FilterExam/> */}

     {/* 실습) 음료 메뉴 출력하기 */}
     <MenuBoard/>
    </>
  )
}

export default App
