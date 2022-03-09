import styled, { css } from 'styled-components';

export default function Button({ children, onClick, isDark }) {
  return (
    <StyledButton onClick={onClick} isDark={isDark}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  padding: 5px;
  text-align: center;
  background-color: rgb(211, 211, 211);
  border: 1px solid rgb(0, 0, 0);

  ${({ isDark }) =>
    isDark &&
    css`
      background-color: rgb(51, 51, 51);
      color: rgb(255, 255, 255);
    `}
`;
