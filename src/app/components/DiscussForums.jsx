import React from 'react'
import DiscussCard from './DiscussCard'
import userData from '../../../public/data'
const DiscussForums = () => {
  return (
    <div className='z-0'>
      <h1>Discuss Forums</h1>
      {userData.map((user)=>{
        return(<DiscussCard key={user.id} user={user}/>)
      })}
      </div>
  )
}

export default DiscussForums