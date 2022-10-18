import styled from 'styled-components';

export const HeaderInfo = styled.header`
  display: flex;
  justify-content: flex-end;
`;

export const TodoSection = styled.section`
  justify-content: flex-start;
  height: 400px;
  max-width: 600px;
`;

export const TodoForm = styled.form`
  width: 100%;
  flex-direction: row;
  border-radius: 3px;
  height: 4rem;
  padding-bottom: 1rem;
`;

export const CreateInput = styled.input`
  flex: 1 1 80%;
  border-radius: 5px 0 0 5px !important;
  border-right: none;
`

export const ScrollArea = styled.ul`
  width: calc(100% + 10px);
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    background: transparent;
  }
`;

export const EditInput = styled.input`
  flex: 1;
`;

export const TodoButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-left: 10px;
`;

export const TodoItems = styled.li`
  display: flex;
  justify-content: space-between;
  align-content: center;
  border-bottom: 1px solid #0b308c;
  padding-bottom: 15px;
  padding-top: 15px;
  font-size: 1.1em;
  color: #1A0908FF;
  & > div > button {
    padding: 0 8px 0 8px;
    border-radius: 5px;
    cursor: pointer;
    background-color: #eee;
    color: #333;
  }
`;