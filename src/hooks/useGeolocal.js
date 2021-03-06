import React, {useEffect} from 'react'


const useGeolocal = (address) => {

    const [position, setPosition] = React.useState({})
    const KEY = process.env.API_KEY;
    const API = `http://api.positionstack.com/v1/forward?access_key=${KEY}&query=${address}`

    useEffect(()=>{
      console.log('a')
      let isMounted = true

      async function getPosition (){
              try{
                const values = await fetch(API);
                const response = await values.json()
                console.log(response)
                if(isMounted){

                setPosition(response.data[0])
                console.log(position)
                }
    
              }catch (e){
                console.error(e)
              }
            }
            getPosition();
            return ()=>{
              isMounted = false
            }

    },[])

    return {position}

    // useEffect(async () => {
    //   const response = await axios(API);
    //   setMap(response.data.results[0].geometry.location);
    // }, []);
    // return map;
};

export default useGeolocal