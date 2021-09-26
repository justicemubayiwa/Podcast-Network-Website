import React from 'react'
import styled from 'styled-components'

function Section() {
  return (
    <Wrap>
      <ItemText>
        <h1>The Podcast</h1>
        <p>Listen on all platforms </p>
      </ItemText>
      <ButtonGroup>
        <LeftButton>
          Latest Episode
        </LeftButton>
        <RightButton>
          Archives
        </RightButton>
      </ButtonGroup>

    </Wrap>
  )
}

export default Section

const Wrap = styled.div `
  width: 100vw;
  height: 100vh;
  background: red;
  background-image: url('./images/mountains brown trees.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`
const ButtonGroup = styled.div`
  display: flex;
`
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
`
const RightButton = styled(LeftButton)`

`