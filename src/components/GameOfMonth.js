import React, {useState} from 'react';
import CustomActionButton from "./CustomActionButton";
const GameOfMonth = () => {
    const [isActive, setIsActive] = useState(false); // pokazuje sekcje
    'gra miesiąca'
    const [isDescriptionLoaded, setIsDescriptionLoaded] = useState(false);
// pokazuje dokłady opis gry
    const [isImageLoaded, setIsImageLoaded] = useState(false); // pokazuje
    obrazek gry
    const toggleIsActive = () => {
        setIsActive(!isActive);
        setIsDescriptionLoaded(false);
        setIsImageLoaded(false);
    };
    const toggleIsDescriptionLoaded = () => {
        setIsDescriptionLoaded(!isDescriptionLoaded);
    };
    const toggleIsImageLoaded = () => {
        setIsImageLoaded(!isImageLoaded);
    };
    return (
        <div className="gameOfMonthSection">
            <CustomActionButton label={ isActive ? 'hide game of the month'
                : 'show game of the month'} onClickFunction={toggleIsActive} />
            <div hidden={!isActive}>
                <CustomActionButton label={ isDescriptionLoaded ? 'hide
                    description' : 'show description'}
                    onClickFunction={toggleIsDescriptionLoaded} />
                    <CustomActionButton label={ isImageLoaded ? 'hide image' :
                    'show image'} onClickFunction={toggleIsImageLoaded} />
                <p hidden={!isDescriptionLoaded}>Lorem ipsum</p>
                <img hidden={!isImageLoaded}
                     src="https://warcraft.wiki.gg/images/thumb/b/b3/The_War_Within_logo_noRays.
 png/250px-The_War_Within_logo_noRays.png?f7ba3a" />
            </div>
        </div>
    );
};
export default GameOfMonth;