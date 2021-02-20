import React, { useEffect, useState } from 'react'
import Icon1 from '../../assets/images/svg2.svg'
import Icon2 from '../../assets/images/svg1.svg'
import Icon3 from '../../assets/images/svg3.svg'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements'

const Services = () => {
  const [scrollNav, setScrollNav] = useState(false)
    const changeNav = () => {
        if(window.scrollY >= 2400) {
        setScrollNav(true)
        } else {
        setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

  return (
    <ServicesContainer id='services'>
      <ServicesH1>Serviços</ServicesH1>
      <ServicesWrapper>
        <ServicesCard style={{opacity: scrollNav ? 1 : 0}}>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Arquitetura</ServicesH2>
          <ServicesP>Projetos modernos feitos com muita pesquisa e comunicação</ServicesP>
        </ServicesCard>
        <ServicesCard style={{opacity: scrollNav ? 1 : 0}}>
        <ServicesIcon src={Icon2}/>
          <ServicesH2>Design de Interiores</ServicesH2>
          <ServicesP>Sua casa com o estilo e com a elegância próprios de você</ServicesP>
        </ServicesCard>
        <ServicesCard style={{opacity: scrollNav ? 1 : 0}}>
          <ServicesIcon src={Icon3}/>
          <ServicesH2>Consultoria</ServicesH2>
          <ServicesP>Soluções inteligentes e atuais para os seus problemas</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
