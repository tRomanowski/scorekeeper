import styled from 'styled-components';

export default function Input({ id, title, placeholder }) {
  return (
    <Wrapper>
      <label htmlFor={id} placeholder={placeholder}>
        {title}
      </label>
      <input type='text' id={id} placeholder={placeholder}></input>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;
