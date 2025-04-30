"use client";

import { useEffect, useRef } from 'react';

// A reusable component for scroll animations
const ScrollReveal = ({
  children,
  threshold = 0.1,
  delay = 0,
  duration = 600,
  distance = 20,
  direction = 'up',
  className = '',
  once = true,
  ...props
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Apply inline styles for animation
    element.style.opacity = '0';
    element.style.transition = `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`;
    element.style.transitionDelay = `${delay}ms`;
    element.style.willChange = 'opacity, transform';
    
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
      case 'scale':
        element.style.transform = `scale(${1 - (distance / 100)})`;
        break;
      default:
        element.style.transform = `translateY(${distance}px)`;
    }

    // Create intersection observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // When element is visible
          requestAnimationFrame(() => {
            element.style.opacity = '1';
            element.style.transform = 'none';
          });

          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          // Reset animation if not once
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
            case 'scale':
              element.style.transform = `scale(${1 - (distance / 100)})`;
              break;
            default:
              element.style.transform = `translateY(${distance}px)`;
          }
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(element);

    // Respect reduced motion preferences
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      element.style.opacity = '1';
      element.style.transform = 'none';
      element.style.transition = 'none';
      observer.unobserve(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, delay, duration, distance, direction, once]);

  return (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  );
};

export default ScrollReveal;