import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';
import ChatbotIcon from './ChatbotIcon';
import chatbotData from './ChatbotData';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const [isFloating, setIsFloating] = useState(true);
    const [hasInteracted, setHasInteracted] = useState(false);
    const [isEndingChat, setIsEndingChat] = useState(false);
    const [countdown, setCountdown] = useState(null);
    const messagesEndRef = useRef(null);
    const chatbotRef = useRef(null);
    const messagesRef = useRef(null);
    const countdownRef = useRef(null);

    // Handle body scroll lock
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('chatbot-open');
        } else {
            document.body.classList.remove('chatbot-open');
        }
        return () => {
            document.body.classList.remove('chatbot-open');
        };
    }, [isOpen]);

    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        if (isOpen) {
            setIsFloating(false);
            if (messages.length === 0) {
                // Always show welcome message when opening with no messages
                showWelcomeMessage();
            }
        } else {
            setTimeout(() => setIsFloating(true), 300);
        }
    }, [isOpen]);

    useEffect(() => {
        if (messages.length > 0) {
            scrollToBottom();
        }
    }, [messages]);

    const handleClose = () => {
        setIsClosing(true);
        stopCountdown();
        // Clear all states
        setTimeout(() => {
            setIsOpen(false);
            setIsClosing(false);
            setMessages([]);
            setIsEndingChat(false);
            setCountdown(null);
            setIsTyping(false);
            if (countdownRef.current) {
                clearInterval(countdownRef.current);
                countdownRef.current = null;
            }
        }, 300);
    };

    // Prevent background scroll when scrolling inside chatbot
    const handleChatScroll = (e) => {
        e.stopPropagation();
    };

    // Calculate typing time based on message length
    const calculateTypingTime = (text) => {
        const wordCount = text.split(' ').length;
        const baseDelay = 500; // Base delay in milliseconds
        const timePerWord = 100; // Time per word in milliseconds
        
        // Calculate total time based on message length
        let typingTime = baseDelay + (wordCount * timePerWord);
        
        // Add some randomness (±20% variation)
        const variation = 0.2;
        const randomFactor = 1 + (Math.random() * variation * 2 - variation);
        typingTime *= randomFactor;

        // Cap minimum and maximum times
        return Math.min(Math.max(typingTime, 800), 3000);
    };

    const simulateTyping = async (text) => {
        setIsTyping(true);
        const typingTime = calculateTypingTime(text);
        await new Promise(resolve => setTimeout(resolve, typingTime));
        setIsTyping(false);
    };

    const addBotMessage = async (text, options = null, instant = false) => {
        if (!instant) {
            // Start typing animation only if not instant
            await simulateTyping(text);
        }
        
        // Add the message
        setMessages(prev => [...prev, { text, sender: 'bot', options }]);

        // If there are options, add a small delay before showing them
        if (options && !instant) {
            await new Promise(resolve => setTimeout(resolve, 500));
        }
    };

    const handleEndChat = async (shouldEnd) => {
        const option = chatbotData.endOptions.options.find(opt => 
            shouldEnd ? opt.text === "Yes, end chat" : opt.text === "No, continue chatting"
        );
        
        // Add user's choice as a message
        setMessages(prev => [...prev, { text: option.text, sender: 'user' }]);
        
        if (shouldEnd) {
            setIsEndingChat(true);
            // Add bot's response
            await addBotMessage(option.response);
            // Start countdown
            startCountdown();
        } else {
            setIsEndingChat(false);
            stopCountdown();
            // Continue chat with main options
            await addBotMessage(option.response, getMainOptions());
        }
    };

    const getMainOptions = () => {
        try {
            const categories = Object.entries(chatbotData)
                .filter(([key, value]) => 
                    key !== 'welcomeMessage' && 
                    key !== 'suggestedQuestions' &&
                    key !== 'endOptions' &&
                    value && 
                    value.title && 
                    value.questions &&
                    typeof value.questions === 'object'
                )
                .map(([key, value]) => ({
                    key,
                    title: value.title
                }));

            return [
                ...categories.map(category => ({
                    text: category.title,
                    action: () => showCategoryOptions(category.key)
                })),
                {
                    text: "End conversation",
                    action: () => showEndOptions()
                }
            ];
        } catch (error) {
            console.error('Error generating main options:', error);
            return [{
                text: "End conversation",
                action: () => showEndOptions()
            }];
        }
    };

    const showEndOptions = async () => {
        setIsEndingChat(true);
        await addBotMessage(chatbotData.endOptions.title, 
            chatbotData.endOptions.options.map(option => ({
                text: option.text,
                action: () => handleEndChat(option.text === "Yes, end chat")
            }))
        );
    };

    const showWelcomeMessage = async () => {
        // First greeting appears instantly
        await addBotMessage("Need help? Click me to start chatting!", null, true);

        // Longer delay before main welcome message with typing animation
        await new Promise(resolve => setTimeout(resolve, 1500));
        await addBotMessage(chatbotData.welcomeMessage, getMainOptions());
    };

    const showCategoryOptions = async (category) => {
        // Validate category exists
        if (!chatbotData[category] || !chatbotData[category].questions) {
            await addBotMessage("I apologize, but I couldn't find that category. Let me show you the main menu.", getMainOptions());
            return;
        }

        const categoryData = chatbotData[category];

        const options = [
            ...Object.entries(categoryData.questions)
                .filter(([_, value]) => value && value.question)
                .map(([key, value]) => ({
                    text: value.question,
                    action: () => showAnswer(category, key)
                })),
            {
                text: "« Back to main menu",
                action: () => {
                    setTimeout(async () => {
                        await addBotMessage("Here's the main menu:", getMainOptions());
                    }, 500);
                }
            }
        ];

        await addBotMessage(categoryData.title, options);
    };

    const showAnswer = async (category, questionKey) => {
        // Validate category and question exist
        if (!chatbotData[category] || 
            !chatbotData[category].questions || 
            !chatbotData[category].questions[questionKey]) {
            await addBotMessage("I apologize, but I couldn't find that information. Let me show you the main menu.", getMainOptions());
            return;
        }

        const answer = chatbotData[category].questions[questionKey];
        
        // Validate answer object
        if (!answer || !answer.answer) {
            await addBotMessage("I apologize, but that information seems to be missing. Let me show you the main menu.", getMainOptions());
            return;
        }

        const options = [
            ...(Array.isArray(answer.followUp) ? answer.followUp.map(followUp => ({
                text: followUp,
                action: () => handleFollowUp(followUp)
            })) : []),
            {
                text: "« Back to main menu",
                action: () => {
                    setTimeout(async () => {
                        await addBotMessage("Here's the main menu:", getMainOptions());
                    }, 500);
                }
            }
        ];
        
        await addBotMessage(answer.answer, options);
    };

    const handleFollowUp = async (question) => {
        // First check if the question exists
        if (!question) {
            console.warn('No question provided for follow-up');
            return;
        }

        // Iterate through categories that might contain questions
        for (const category of Object.keys(chatbotData)) {
            // Skip non-category entries
            if (category === 'welcomeMessage' || 
                category === 'suggestedQuestions' || 
                category === 'endOptions' ||
                !chatbotData[category] ||
                !chatbotData[category].questions) {
                continue;
            }

            const categoryData = chatbotData[category];
            
            // Safely check if questions exist and are valid
            if (categoryData && categoryData.questions && typeof categoryData.questions === 'object') {
                for (const [key, value] of Object.entries(categoryData.questions)) {
                    if (value && value.question === question) {
                        await new Promise(resolve => setTimeout(resolve, 500));
                        await showAnswer(category, key);
                        return;
                    }
                }
            }
        }

        // If no matching question is found, show a friendly message and return to main menu
        await addBotMessage("I'm not sure about that specific question. Let me show you the main menu instead.", getMainOptions());
    };

    const toggleChat = () => {
        if (!isOpen) {
            // Reset all states when opening chat
            setMessages([]);
            setIsEndingChat(false);
            setCountdown(null);
            setIsTyping(false);
            if (countdownRef.current) {
                clearInterval(countdownRef.current);
                countdownRef.current = null;
            }
            setIsOpen(true);
            setHasInteracted(true);
        } else {
            showEndOptions();
        }
    };

    const formatMessage = (text) => {
        // Split the text into lines
        const lines = text.split('\n');
        
        // Process each line
        return lines.map((line, index) => {
            // Check if the line starts with a bullet point
            if (line.trim().startsWith('•')) {
                return <div key={index} style={{ marginLeft: '10px', marginTop: '4px' }}>{line}</div>;
            }
            // If it's an empty line, add some spacing
            if (line.trim() === '') {
                return <div key={index} style={{ height: '8px' }} />;
            }
            // Regular line
            return <div key={index}>{line}</div>;
        });
    };

    const formatTime = (seconds) => {
        return `${seconds}`;
    };

    const startCountdown = () => {
        setCountdown(7);
        if (countdownRef.current) {
            clearInterval(countdownRef.current);
        }
        countdownRef.current = setInterval(() => {
            setCountdown(prev => {
                if (prev <= 1) {
                    clearInterval(countdownRef.current);
                    handleClose();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    };

    const stopCountdown = () => {
        if (countdownRef.current) {
            clearInterval(countdownRef.current);
            countdownRef.current = null;
        }
        setCountdown(null);
    };

    const continueChatting = async () => {
        stopCountdown();
        setIsEndingChat(false);
        setCountdown(null);
        await addBotMessage("Great! Let's continue our conversation. How can I help you?", getMainOptions());
    };

    // Add cleanup on component unmount
    useEffect(() => {
        return () => {
            if (countdownRef.current) {
                clearInterval(countdownRef.current);
                countdownRef.current = null;
            }
        };
    }, []);

    // Add cleanup when chat closes
    useEffect(() => {
        if (!isOpen) {
            stopCountdown();
            setCountdown(null);
            setIsEndingChat(false);
            setMessages([]);
            setIsTyping(false);
        }
    }, [isOpen]);

    return (
        <>
            <button 
                className={`chatbot-toggle ${isFloating ? 'floating' : ''} ${!hasInteracted ? 'pulse' : ''}`} 
                onClick={toggleChat}
                aria-label={isOpen ? 'Close chat' : 'Open chat'}
            >
                <ChatbotIcon isOpen={isOpen} />
            </button>
            {isOpen && (
                <div 
                    className={`chatbot-container ${isClosing ? 'closing' : ''} ${isEndingChat ? 'ending' : ''}`} 
                    ref={chatbotRef}
                >
                    <div className="chatbot-header">
                        <h3>👋 Chat Assistant</h3>
                        <button 
                            className="close-button" 
                            onClick={() => showEndOptions()} 
                            aria-label="End chat"
                        >
                            ×
                        </button>
                    </div>
                    <div 
                        className="chatbot-messages"
                        ref={messagesRef}
                        onScroll={handleChatScroll}
                    >
                        {messages.map((message, index) => (
                            <div 
                                key={index} 
                                className={`message ${message.sender} ${
                                    index === messages.length - 1 ? 'fade-in' : ''
                                }`}
                            >
                                {formatMessage(message.text)}
                                {message.options && (
                                    <div className="options-container">
                                        {message.options.map((option, i) => (
                                            <button
                                                key={i}
                                                className="option-button"
                                                onClick={() => {
                                                    option.action();
                                                    setMessages(prev => [...prev, {
                                                        text: option.text,
                                                        sender: 'user'
                                                    }]);
                                                }}
                                                data-text={option.text}
                                            >
                                                {option.text}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        {isTyping && (
                            <div className="message bot typing-indicator">
                                <span className="typing-dot"></span>
                                <span className="typing-dot"></span>
                                <span className="typing-dot"></span>
                            </div>
                        )}
                        {countdown !== null && (
                            <div className="countdown-container">
                                <div className="countdown-timer">
                                    <div className="timer-circle">
                                        <span className="timer-number">{formatTime(countdown)}</span>
                                    </div>
                                </div>
                                <div className="countdown-message">
                                    Chat closing automatically...
                                </div>
                                <button 
                                    className="continue-button"
                                    onClick={continueChatting}
                                >
                                    Continue chatting
                                </button>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>
                </div>
            )}
        </>
    );
};

export default Chatbot; 