import React, {useState, useEffect} from 'react';
import Axios from 'axios';



 const GetImages = () =>{
    const [image, setImage] = useState([]);

    useEffect(()=>{
    
        Axios.get(
            "https://tacsfonui.org/api/gallery"
        ).then((res)=>{
            console.log(res)
        })
    },[])


}    

export default GetImages
