import React from 'react'

// const Menubox = (props) => {
//   console.log("App컴포넌트에서 전달받은 값 :",props);
//   return (
//     <div>
//         <h1>{props.menuNm}</h1>
//         <p>{props.price}</p>
//       </div>
//   )
// }

//구조분해할당
// {"props" :{"munuNm":"아메리카노","price":2500}}
// const {menuNm,price} = props;

const Menubox = ({menuNm,price}) => {
  
  return (
    <div>
        <h1>{menuNm}</h1><br />
        <p>{price}</p>
      </div>
  )
}

export default Menubox
