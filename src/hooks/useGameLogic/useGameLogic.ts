import { useState, useEffect } from 'react';
import {  formatCards, resetCardsState } from './helpers';
import { Card } from './types';
import { CITIES } from '../../constants/cities';
import { useErrorCounter } from '../useErrorCounter';
import { usePairCounter } from '../usePairCounter';

export const useGameLogic = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [firstCard, setFirstCard] = useState<{ key: string; text: string } | null>(null);
  const [secondCard, setSecondCard] = useState<{ key: string; text: string } | null>(null);
  const numberOfOpportunities = Object.keys(CITIES).length
  const { errorCount, incrementErrorCount, resetCounter } = useErrorCounter(numberOfOpportunities);
  const { incrementPairCount } = usePairCounter(numberOfOpportunities);

  useEffect(() => {
    if (!cards.length) {
      const formattedCards = formatCards();
      setCards(formattedCards);
    }
  }, [cards]);

  const handleCardClick = (key: string, text: string) => {
    if (!firstCard) {
      setFirstCard({ key, text });
    } else if (firstCard && !secondCard) {
      setSecondCard({ key, text });
    }

    const updatedCards = cards.map((card) =>
      card.text === text ? { ...card, clicked: true } : card
    );

    setCards(updatedCards);
  };

  useEffect(() => {
    if (firstCard && secondCard) {
      if (firstCard.key === secondCard.key) {
        const updatedCards = cards.map((card) =>
          card.key === firstCard.key ? { ...card, completed: true, clicked: false } : card
        );

        setCards(updatedCards);
        incrementPairCount()
      } else {
        const updatedCards = cards.map((card) =>
          card.clicked ? { ...card, clicked: false, wrong: true } : card
        );

        incrementErrorCount()

        setCards(updatedCards);

        setTimeout(() => {
          const resetCards = resetCardsState(cards);
          setCards(resetCards);
          if(errorCount === numberOfOpportunities)
    {
      resetCounter()
    }
        }, 1000);
      }

      setFirstCard(null);
      setSecondCard(null);
    }
  }, [cards, errorCount, firstCard, incrementErrorCount, incrementPairCount, numberOfOpportunities, resetCounter, secondCard]);

  return { cards, handleCardClick, errorCount};
};
