import React from 'react';

const ColorSelection = ({ onColorSelect }) => {
  return (
    <div>
      {/* Button 1 */}
      <button onClick={() => onColorSelect(1)}>Color Theme 1</button>

      {/* Button 2 */}
      <button onClick={() => onColorSelect(2)}>Color Theme 2</button>

      {/* Button 3 */}
      <button onClick={() => onColorSelect(3)}>Color Theme 3</button>
    </div>
  );
};

export default ColorSelection;
