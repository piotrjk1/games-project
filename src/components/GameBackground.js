import styled from 'styled-components';
// Tworzymy tło, które zmienia kolor na podstawie poziomu trudności
const GameBackground = styled.div` 
background-color: ${({ difficulty }) => (difficulty === 'hard' ?
    '#FF6347' : '#4CAF50')}; 
height: 100vh; 
display: flex; 
justify-content: center; 
align-items: center; 
`;
export default GameBackground;