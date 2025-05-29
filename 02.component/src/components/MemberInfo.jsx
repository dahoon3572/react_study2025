import React from 'react'

const MemberInfo = ({team,pNm}) => {
  return (
    <div className='team-info'>
      <h4>{team}</h4>
     
      <span>{pNm}</span>
    </div>
  )
}

export default MemberInfo
