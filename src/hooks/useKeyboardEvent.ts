import { useEffect } from 'react';

export const useKeyboardEvent = (eventType: string, callback: (e:KeyboardEvent) => void) => {
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.type === eventType) {
        callback(event);
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [eventType, callback]);
}
