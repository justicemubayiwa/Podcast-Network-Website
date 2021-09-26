import React from 'react'
import styled from 'styled-components'

function Section() {
  return (
    <Wrap>
      <ItemText>
        <h1>The Podcast</h1>
        <p>Listen on all platforms </p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>
            Latest Episode
          </LeftButton>
          <RightButton>
            Archives
          </RightButton>
        </ButtonGroup>
        <DownArrow src='/images/down-arrow.svg'/>
      </Buttons>
      
      

    </Wrap>
  )
}

export default Section

const Wrap = styled.div `
  width: 100vw;
  height: 100vh;
  background: red;
  background-image: url('./images/war.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  cursor: pointer;

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
  background-blend-mode: difference;
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
  margin: 20px;
`
const RightButton = styled(LeftButton)`

`
const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
  overflow-x: hidden;
`
const Buttons = styled.div`


`
