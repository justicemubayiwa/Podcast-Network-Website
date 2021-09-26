import React from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
  return (
    <Container>
      <Section
        title="TUF Podcast"
        description = "Listen on all platforms"
        backgroundImg='war.jpg'
        rightBtnText='Archives'
        leftBtnText='Latest Episode'
        />
      <Section />
      <Section />
      <Section />
      <Section />
    </Container>
  )
}

export default Home

const Container = styled.div `
  height: 100vh;
`
