import { CardContainerStyled } from './CardContainerStyled';
import { CardGrid } from '../CardGrid/CardGrid';
import { GameActions } from '../GameActions/GameActions';
import { useGameController } from '../GameController/GameController';
import cardImages from '../../Data/cardImg';

// Container for kortspillet
export const CardContainer = () => {
    const gameController = useGameController(cardImages, 20); // attemtps

    return (
        <>
            <GameActions
                attempts={gameController.attempts}
                maxAttempts={gameController.maxAttempts}
                gameOver={gameController.gameOver}
                onRestart={gameController.handleRestart}
            />
            
            <CardContainerStyled>
                <CardGrid
                    cards={gameController.cards}
                    flippedCards={gameController.showAllFronts ? gameController.cards : gameController.flippedCards}
                    matchedCards={gameController.matchedCards}
                    onCardClick={gameController.handleCardClick}
                />
            </CardContainerStyled>
        </>
    );
};
