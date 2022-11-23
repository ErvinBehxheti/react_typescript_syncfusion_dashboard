import React from 'react';
import { TButton } from '../@types/Button';

import { useStateContext } from '../contexts/ContextProvider';

const Button: React.FC<TButton> = ({ icon, bgColor, color, bgHoverColor, size, text, borderRadius, width }) => {
  const { setIsClicked, isClicked } = useStateContext();

  return (
    <button
      type="button"
      onClick={() => setIsClicked(isClicked)}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      {icon} {text}
    </button>
  );
};

export default Button;