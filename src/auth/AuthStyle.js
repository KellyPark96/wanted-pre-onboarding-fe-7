import styled from 'styled-components';

export const StyledWrapper = styled.button`
    margin-top: 1rem;
    padding-top: 0.6rem;
    padding-bottom: 0.5rem;
    border: none;
    background: ${props => props.theme.textColor};
    color: white;
    text-align: center;
    font-size: 1.25rem;
    font-weight: 500;
    cursor: pointer;
    transition: .2s all;
    &:hover {
      background: ${props => props.theme.accentColor}
    }
    &:active {
      background: ${props => props.theme.accentColor}
    }
    &:disabled{
      background-color: lightgray;
      cursor: default;
    }
`;