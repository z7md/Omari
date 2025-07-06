import React from 'react';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

const styleMap = {
  'btn--primary': 'bg-white text-gray-900 border border-white hover:bg-gray-100 hover:text-gray-900 transition duration-250',
  'btn--outline': 'bg-transparent text-white border border-white hover:bg-white hover:text-gray-900 transition duration-250',
};

const sizeMap = {
  'btn--medium': 'px-5 py-2.5 text-lg',
  'btn--large': 'px-6 py-3 text-xl',
};

export const Button = ({
  children,
  type = 'button',
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to="/sign-up" className="inline-block">
      <button
        type={type}
        onClick={onClick}
        className={`
          rounded-sm
          cursor-pointer
          outline-none
          border
          ${styleMap[checkButtonStyle]}
          ${sizeMap[checkButtonSize]}
          focus:ring-2 focus:ring-white
          font-semibold
          transition
          ease-out
          duration-300
        `}
      >
        {children}
      </button>
    </Link>
  );
};
