import { useEffect, useRef } from 'react';

function useRandomInterval(callback, minDelay, maxDelay) {
  const timeoutId = useRef(null);
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      const nextTick = Math.random() * (maxDelay - minDelay) + minDelay;
      timeoutId.current = setTimeout(() => {
        savedCallback.current();
        tick();
      }, nextTick);
    }

    if (typeof minDelay === 'number' && typeof maxDelay === 'number') {
      tick();
    }

    return () => clearTimeout(timeoutId.current);
  }, [minDelay, maxDelay]);

  return () => clearTimeout(timeoutId.current);
}

export default useRandomInterval;
