import React, { useState } from 'react'
import ItemList from './ItemList'

const RestaurantCategory = ({data,showItems,setShowIndex}) => {
  
  /**
   * The lines commented as this component is controlled component
   * showItems flag now being passed as props from parent:RestaurantMenu
   */
   //const [showItems, setShowItems] = useState(false);
  // const handleClick = ()=>{
  //   setShowItems(!showItems);
  // }

  const handleClick = ()=>{
      
      setShowIndex();
      //setShowItems(!showItems);
    }

  return (
    <div>
      <div className='w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 '>
        <div className='flex justify-between cursor-pointer' onClick={handleClick}>
          <span className='font-bold'>{data.title} - ({data.itemCards.length})</span>
          <span> ⬇  </span>
        </div>
        
        {showItems && <ItemList items={data.itemCards}/>}
      </div>
      
    </div>
  )
}

export default RestaurantCategory