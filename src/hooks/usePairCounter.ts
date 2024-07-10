import { useState, useEffect } from 'react';

export const usePairCounter = (maxPairs: number) => {
  const [pairCount, setPairCount] = useState(0);

  const incrementPairCount = () => {
    setPairCount((prevPairCount) => prevPairCount + 1);
    };
    

  useEffect(() => {
    if (pairCount >= maxPairs) {
      alert('Congratulations! You have matched all pairs.');
    }
  }, [maxPairs, pairCount]);

  return { incrementPairCount };
};
