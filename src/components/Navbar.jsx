import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import BurguerButton from './BurguerButton'

function Navbar() {

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(!clicked)
  }
  
  useEffect(() => {
    const handleResize = () => {
      if (clicked && window.innerWidth >= 768) {
        setClicked(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [clicked]);

  return (
    <>
        <NavbarContainer>
            <h2><span>Mi empresa</span></h2>
            <div className={`links ${clicked ? 'active' : ''}`}>
                <a onClick={handleClick} href="#otherpage">Home</a>
                <a onClick={handleClick} href="#otherpage">Shop</a>
                <a onClick={handleClick} href="#otherpage">About us</a>
                <a onClick={handleClick} href="#otherpage">Contact</a>
                <a onClick={handleClick} href="#otherpage">Blog</a>
            </div>
            <div className='burguer'>
                <BurguerButton clicked={clicked} handleClick={handleClick}/>
            </div>
            <BgDiv className={`initial ${clicked ? 'active' : ''}`}></BgDiv>
        </NavbarContainer>
    </>
  )
}

export default Navbar

const NavbarContainer = styled.nav`
    padding: .4rem;
    background: rgb(2,0,36);
    backdrop-filter: blur(1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    h2{
        color: white;
        font-weight: 400;
        span{
            font-weight: bold;
        }
    }
    
    a{
        color: white;
        text-decoration: none;
        margin-right: 1rem;
    }
    
    .links{
        position: absolute;
        top: 0;
        left: -2000px;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        transition: all .5s ease;
        a{
            color: white;
            font-size: 2rem;
            display: block;
        }
        @media(min-width: 768px){
            position: initial;
            margin: 0;
            a{
                font-size: 1rem;
                color: white;
                display: inline; 
            }
        }
    }

    .links.active{
        width: 100%;
        display: block;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        top: 30%;
        left: 0;
        right: 0;
        text-align: center;
        a{
            font-size: 2rem;
            margin-top: 1rem;
            color: white;
        }
    }

    .burguer{
        @media(min-width: 768px){
            display: none;
        }
    }
`

const BgDiv = styled.div`
    background: rgb(2,0,36);
    background: linear-gradient(160deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
    position: absolute;
    top: 0;
    left: -2000px;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: all .6s ease;
    
    &.active{
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`