import React from 'react'
import styled from "styled-components"
import Section from './Section'


function Home() {
  return (
    <Container>
      <Section
        title="Sculture"
        description = 'For the overwhelming minority'
        backgroundImg='dark pyramids.jpg'
        rightBtnText='Latest Episode'
        leftBtnText='Archives'
      />
      <Section
        title="Technology"
        description = ""
        backgroundImg='astro.jpg'
        rightBtnText='Updates'
        leftBtnText='Commentary'
      />
      <Section 
        title="Sports"
        description = ""
        backgroundImg='boxing dodge.jpg'
        rightBtnText='Podcasts'
        leftBtnText='Stats' 
      />
      <Section 
        title="Music"
        description = ""
        backgroundImg='piano hands.jpg'
        rightBtnText='Radar'
        leftBtnText='Playlists' 
      />
      <Section
        title="History"
        description = ""
        backgroundImg='dino.jpg'
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
