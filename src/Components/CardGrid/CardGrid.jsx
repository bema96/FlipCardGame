import { CardGridStyled } from './CardGridStyled';
import { Card } from '../Card/Card';

export const CardGrid = ({ cards, flippedCards, matchedCards, onCardClick }) => {
    return (
        <CardGridStyled>
            {cards.map((card) => (
                <Card
                    key={card.id}
                    src={card.src}
                    name={card.name}
                    // Tjek om kortet er vendt eller matchet ved at sammenligne ID
                    isFlipped={flippedCards.some((flippedCard) => flippedCard.id === card.id) || matchedCards.includes(card.id)}
                    onClick={() => onCardClick(card)}
                />
            ))}
        </CardGridStyled>
    );
};
