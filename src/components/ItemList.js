import React from 'react'
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

const ItemList = ({items}) => {
    //console.log("ITEMS :"  +items);

    const dispatch = useDispatch();

    const handleAddItem = (item)=>{
      console.log("ITEMS :" , item);
      dispatch(addItem(item))
    }
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
                            <button type="button" onClick={()=>handleAddItem(item)}
                            >Add+
                            </button>
                    </div>
                )
            })}
        
    </div>
  )
}

export default ItemList