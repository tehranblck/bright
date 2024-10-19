import React from "react";
import styled from "styled-components";

interface ButtonTeamProps {
  onClick: () => void; 
  text: string; 

}

const ButtonTeam: React.FC<ButtonTeamProps> = ({
  onClick,
  text,

}) => {
  return (
    <StyledWrapper onClick={onClick} >
      <button className="button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-black bg-black rounded-lg dark:text-white bg-dark-mode:text-black"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
          />
        </svg>

        <div className="text-black dark:text-white bg-dark-mode:text-black">{text}</div>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
    background-color: transparent;
    min-width: 4rem;
    padding: 10px 15px;
    height: 2.9em;
    border-radius: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s ease;
  }

  .button:hover {
    color: #fff;
    cursor: pointer;
  }

  .button svg {
    width: 1.6em;
    margin-right: 0.8em;
    transition: all 0.4s ease;
  }

  .button:hover svg {
    color: #fff;
    transform: translateX(5px);
  }

  .text {
  }

  .button:hover .text {
    color: #fff;
  }
`;

export default ButtonTeam;
