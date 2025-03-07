import { CardStyled } from './CardStyled';
import cardBackImage from '../../Assets/Images/bck.jpeg';

export const Card = ({ src, name, isFlipped, onClick }) => {
    return (
        <CardStyled onClick={onClick}>
            <div className={`card-inner ${isFlipped ? 'flipped' : ''}`}>
                <div className="card-front">
                    <img src={src} alt={name} />
                </div>
                <div className="card-back">
                    <img src={cardBackImage} alt="CardBackGround" />
                </div>
            </div>
        </CardStyled>
    );
};
