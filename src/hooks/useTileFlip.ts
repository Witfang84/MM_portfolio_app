import { useState, useCallback } from 'react';
import { useMediaQuery } from './useMediaQuery';

interface TileFlipHandlers {
  flipped: boolean;
  handlers: {
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    onClick?: () => void;
  };
}

export function useTileFlip(): TileFlipHandlers {
  const [flipped, setFlipped] = useState(false);
  const isTouch = useMediaQuery('(hover: none)');

  const flipOn = useCallback(() => setFlipped(true), []);
  const flipOff = useCallback(() => setFlipped(false), []);
  const toggle = useCallback(() => setFlipped((f) => !f), []);

  if (isTouch) {
    return {
      flipped,
      handlers: { onClick: toggle },
    };
  }

  return {
    flipped,
    handlers: {
      onMouseEnter: flipOn,
      onMouseLeave: flipOff,
    },
  };
}
