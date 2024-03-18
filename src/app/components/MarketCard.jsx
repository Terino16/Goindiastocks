import React from 'react'

const MarketCard = ({market}) => {
  return (
<div className="max-w-[500px] bg-white border border-gray-200 rounded-lg shadow  text-lg text-black ">
    <a href="#">
        <img className="rounded-t-lg" src="/sunset.jpeg" alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-xl font-bold tracking-tight ">{market.heading}</h5>
        </a>
        <p className="mb-3 font-normal ">{market.description}</p>
       
    </div>
</div>


  )
}

export default MarketCard