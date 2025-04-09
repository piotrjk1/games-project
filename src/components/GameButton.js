import React from 'react';
import styled from 'styled-components';

const Button = styled.button` 
background-color: #4191c7; 
border: none; 
color: white; 
padding: 15px 32px; 
text-align: center; 
text-decoration: none; 
display: inline-block; 
font-size: 16px; 
margin: 4px 2px; 
cursor: pointer; 
border-radius: 12px; 
transition: background-color 0.3s ease; 
&:hover { 
background-color: #1073c4; 
} 
`;
const GameButton = ({ onClick, children }) => {
    return <Button onClick={onClick}>{children}</Button>;
};
export default GameButton;