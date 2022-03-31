import React, {useEffect} from 'react'
import axios, { Axios } from 'axios'

const useGeolocal = (address) => {

    const [position, setPosition] = React.useState([])
    // const API = `http://api.positionstack.com/v1/forward?access_key=0da933893b180b718b09ed48f168ee14&query=${address}`

    useEffect(()=>{
      console.log('a')
      fetch(`http://api.positionstack.com/v1/forward?access_key=0da933893b180b718b09ed48f168ee14&query=${address}`)
        .then(response => response.json())
        .then(data => setPosition(data.data[0]))

        console.log(position)
    },[])

    // useEffect(async ()=>{
    //     // async function getPosition (){
    //     //   try{
    //     //     const values = await axios(`http://api.positionstack.com/v1/forward?access_key=0da933893b180b718b09ed48f168ee14&query=maracaibo`);
            

    //     //     setPosition(values.data);

    //     //   }catch (e){
    //     //     console.error(e)
    //     //   }
    //     // }
    //     // getPosition();
    //     const response = await axios(`http://api.positionstack.com/v1/forward?access_key=0da933893b180b718b09ed48f168ee14&query=maracaibo`)
    //     setPosition(response.data[0])
    //   },[])
  

    debugger
    return {position};
}

export default useGeolocal