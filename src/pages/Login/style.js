import { Link } from 'react-router-dom';
import styled from 'styled-components';
const Form = styled.form`
    width: 50%;
    height: 50%;
    position: absolute;
    top: 10%;
    right: 22%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid dodgerblue;
    border-radius: 10px;
    background: whitesmoke;
    padding: 70px 20px;
    font-size: 24px;
`;
const Title = styled.div`
    font-family: cursive;
    font-weight: 600;
    font-size: 36px;
    margin-bottom: 40px;
`;
const Label = styled.div`
    font-family: cursive;
`;
const Input = styled.input`
    font-size: 22px;
    border: 2px solid darkgoldenrod;
    border-radius: 10px;
    margin: 20px 0px 40px 0px;
    padding: 5px;
`;

const Submit = styled.button.attrs(props => props.type === 'submit')`
    width: 50%;
    font-size: 24px;
    border: none;
    background: dodgerblue;
    position: absolute;
    bottom: 35px;
    color: white;
    padding: 5px;
    cursor: pointer;
    border-radius: 10px;
`

const LoginLink = styled(Link)`
    position: absolute;
    bottom: 0;
    color: darkgoldenrod;
`
const style = { Form, Title, Label, Input, Submit, LoginLink };
export default style;
