import { useState, useEffect } from 'react';
import { shuffleCards, checkMatch, handleAttempts } from '../GameLogic/GameLogic';

// Custom Hook til at styre spillet
export const useGameController = (cardImages, maxAttempts) => {
    const [cards, setCards] = useState([]);
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);
    const [attempts, setAttempts] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [showAllFronts, setShowAllFronts] = useState(false);

    const initializeCards = () => setCards(shuffleCards(cardImages));

    // Håndtere klik på kort
    const handleCardClick = (clickedCard) => {
        if (gameOver || flippedCards.length === 2 || matchedCards.includes(clickedCard.id)) return;

        const newFlipped = [...flippedCards, clickedCard];
        setFlippedCards(newFlipped);

        if (newFlipped.length === 2) {
            checkMatch(newFlipped, setMatchedCards, setFlippedCards);
            handleAttempts(attempts, setAttempts, maxAttempts, setGameOver, setShowAllFronts);
        }
    };

    // Håndtere restart
    const handleRestart = () => {
        setGameOver(false);
        setShowAllFronts(false);
        setAttempts(0);
        initializeCards();
        setMatchedCards([]);
        setFlippedCards([]);
    };

    // Init kort
    useEffect(() => {
        initializeCards();
    }, []);

    return {
        cards,
        flippedCards,
        matchedCards,
        attempts,
        maxAttempts,
        gameOver,
        showAllFronts,
        handleCardClick,
        handleRestart,
    };
};
