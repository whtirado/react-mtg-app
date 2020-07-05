import React from 'react';
import { useTransition, animated } from 'react-spring';

export default function Animate({ content, delay, classProps, direction }) {
  let animationDirection;

  switch (direction) {
    case 'top':
      animationDirection = 'translateY(-110%)';
      break;
    case 'bottom':
      animationDirection = 'translateY(110%)';
      break;
    case 'left':
      animationDirection = 'translateX(-110%)';
      break;
    case 'right':
      animationDirection = 'translateX(110%)';
      break;
    default:
      animationDirection = '';
  }

  const transitions = useTransition(true, null, {
    from: {
      opacity: 0,
      transitionDelay: delay ? delay : '0',
      transitionDuration: '.2s',
      transform: animationDirection,
    },
    enter: {
      opacity: 1,
      transform: animationDirection.length ? 'translateX(0)' : '',
    },
  });

  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <animated.div key={key} style={props} className={classProps}>
          {content}
        </animated.div>
      )
  );
}
