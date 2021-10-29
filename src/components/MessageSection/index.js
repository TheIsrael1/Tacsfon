import React from 'react'
import ProfileCard from '../../Utils/ProfileCard'
import {MessageContainer, MessageWrapper, MessageRow, Column1, Column2, ImgWrap, Img, H1, Text, Name} from './MessageElements'
import img from '../../images/svg-5.svg'

const Message = () => {
    return (
        <>
            <MessageContainer lightBg={true}>
                <MessageWrapper>
                    <MessageRow>
                        <Column1>
                        <ImgWrap>
                         <Img src={img}/>
                        </ImgWrap>
                        </Column1>
                        <Column2>
                            <H1>Welcome to Tacsfon UI</H1>
                            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eaque consectetur eveniet vitae magnam natus! Doloremque eum molestiae cum eligendi nemo, saepe repellendus expedita quis explicabo dolorem repellat. Nesciunt, dolorum.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus non ipsum nisi, veritatis obcaecati commodi reiciendis mollitia, quibusdam ducimus incidunt aspernatur veniam dolor, perspiciatis tempore molestias! Inventore sapiente ab repellat!
                            </Text><br />
                            <Name>Bro Okpara Emmanuel, President Tacsfon UI</Name>
                        </Column2>
                    </MessageRow>
                </MessageWrapper>
            </MessageContainer>
        </>
    )
}

export default Message
