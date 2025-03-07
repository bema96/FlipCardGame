// Mix kortene sammen
export const shuffleCards = (cardImages) => {
    return [...cardImages, ...cardImages]
        .map((card, index) => ({ ...card, id: `${card.id}-${index}` }))
        .sort(() => Math.random() - 0.5);
};

// Check match på kortene
export const checkMatch = (flippedCards, setMatchedCards, setFlippedCards) => {
    const [firstCard, secondCard] = flippedCards;

    if (firstCard.name === secondCard.name) {
        setMatchedCards((prev) => [...prev, firstCard.id, secondCard.id]);
        setFlippedCards([]);
    } else {
        setTimeout(() => {
            setFlippedCards([]);
        }, 1000);
    }
};

// Håndtere antal træk
export const handleAttempts = (attempts, setAttempts, maxAttempts, setGameOver, setShowAllFronts) => {
    const newAttempts = attempts + 1;
    setAttempts(newAttempts);
    if (newAttempts >= maxAttempts) {
        setGameOver(true);
        setShowAllFronts(true);
    }
};
