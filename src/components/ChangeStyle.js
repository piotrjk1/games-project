import React, { useState } from 'react';
import '../styles/ChangeStyle.css';

const ChangeStyle = () => {
    const [isActive, setIsActive] = useState(false);
    return(
        <div className={`change-style ${isActive ? 'active' : ''}`}
             onClick={() => setIsActive(!isActive)} >
            Kliknij mnie, aby zmienić mój styl!
        </div>
    );
};

export default ChangeStyle;