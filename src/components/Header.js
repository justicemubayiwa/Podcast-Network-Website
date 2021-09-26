import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';

function Header() {
  return (
    <Container>
      <a>
        <img id="logo" src='/images/sculture white transparent.png'/>
      </a>
      <Menu>
        <a href="#">Home</a>
        <a href="#">Tech</a>
        <a href="#">Sports</a>
        <a href="#">Music</a>
        <a href="#">News</a>

      </Menu>
      <RightMenu>
        <a href="#">Podcasts</a>
        <a href="#">Blog</a>
        <a href="#">Account</a>
        <CustomMenu />
      </RightMenu>
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: no - wrap;
  }

  @media(max-width: 768px){
    display: none;
  }
`
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    padding-right: 6px;
    flex-wrap: no - wrap;
  }
`

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`

