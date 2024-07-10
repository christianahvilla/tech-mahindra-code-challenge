import { useState, useEffect } from 'react';

export const useErrorCounter = (maxErrors: number) => {
  const [errorCount, setErrorCount] = useState(0);

  const incrementErrorCount = () => {
    setErrorCount((prevErrorCount) => prevErrorCount + 1);
    };
    
    const resetCounter = () => setErrorCount(0)

  useEffect(() => {
    if (errorCount >= maxErrors) {
      alert('Game Over! You have exceeded the maximum number of errors.');
    }
  }, [errorCount, maxErrors]);

  return { errorCount, incrementErrorCount, resetCounter };
};
