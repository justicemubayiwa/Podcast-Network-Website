import React from 'react'
import styled from "styled-components"
import Section from './Section'


function Home() {
  return (
    <Container>
      <Section
        title="Sculture"
        description = 'Spark New Inspirations.'
        backgroundImg='turtle.jpg'
        rightBtnText='Latest Episode'
        leftBtnText='Archives'
      />
      <Section
        title="Technology"
        description = ""
        backgroundImg='rover.jpg'
        rightBtnText='Updates'
        leftBtnText='Commentary'
      />
      <Section 
        title="Sports"
        description = ""
        backgroundImg='fence.jpg'
        rightBtnText='Podcasts'
        leftBtnText='Stats' 
      />
      <Section 
        title="Music"
        description = ""
        backgroundImg='chip.jpg'
        rightBtnText='Radar'
        leftBtnText='Playlists' 
      />
      <Section
        title="Politics"
        description = ""
        backgroundImg='fall.jpg'
        leftBtnText='Library'
      />
      
    </Container>
  )
}

export default Home

const Container = styled.div `
  height: 100vh;
  cursor: auto;
`
