import styled from 'styled-components';

export const AuthTitle = styled.h1`
    text-align: center;
    margin-bottom: 1em;
`;

export const AuthInput = styled.input`
  margin-bottom: 1.2em;
  padding: 0.5rem;
`;

export const AuthTypeChangeMessage = styled.p`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 3%;
    font-size: 16px;
`;

export const AuthSubmitButton = styled.button`
  font-size: 19px;
  padding: 0.5rem;
  background-color: #0b308c;
  color: #fff;
  font-weight: 500;
  border-radius: 20px;
  margin-bottom: 1.2em;
  &:disabled {
    background-color: #aeaeae;
  }
`;

export const AuthChangeButton = styled.button`
  background-color: transparent;
  padding: 0.3em;
  text-decoration: underline;
  color: #0b308c;
  font-weight: 700;
`;

export const AuthLogoutButton = styled.button`
  padding: 0.5rem;
  background-color: transparent;
  font-size: 19px;
  font-weight: 700;
  color: #0b308c;
  text-decoration: underline;
`;