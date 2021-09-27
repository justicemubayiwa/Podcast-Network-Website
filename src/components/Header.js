import React, {useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
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
        <CustomMenu onClick={()=>setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWraper>
          <CustomClose onClick={()=>setBurgerStatus(false)} />
        </CloseWraper>
        <li><a href ="#">Store</a></li>
        <li><a href ="#">Calender</a></li>
        <li><a href ="#">Reading List</a></li>
        <li><a href ="#">Network</a></li>
        <li><a href ="#">Local</a></li>
        <li><a href ="#">Archive</a></li>
        <li><a href ="#">Rankings</a></li>
        <li><a href ="#">Contributors</a></li>
        <li><a href ="#">Chat</a></li>
        <li><a href ="#">Contact</a></li>
        
      </BurgerNav>
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
  z-index: 1;
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
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.95);
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  diplay: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
  transition: transform 0.3s ease-in; 
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(250, 250, 250, 0.2)
  }

    a {
      font-weight: 900;
    }
  }
  
`
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`
const CloseWraper = styled.div`
  display: flex;
  justify-content: flex-end;
`