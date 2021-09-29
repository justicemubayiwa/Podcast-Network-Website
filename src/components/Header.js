import React, {useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import channelSlice, { selectChannels } from '../features/channel/channelSlice'
import { useSelector } from 'react-redux'

function Header() {
  const [burgerStatus, setBurgerStatus] = useState
  (false);
  const channels = useSelector(selectChannels)
  console.log(channels)
  return (
    <Container>
      <a>
        <img id="logo" src='/images/sculture white transparent.png'/>
      </a>
      <Menu>
        {channels && channels.map((channel, index)=>(<a key={index} href={`#${channel}`}>{channel}</a>))}

      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Blog</a>
        <a href="#">Account</a>
        <CustomMenu onClick={()=>setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWraper>
          <CustomClose onClick={()=>setBurgerStatus(false)} />
        </CloseWraper>
        {channels && channels.map((channel, index)=>(<li key={index}><a href={`#${channel}`}>{channel}</a></li>))}
        <li><a href ="#">Store</a></li>
        <li><a href ="#">Calender</a></li>
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
  letter-spacing: 5px;
  background-color: rgba(0,0,0, 0.2)
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  
  a {
    font-weight: 600;
    font-size: 18px;
    text-transform: uppercase;
    padding: 0 20px;
    flex-wrap: no - wrap;
  }

  a:hover {
    cursor: pointer;
    color: #E0B115;
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
    cursor: pointer;
  }
  a:hover {
    color: #E0B115;
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
  a:hover {
    color: #E0B115;
  }

    a {
      font-weight: 900;
      cursor: pointer;
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