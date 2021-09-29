import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

function Section({title,description,leftBtnText,rightBtnText, backgroundImg}) {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade top >
        <ItemText>
          <h1 id={title}>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Buttons>
      <Fade top >
        <ButtonGroup>
          <LeftButton>
            {leftBtnText}
          </LeftButton>
          {rightBtnText && 
            <RightButton>
          {rightBtnText}
          </RightButton>
          }
        </ButtonGroup>
      </Fade>
        <DownArrow src='/images/down-arrow.svg'/>
      </Buttons>
      
      

    </Wrap>
  )
}

export default Section

const Wrap = styled.div `
  z-index: 10;
  width: 100vw;
  height: 100vh;
  background: red;
  background-image: url('images/perfect sundown.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  background-image: ${props => `url("/images/${props.bgImage}")`}

`


const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  position: relative;
  z-index: 2; 
`

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px){
    flex-direction: column;
  }
`
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: #E0B115;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.75;
  text-transform: uppercase;
  font-size: 16px;
  font-weight; bold;
  letter-spacing: 5px;
  margin: 20px;
  cursor: pointer;

`
const RightButton = styled(LeftButton)`
background-color: #E0B115;
opacity: 0.9;
color: black;


`
const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
  overflow-x: hidden;
`
const Buttons = styled.div`


`
