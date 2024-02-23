import React from 'react'

const ItemList = ({items}) => {
    console.log("ITEMS :"  +items);
  return (
    <div>
        
            {items.map(item=>{
                return(
                    <div key={item.card.info.id} className='p-2 m-2 border-grey-200 border-b-2 text-left'>
                            <div className='p-2'>
                                <span>{item.card.info.name}</span>
                                <span> - ₹ {item.card.info.price}</span>
                            </div>
                            <p className='text-xs'>{item.card.info.description}</p>
                    </div>
                )
            })}
        
    </div>
  )
}

export default ItemList