import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
color:white;
border:1px solid white;
display: flex;
flex-direction: column;
text-align:center;
padding: 1rem;`

const CardBody = styled.div``
const CardTitle = styled.h5`
color: white;`
const CardText = styled.p``


const Card = () => {
  return (
    <CardContainer>
        <CardBody>
            <CardTitle>Card Title</CardTitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        </CardBody>
    </CardContainer>
  )
}

export default Card