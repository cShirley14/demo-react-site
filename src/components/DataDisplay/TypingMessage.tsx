import { useState, useEffect } from 'react';
import { Text, TextProps } from '@chakra-ui/react';

interface TypingMessageProps extends TextProps {
  message: string,
  typingSpeed: number,
  repeatInterval: number
}

export const TypingMessage = ({ message, typingSpeed, repeatInterval, ...props }: TypingMessageProps) => {
  const [typedMessage, setTypedMessage] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (currentIndex < message.length) {
        setTypedMessage((prevMessage) => prevMessage + message[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      } else {
        clearInterval(typingInterval);

        // Wait for the repeatInterval and then reset the message
        setTimeout(() => {
          setTypedMessage('');
          setCurrentIndex(0);
        }, repeatInterval);
      }
    }, typingSpeed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [currentIndex, message, typingSpeed, repeatInterval]);

  return (
    <Text>{typedMessage}</Text>
  );
}
