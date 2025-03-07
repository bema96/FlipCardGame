
import styled from 'styled-components';

export const GameActionsStyled = styled.div`

    position: absolute;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    padding: 10px;
    background-color: #f8f9fa;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    max-width: 350px;

    h2 {
        margin: 0;
        font-size: 1.5em;
        color: #343a40;
    }

    button {
        margin-top: 10px;
        padding: 10px 20px;
        font-size: 1em;
        color: #fff;
        background-color: #007bff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s;

        &:hover {
            background-color: #0056b3;
        }
    }
`;