import React from 'react'
import { Card, Poster, Article, Header, Text , Span } from './EventCardElements';

const baseUrl = `https://tacsfonui.org/`

const EventCard = ({title, description, time, poster}) => {
    return (
        <>
<Card href="#">
<Poster
style={{
    backgroundImage: `url(${poster ? baseUrl + poster : "https://images.unsplash.com/photo-1507692049790-de58290a4334?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"})`
}}
>   
</Poster>
<Article>
    <Header >{title}</Header>
    <Text> {description} </Text>
    <Span >{time}</Span>            
</Article>  
</Card>
        
        </>
    )
}

export default EventCard

