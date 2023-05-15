import styled from "styled-components";

const Header = styled.div `
  background: dodgerblue;
  font-size: 20px;
  font-family: cursive;
  height: 60px;
  padding: 10px;
  display: flex;
  align-items: center;
  color: white;
  justify-content: space-between;
`;

const Table = styled.table `
  & th,
  & td {
    border: 1px solid black;
    padding: 10px;
    cursor: pointer
  }
`;

const style = {
    Header,
    Table
};
export default style;