import styled from "styled-components";

const ModalFade=styled.div`
position: fixed;
width: 100%;
height: 100vh;
top: 0;
left: 0;
/* pointer-events: none; */
background-color: #25588496;
`;

const Modal = styled.div`
  width: 500px;
  background: white;
  border: 1px solid #ccc;
  transition: 1.1s ease-out;
  box-shadow: -2rem 2rem 2rem rgba(black, 0.2);
  filter: blur(0);
  transform: scale(1);
  opacity: 1;
  visibility: visible;
  position: absolute;
  top: 25%;
  right: calc(50% - 250px);

  &.red {
    background: black;
    color: red;
  }
  &.blue {
    background: blue;
    color: red;
  }

  &.off {
    opacity: 0;
    visibility: hidden;
    filter: blur(8px);
    transform: scale(0.33);
    box-shadow: 1rem 0 0 rgba(black, 0.2);
  }
  @supports (offset-rotate: 0deg) {
    offset-rotate: 0deg;
    offset-path: path("M 250,100 S -300,500 -700,-200");
    &.off {
      offset-distance: 100%;
    }
  }
  @media (prefers-reduced-motion) {
    offset-path: none;
  }
  h2 {
    border-bottom: 1px solid #ccc;
    padding: 1rem;
    margin: 0;
  }
  .content {
    padding: 1rem;
  }
  .actions {
    border-top: 1px solid #ccc;
    background: #eee;
    padding: 0.5rem 1rem;
    button {
      border: 0;
      background: #78f89f;
      border-radius: 5px;
      padding: 0.5rem 1rem;
      font-size: 0.8rem;
      line-height: 1;
    }
  }
`;

const style = {
  Modal,
  ModalFade,
};
export default style;
