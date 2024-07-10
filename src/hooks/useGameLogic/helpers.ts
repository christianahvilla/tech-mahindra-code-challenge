import { CITIES } from "../../constants/cities";
import { Card } from "./types";

export const formatCards = (): Card[] => {
  const cities = Object.entries(CITIES).map(([country, city]) => ({
    text: city,
    key: country,
    clicked: false,
    completed: false,
    wrong: false,
  }));

  const countries = Object.entries(CITIES).map(([country]) => ({
    text: country,
    key: country,
    clicked: false,
    completed: false,
    wrong: false,
  }));

  return [...cities, ...countries];
};

export const updateCardState = (
  cards: Card[],
  key: string,
  stateUpdates: Partial<Card>
): Card[] => {
  return cards.map((card) =>
    card.key === key ? { ...card, ...stateUpdates } : card
  );
};

export const resetCardsState = (cards: Card[]): Card[] => {
  return cards.map((card) => ({
    ...card,
    wrong: false,
    clicked: false,
  }));
};
