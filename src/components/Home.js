import React from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
  return (
    <Container>
      <Section
        title="TUF Podcast"
        description = "Listen on all platforms"
        backgroundImg='perfect sundown.jpg'
        rightBtnText='Latest Episode'
        leftBtnText='Archives'
      />
      <Section
        title="Technology"
        description = ""
        backgroundImg='yellow cassette.jpg'
        rightBtnText='Updates'
        leftBtnText='Commentary'
      />
      <Section 
        title="Sports"
        description = ""
        backgroundImg='open field soccer.jpg'
        rightBtnText='Podcasts'
        leftBtnText='Stats' 
      />
      <Section 
        title="Music"
        description = ""
        backgroundImg='black headset yellow background.jpg'
        rightBtnText='Radar'
        leftBtnText='Playlists' 
      />
      <Section
        title="History"
        description = ""
        backgroundImg='war.jpg'
        leftBtnText='Library'
      />
      
    </Container>
  )
}

export default Home

const Container = styled.div `
  height: 100vh;
`
