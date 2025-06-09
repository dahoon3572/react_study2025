import React from 'react'
import menuData from '../assets/data/coffee_menu.json'
import MenuItem from './MenuItem';
import MenuNav from './MenuNav';
import { useState } from 'react';


const MenuBoard = () => {

    const [menus, setMenus] = useState(menuData);
   
    //메뉴버튼 클릭 시, 조건에 맞는 메뉴만 출력되는 기능구현 해보기
    //ex) '커피'클릭 -> 아메리카노 출력
    //    '디저트'클릭 -> 마카롱만 출력
    //    '전체'클릭 -> 모든 메뉴 출력
    const menuFilter = (cate) => {
      let res = menuData.filter((menuData)=>
        menuData.category===cate)
      setMenus(res);
      if(cate==="All"){
       setMenus(menuData);
      }
      
      
    }

    // console.log(menuData);

  return (
    <div className='menu-board'>
        <h1>메뉴판</h1>
        <MenuNav onFilter={menuFilter}/>
        
        <div className='menu-list'>
            {menus.map((menu, index)=>(
                <MenuItem key={index} info={menu}/>
            ))}
        </div>
    </div>
  )
}
document.getElementById
export default MenuBoard





