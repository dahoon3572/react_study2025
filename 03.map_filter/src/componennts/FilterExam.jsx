import React from 'react'

const FilterExam = () => {

    let numbers = [1,2,3,4,5,6,7,8,9,10];
    let result = numbers.filter((number)=> number%2===1);
    
    let members = [
        {id:1, name:'박수현', age:25, gender:'W'},
        {id:2, name:'류이수', age:30, gender:'M'},
        {id:3, name:'임명진', age:35, gender:'W'},
        
    ]
    let resultMembers = members.filter((member)=>member.age >=30);

  return (
    <div>
        {result.map((number)=>(
            <div>{number}</div>
        ))}
        <hr />
        {resultMembers.map((member)=>(
            <div key={member.id}>{member.name}</div>
        ))}
    </div>
  )
}

export default FilterExam