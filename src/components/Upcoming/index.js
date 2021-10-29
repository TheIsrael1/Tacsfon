import React, {useState, useEffect} from 'react'
import {UpcomingContainer, UpcomingH1, UpcomingWrapper, TimeLine} from './UpcomingElements'
import FeedItem from '../../Utils/FeedItem';
import axios from 'axios'




const Upcoming = () => {

   const [item, setItem] = useState([])
   
   useEffect(()=>{
    axios.get(
      `https://tacsfonui.org/api/events`,  {
        headers: {
          'Accept': 'application/json',
        }
      } 
      ).then(res=> {
        var response = res.data.toString().match(/{(.*)}/g)[0]
        response = JSON.parse(response)
        console.log("response", response)
        const item = response.payload.table_data;
        setItem(item);
        }
    ).catch(err =>{
        alert('error with server, click ok reload.')
        window.location.reload(); 
    })
  }, [])

    return (
        <>
        <UpcomingContainer id="services">
            <UpcomingH1>Announcements</UpcomingH1>
            <UpcomingWrapper>
                <TimeLine>

                   {item && item.map((i, idx)=>(
                        <FeedItem 
                        key={idx}
                        title={i.title}
                        description={i.description}
                        date={i.start}
                        />
    
                   ))

                   }
                </TimeLine>
            </UpcomingWrapper>
        </UpcomingContainer>
        </>
    )
}

export default Upcoming
