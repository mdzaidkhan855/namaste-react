
import React, { useEffect, useState } from 'react'

const useOnlineStatus = () => {

    const [onlineStatus, setOnLineStatus] = useState(true);

    useEffect(()=>{
        addEventListener("offline",()=>{
            setOnLineStatus(false);
        })
        addEventListener("online",()=>{
            setOnLineStatus(true);
        })
    },[])
  
    return onlineStatus;
}

export default useOnlineStatus