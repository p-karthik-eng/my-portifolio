import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const cursor2Ref = useRef(null);
  const cursor3Ref = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursor2 = cursor2Ref.current;
    const cursor3 = cursor3Ref.current;

    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      cursor.style.left = `${clientX}px`;
      cursor.style.top = `${clientY}px`;
      cursor2.style.left = `${clientX}px`;
      cursor2.style.top = `${clientY}px`;
      cursor3.style.left = `${clientX}px`;
      cursor3.style.top = `${clientY}px`;
    };

    const addHover = () => {
      cursor2.classList.add('hover');
      cursor3.classList.add('hover');
    };

    const removeHover = () => {
      cursor2.classList.remove('hover');
      cursor3.classList.remove('hover');
    };

    document.addEventListener('mousemove', moveCursor);

    const targets = document.querySelectorAll('.hover-target');
    targets.forEach((el) => {
      el.addEventListener('mouseover', addHover);
      el.addEventListener('mouseout', removeHover);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      targets.forEach((el) => {
        el.removeEventListener('mouseover', addHover);
        el.removeEventListener('mouseout', removeHover);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[99999] rounded-full mix-blend-difference bg-white w-0 h-0 transition-all duration-300"
      ></div>
      <div
        ref={cursor2Ref}
        className="cursor2 fixed top-0 left-0 pointer-events-none z-[99998] rounded-full border-2 border-white w-9 h-9 shadow-[0_0_22px_rgba(255,255,255,0.6)] transition-all duration-300 ease-out"
      ></div>
      <div
        ref={cursor3Ref}
        className="cursor3 fixed top-0 left-0 pointer-events-none z-[99998] rounded-full w-9 h-9 transition-all duration-300 ease-out bg-transparent"
      ></div>

      {/* Custom cursor hover styles */}
      <style jsx="true">{`
        body {
          cursor: none !important; /* ✅ Hides default cursor */
        }
        .cursor2.hover,
        .cursor3.hover {
          transform: scale(2) translateX(-25%) translateY(-25%);
        }
        .cursor2.hover {
          background: rgba(255, 255, 255, 0.4);
          box-shadow: 0 0 12px rgba(255, 255, 255, 0.2);
          border: none;
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
