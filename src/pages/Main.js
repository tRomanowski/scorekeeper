import Button from '../components/Button';
import Input from '../components/Input';
import styled from 'styled-components';

export default function Main() {
  return (
    <StyledMain>
      <Input
        id='game-name'
        title='Name of game'
        placeholder='Twiglight Empire'
      />
      <Input
        id='players-name'
        title='Player names'
        placeholder='e.g. Jane Doe, John Doe'
      />
      <Button children='Create game' />
    </StyledMain>
  );
}

const StyledMain = styled.form`
  display: grid;
  max-width: 600px;
  margin: 20px 88px;
`;
