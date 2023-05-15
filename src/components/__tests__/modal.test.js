import { fireEvent, render, screen } from "@testing-library/react";
import React from 'react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import Modal from '../modal';


describe('<Modal /> test suite', () => {
    const onClose = jest.fn();
  const setup = () => {
    const utils = render(
        <Modal onClose={onClose} show={true}>text</Modal>
    );
    const modal = screen.getByTestId('modal');
    return {
      modal,
      ...utils,
    };
  };
  it('should match snapshot', () => {
    const { asFragment } = setup({ checked: false });
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders title', () => {
    const { modal } = setup({ checked: true });
    const title = screen.getByText('Details');
    expect(title).toBeInTheDocument();
  });

  it('renders button', () => {
    const { modal } = setup({ checked: false, indeterminate: true });
    const button = screen.getByText('close');
    expect(button).toBeInTheDocument();
  });

  it('close modal on click', () => {
    const { modal } = setup({ checked: false, indeterminate: true });
    const button = screen.getByText('close');
    fireEvent.click(button);
    expect(onClose).toHaveBeenCalled();
  });

});
