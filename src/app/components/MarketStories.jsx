import React from 'react'
import marketData from '../../../public/marketdata'
import MarketCard from './MarketCard'
const MarketStories = () => {
  return (
    <div className=''>MarketStories
   {marketData.map((market)=>{
        return(<MarketCard key={market.id} market={market}/>)
      })}
    </div>
  )
}

export default MarketStories