import React from 'react'
import SideBar from './subs/SideBar'
import styled from 'styled-components'
import Card from './subs/Card'

const Container = styled.div`
${'' /* border:1px solid #fff; */}
height: 100%;
display: flex;
justify-content: space-between;`

const CardArray = styled.div`
display: flex;
margin: 0 auto;
border:1px solid #fff;
padding: 1rem;`

const SideContain = styled.div`
border:1px solid #fff;
display: flex;
flex-direction: column;
height: 100vh;
`


const Home = () => {
    return (
        <Container>
            <SideContain>
                <SideBar />
            </SideContain>

            <CardArray>
                <Card />
            </CardArray>
        </Container>
    )
}

export default Home