/* eslint-disable react/prop-types */
import React from 'react';

/**
 * @param { Object } Props Props.children is Product Title
 * @param { React.ReactNode } Props.children Product Title
 *
 * @example
 * <Title>Shine Tomato</Title>
 */
export default function Title({ children }) {
  return (
    <h1>
      {children}
    </h1>
  );
}
