import styled from "styled-components"

import {Link} from 'react-router-dom'

export const Button = styled(Link)`
 border-radius: 5px;
 background: ${({primary}) => (primary? '#01BF71' : '#010606')};
 wite-space: no-wrap;
 padding: ${({big}) => (big ? '5px 18px' : '5px 16px')};
 color: ${({dark}) => (dark ? '#010606' : '#fff')};
 font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
 outline: none;
 border: none;
 text-decoration: none;
 cursor: pointer;
 display: flex;
 justify-content: center;
 align-items: center;
 margin-right: 5px;
 transition: all 0.2s ease-in-out;
 
 &:hover{
  transition: all 0.2s ease-in-out;
  background: ${({primary}) => (primary ? '#fff' : '#01BF71')};
 }
`