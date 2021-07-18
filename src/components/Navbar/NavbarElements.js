import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

export const Nav = styled.nav`
    background: #FFFFFF;
    height: 110px;
    display: flex;
    justify-content: space-between;
    padding: 30px;
    z-index: 10;
    box-shadow: 0 5px 2px -2px rgba(0,0,0,.2);
`

export const NavLink = styled(Link)`
    color: #000000;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%
    cursor: pointer;

    &.active {
        color: #15cdfc;
    }
`

export const Bars = styled(FaBars)`
    display: none;
    color: #fff;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`
export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnkLink = styled(Link)`
    border-radius: 10px;
    background: #ffffff;
    padding: 8px 22px;
    color: #FF477E;
    border: 1px solid #FF477E;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-on-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #ff8aae;
        color: #010606;
    }
`;

export const NavBtnkLink1 = styled(Link)`
    border-radius: 10px;
    background: #FF477E;
    padding: 8px 22px;
    color: #fff;
    border: 1px solid #FF477E;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-on-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #ff8aae;
        color: #010606;
    }
`;