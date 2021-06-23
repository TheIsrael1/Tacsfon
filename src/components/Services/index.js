import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import Icon4 from '../../images/svg-4.svg'
import Icon5 from '../../images/svg-5.svg'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard,
ServicesIcon, ServicesH2,ServicesP} from './servicesElements'

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2> Reduce Expenses</ServicesH2>
                    <ServicesP> We help you reduece your fees and increase overall revenue</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2> Virtual Offfice </ServicesH2>
                    <ServicesP> You can reach us from anywhere in the world</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2> Premium Benefits</ServicesH2>
                    <ServicesP> Unlock our special packages one of which includes a 10% cash back </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
