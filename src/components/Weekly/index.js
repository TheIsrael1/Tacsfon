import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import Icon4 from '../../images/svg-4.svg'
import Icon5 from '../../images/svg-5.svg'
import {WeeklyContainer, WeeklyH1, WeeklyWrapper, WeeklyCard,
WeeklyIcon, WeeklyH2, WeeklyP} from './WeeklyElements'

const Weekly = () => {
    return (
        <WeeklyContainer id="services">
            <WeeklyH1>Our Weekly Meetings</WeeklyH1>
            <WeeklyWrapper>
                <WeeklyCard>
                    <WeeklyIcon src={Icon3} />
                    <WeeklyH2>Sunday Service</WeeklyH2>
                    <WeeklyP> Join us @9am us every sunday for our devotional service </WeeklyP>
                </WeeklyCard>
                <WeeklyCard>
                    <WeeklyIcon src={Icon2} />
                    <WeeklyH2> Tacsfon Freshers Forum </WeeklyH2>
                    <WeeklyP> Happening every teusday @5pm, an avenue for freshers to come together and fellowship</WeeklyP>
                </WeeklyCard>
                <WeeklyCard>
                    <WeeklyIcon src={Icon1} />
                    <WeeklyH2>Thursday Service</WeeklyH2>
                    <WeeklyP> This is our mid-week service, promises to be packed with worship, word and prayer</WeeklyP>
                </WeeklyCard>
            </WeeklyWrapper>
        </WeeklyContainer>
    )
}

export default Weekly
