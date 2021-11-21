import React from 'react'
import { Card, Image, Article, Header, Name, Bio , Span } from './ProfileCardElements';
import profile from './Profile.png'


const ProfileCard = ({post, name, bio, dob}) => {
    return (
        <>
            <Card href="">
            <Header >{post}</Header>
            <Image 
            style={{
                backgroundImage: `url(${profile})`
                //  "url(https://images.unsplash.com/photo-1573497491765-dccce02b29df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80)"
            }}
            >
            </Image>
            <Article>
                <Name>{name}</Name>
                <Bio> {bio}</Bio>
                < Span>Dob: {dob}</Span>          
            </Article>  
            </Card>
        
        </>
    )
}

export default ProfileCard

