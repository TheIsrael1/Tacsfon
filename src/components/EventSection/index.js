import React, { useState, useEffect }  from 'react'
import EventCard from '../../Utils/EventCard'
import { Container, Wrapper, Row, Column1, Column2, Animation, List, ListItem } from './EventSectionElements';
import axios from 'axios'


const EventSection = () => {

    const [events, setEvents] = useState([])

    useEffect(()=>{
        axios.get(
          `https://api.hebbnet.com/api/events`,  {
            headers: {
              'Accept': 'application/json',
            }
          } 
          ).then(res=> {
            // var response = res.data.toString().match(/{(.*)}/g)[0]
            // response = JSON.parse(response)
            // console.log("response", response)
            const events = res.data.payload.table_data;
            setEvents(events);
            }
        ).catch(err =>{
            // alert('error with server, click ok reload.')
            // window.location.reload(); 
            console.log("error", err)
        })
      }, [])
  

    return (
        <>
        <Container>
        <Wrapper>
        <Row>
        <Column1>

        { events && events.map((event, idx) =>(
            <EventCard 
            key={idx}
            title={event.title}
            description={event.description} 
            time={event.start}
            poster={event.events_path}
           />
        ))    
        }
        </Column1>

        <Column2>
        <Animation class="box">
        <List>
            <ListItem className="item-1">Join Us</ListItem>
            <ListItem className="item-2">TODAY!</ListItem>
            <ListItem className="item-3">@Tacsfon UI</ListItem>
        </List>  
        </Animation>
        </Column2>

        </Row>
        </Wrapper>
        </Container>
        </>
    )
}

export default EventSection
