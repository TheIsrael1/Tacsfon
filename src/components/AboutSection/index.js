import React, { Component } from 'react'
import {Button} from  '../ButtonElements'
import logo5 from '../../images/svg-5.svg';

import { 
    AboutContainer, 
    AboutWrapper, 
    AboutRow, 
    Column1, 
    Column2, 
    TextWrapper, 
    TopLine, 
    Heading, 
    Subtext, 
    ImgWrap, 
    Img,
    ListItem,
    UList
    
 } from './AboutElements';


const AboutSection = () =>{

        return(
            <>
            <AboutContainer lightBg={false}>
                <AboutWrapper>
                    <AboutRow>
                        <Column1>
                        <Heading lightText={true} >About Us</Heading>
                         <TopLine>House of Refuge</TopLine>
                         <Subtext darkText={false} >The fellowship stared as an independent fellowship called The Apostolic Church Student Association, TACSA in 1964 in The University of Ibadan being the first of its kind in all institutions of all higher learning.
                                                    To God be the glory, on the 10th and 11th of December 1977, a gospel rally held in university of Lagos, other institutions of higher learning including TACSA UI were invited and this led to the 25th February, 1978 inauguration of THE APOSTOLIC CHURCH STUDENT FELLOWSHIP OF NIGERIA (TACSFON) [see the story of God's faithfulness by presiding elder J. Olu. Akinsanya. Pages 1-10]
                                                    Thus, from 1987 till date TACSFON UI has been in existence. TACSFON UI is a place where men are made, formed and built from lively stones before taken to build lively stones.
                                                    The watchword of the fellowship is 1tim 4:12; let no man despise your youth but be thou an example of the believers, in word, in conversation, in charity in spirit, in faith, in purity.
                                                    The fellowship also reckons with the name "HOUSEHOLD OF REFUGE"

                         </Subtext>
                        </Column1>
                        <Column2>
                        <ImgWrap>
                         <Img src={logo5} alt={"img"}/>
                        </ImgWrap>   
                        </Column2>
                    </AboutRow>
                </AboutWrapper>
            </AboutContainer>
            <AboutContainer lightBg={true}>
                <AboutWrapper>
                    <AboutRow >
                    <Column1>
                        <Heading lightText={false} >What we Teach</Heading>
                         <TopLine>let no man despise thy youth</TopLine>
                            <UList darkText={true}>
                                <ListItem>To reach out to the lost youth, especially of The Apostolic Church that are within and outside the church.</ListItem>
                                <ListItem>To rea ch out to the lost youth, especially of The Apostolic Church that are within and outside the church.</ListItem>
                                <ListItem>To reach out to the lost youth, especially of The Apostolic Church that are within and outside the church.</ListItem>
                                <ListItem>To reach out to the lost youth, especially of The Apostolic Church that are within and outside the church.</ListItem>
                                <ListItem>To reach out to the lost youth, especially of The Apostolic Church that are within and outside the church.</ListItem>
                                <ListItem>To reach out to the lost youth, especially of The Apostolic Church that are within and outside the church.</ListItem>
                                <ListItem>To reach out to the lost youth, especially of The Apostolic Church that are within and outside the church.</ListItem>
                                

                            </UList>
                        </Column1>
                        <Column2 >
                        <Heading lightText={false}>Our Units</Heading>
                         <TopLine>List of units in the fellowship</TopLine>
                         <UList darkText={true} >
                         <ListItem>BROTHERS ARM</ListItem>
                         <ListItem>SISTERS ARM</ListItem>
                         <ListItem>TACSFON FRESHERS FORUM [TFF]</ListItem>
                         <ListItem>ACADEMIC UNIT</ListItem>
                         <ListItem>PRAYER/INTERCESSORY UNIT</ListItem>
                         <ListItem>EDITORIAL UNIT</ListItem>
                         <ListItem>EVANGELISM UNIT</ListItem>
                         <ListItem>VISITATION AND FOLLOW-UP UNIT</ListItem>
                         <ListItem>TECHNICAL UNIT</ListItem>
                         <ListItem>LIBRARY UNIT</ListItem>
                         <ListItem>MEDIA AND PUBLICITY UNIT</ListItem>
                         <ListItem>TRANSPORT AND LOGISTICS UNITT</ListItem>
                         <ListItem>WELFARE UNIT</ListItem>

                        </UList>
                        </Column2>
                    </AboutRow>
                </AboutWrapper>
            </AboutContainer>
            <AboutContainer lightBg={false}>
                <AboutWrapper>
                    <AboutRow >
                    <Column1>
                        <Heading lightText={true} >Vision and Mission</Heading>
                         <TopLine>let no man despise thy youth</TopLine>
                            <UList darkText={false}>
                                <ListItem>To reach out to the lost youth, especially of The Apostolic Church that are within and outside the church.</ListItem>
                                <ListItem>To rea ch out to the lost youth, especially of The Apostolic Church that are within and outside the church.</ListItem>
                                <ListItem>To reach out to the lost youth, especially of The Apostolic Church that are within and outside the church.</ListItem>
                                <ListItem>To reach out to the lost youth, especially of The Apostolic Church that are within and outside the church.</ListItem>
                                <ListItem>To reach out to the lost youth, especially of The Apostolic Church that are within and outside the church.</ListItem>
                                <ListItem>To reach out to the lost youth, especially of The Apostolic Church that are within and outside the church.</ListItem>
                                <ListItem>To reach out to the lost youth, especially of The Apostolic Church that are within and outside the church.</ListItem>
                                

                            </UList>
                        </Column1>
                    </AboutRow>
                </AboutWrapper>
            </AboutContainer>
            
            </>
        )
}

export default AboutSection;
