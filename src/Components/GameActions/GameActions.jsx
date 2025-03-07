import { GameActionsStyled } from "./GameActionsStyled";

// Håndtere antal forsøg og Game Over Bitch
export const GameActions = ({ attempts, maxAttempts, gameOver, onRestart }) => {
    return (
        <GameActionsStyled>
            <div className="game-actions">
                {/* Vis antal forsøg */}
                <div className="attempts">
                    <p>Forsøg: {attempts} / {maxAttempts}</p>
                </div>

                {/* Game Over besked og Restart knap */}
                {gameOver && (
                    <div className="game-over">
                        <p>Game Over, din møgso! 
                            <br />
                            Du har overskredet det maksimale antal forsøg.
                        </p>
                        <button onClick={onRestart}>Start forfra</button>
                    </div>
                )}
            </div>
        </GameActionsStyled>
    );
};
