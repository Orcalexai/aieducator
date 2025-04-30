import { useEffect, useRef } from 'react';

// Enhanced useScrollReveal hook with additional options
export default function useScrollReveal({ 
  threshold = 0.1,   // How much of the element needs to be visible to trigger
  delay = 0,         // Delay before the animation starts (in ms)
  duration = 600,    // Duration of the animation (in ms) 
  distance = 20,     // Distance the element will travel during animation
  direction = 'up',  // Direction: 'up', 'down', 'left', 'right'
  once = true        // Whether to play the animation only once
} = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Apply CSS transition styles
    element.style.transitionProperty = 'opacity, transform';
    element.style.transitionDuration = `${duration}ms`;
    element.style.transitionTimingFunction = 'cubic-bezier(0.25, 0.1, 0.25, 1.0)';
    element.style.transitionDelay = `${delay}ms`;
    element.style.opacity = '0';
    
    // Set initial transform based on direction
    switch(direction) {
      case 'up':
        element.style.transform = `translateY(${distance}px)`;
        break;
      case 'down':
        element.style.transform = `translateY(-${distance}px)`;
        break;
      case 'left':
        element.style.transform = `translateX(${distance}px)`;
        break;
      case 'right':
        element.style.transform = `translateX(-${distance}px)`;
        break;
      default:
        element.style.transform = `translateY(${distance}px)`;
    }

    // Set up the intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Element is now visible
            setTimeout(() => {
              element.style.opacity = '1';
              element.style.transform = 'translate(0, 0)';
            }, 50); // Small delay for more reliable triggering

            if (once) {
              observer.unobserve(element);
            }
          } else if (!once) {
            // Reset the animation if not once
            element.style.opacity = '0';
            
            switch(direction) {
              case 'up':
                element.style.transform = `translateY(${distance}px)`;
                break;
              case 'down':
                element.style.transform = `translateY(-${distance}px)`;
                break;
              case 'left':
                element.style.transform = `translateX(${distance}px)`;
                break;
              case 'right':
                element.style.transform = `translateX(-${distance}px)`;
                break;
              default:
                element.style.transform = `translateY(${distance}px)`;
            }
          }
        });
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(element);

    // Cleanup function for useEffect
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, delay, duration, distance, direction, once]);

  return ref;
}