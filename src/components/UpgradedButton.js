import React from 'react';
import styled from 'styled-components';
// Tworzenie stylowanego przycisku, który zmienia kolor w zależności od props
const Button = styled.button` 
background-color: ${({ isGameOver }) => (isGameOver ? '#FF6347' :
    '#4191c7')}; 
border: none; 
color: white; 
padding: 15px 32px; 
text-align: center; 
text-decoration: none; 
display: inline-block; 
font-size: 16px; 
margin: 4px 2px; 
cursor: ${({ isGameOver }) => (isGameOver ? 'wait' : 'pointer')}; 
border-radius: 12px; 
transition: background-color 0.3s ease; 
&:hover { 
background-color: ${({ isGameOver }) => (isGameOver ? '#FF4500' :
    '#1073c4')}; 
} 
`;
const GameButton = ({ onClick, children, isGameOver }) => {
    return <Button onClick={onClick}
                   isGameOver={isGameOver}>{children}</Button>;
};
export default GameButton; 