import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root { // variables in CSS
        --red: #e52e4d;
        --blue: #5429cc;
        --green: #33cc95;
        
        --blue-light: #6933ff;

        --text-title: #363f5f;
        --text-body: #969cb3;

        --background: #f0f2f5;
        --shape: #ffffff;
    }
    
    * { // applies to all elements
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    // font-size: 16px; (Desktop)
    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    // REM = 1rem = 16px

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: 600;
    }
    
    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);

        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 576px;
        background: var(--background);
        padding: 3rem;

        position: relative; // para posicionar o X de fechar, com posição relativa ao modal

        border-radius: 0.25rem;
    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;

        transition: 0.2s;

        &:hover {
            filter: brightness(0.6)
        }
    }

`