import React from 'react';
// Komponent - przycisk, który przyjmuje różne funkcje na `onClick`
function CustomActionButton({ label, onClickFunction }) {
    return (
        <button className="custombutton" onClick={onClickFunction}>
            {label}
        </button>
    );
}
export default CustomActionButton;