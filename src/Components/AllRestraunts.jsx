import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import ImageCarousel from './Carousel'
import { API } from '../Utils/Constants'
import TopRestraunts from './TopRestraunts'
import Footer from './Footer'
import ResinCity from './ResinCity'
import ShimmerUI from './ShimmerUI'


const AllRestraunts = () => {

      const [apiData, setApiData] = useState()
      
  
      useEffect(() => {
          async function getData() {
              const res = await fetch(API)
              const data = await res.json()
              // console.log(data.data.cards[0].card.card.imageGridCards.info)
              setApiData(data)
            }
  
          getData()
      }, [])
  
  return (
    <div>
      <Navbar/>
      {
        apiData ? (
          <>
          <ImageCarousel data={apiData ? apiData.data.cards[0].card.card.imageGridCards.info : []}/>
      <hr className='w-[80vw] mx-auto mt-5 mb-10'/>
      <TopRestraunts data={apiData ? apiData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants : []} />
      <hr className='w-[80vw] mx-auto mt-5 mb-10'/>
      <ResinCity data={apiData ? apiData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants : []} />
      <hr className='w-[80vw] mx-auto mt-5 mb-10'/>
          </>
        ) : <ShimmerUI />
      }
      
      <Footer/>
    </div>
  )
}

export default AllRestraunts