import styled from "styled-components";

export const CardStyled = styled.div`

width: 100px;
height: 150px;
margin: 5px;
border-radius: 15px;
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
perspective: 1000px;

.card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.6s;
    transform: rotateY(180deg); 
}


.card-inner.flipped {
    transform: rotateY(0deg); 
}

.card-front, .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
}

.card-back {
    transform: rotateY(180deg); 

    img{
      object-fit: cover;
    }
}

img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}


`