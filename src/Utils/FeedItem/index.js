import React from 'react'
import {Event, H1 } from './FeedElements'

const FeedItem = ({title, description, date}) => {
    return (
        <>
        <Event data-date={date}>
            <H1>
                {title}
            </H1>
            <p>
                {description}
            </p>
        </Event>
            
        </>
    )
}

export default FeedItem

