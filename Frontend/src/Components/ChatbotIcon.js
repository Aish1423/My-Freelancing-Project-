import React from 'react';

const ChatbotIcon = ({ isOpen }) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="chat-icon-svg"
        >
            {!isOpen ? (
                // Chat bubble icon when closed
                <>
                    <path
                        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C13.4 22 14.7 21.7 15.9 21.2L20 22L19.2 17.9C21.7 15.9 22 12 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 13.85 19.37 15.57 18.24 17L18.71 19.29L16.42 18.82C15.24 19.58 13.68 20 12 20Z"
                        fill="currentColor"
                    />
                    <path
                        d="M8 13C8.55228 13 9 12.5523 9 12C9 11.4477 8.55228 11 8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13Z"
                        fill="currentColor"
                    />
                    <path
                        d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                        fill="currentColor"
                    />
                    <path
                        d="M16 13C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11C15.4477 11 15 11.4477 15 12C15 12.5523 15.4477 13 16 13Z"
                        fill="currentColor"
                    />
                </>
            ) : (
                // Close icon when open
                <path
                    d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                    fill="currentColor"
                />
            )}
        </svg>
    );
};

export default ChatbotIcon; 