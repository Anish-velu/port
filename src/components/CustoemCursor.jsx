// CustomCursor.jsx
import React, { useEffect, useRef, useState } from "react";
import "./CustomCursor.css";

function useEventListener(eventName, handler, element = document) {
  const savedHandler = useRef();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const isSupported = element && element.addEventListener;
    if (!isSupported) return;

    const eventListener = (event) => savedHandler.current(event);
    element.addEventListener(eventName, eventListener);

    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
}

function CustomCursor({
 color="37, 175, 255",
  outerAlpha = 0.4,
  innerSize = 8,
  outerSize = 15,
  outerScale = 5,
  innerScale = 0.7,
}) {
  const cursorOuterRef = useRef();
  const cursorInnerRef = useRef();
  const requestRef = useRef();
  const previousTimeRef = useRef();
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [isActiveClickable, setIsActiveClickable] = useState(false);
  let endX = useRef(0);
  let endY = useRef(0);

const onMouseMove = ({ clientX, clientY }) => {
  setCoords({ x: clientX, y: clientY });

  const innerOffsetX = innerSize / 2;
  const innerOffsetY = innerSize / 2;
  const outerOffsetX = outerSize / 2;
  const outerOffsetY = outerSize / 2;

  cursorInnerRef.current.style.top = clientY - innerOffsetY + "px";
  cursorInnerRef.current.style.left = clientX - innerOffsetX + "px";
  endX.current = clientX - outerOffsetX;
  endY.current = clientY - outerOffsetY;
};

  const animateOuterCursor = (time) => {
    if (previousTimeRef.current !== undefined) {
      coords.x += (endX.current - coords.x) / 8;
      coords.y += (endY.current - coords.y) / 8;
      cursorOuterRef.current.style.top = coords.y + "px";
      cursorOuterRef.current.style.left = coords.x + "px";
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animateOuterCursor);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animateOuterCursor);
    return () => cancelAnimationFrame(requestRef.current);
  }, [animateOuterCursor]);

  useEventListener("mousemove", onMouseMove);
  useEventListener("mousedown", () => setIsActive(true));
  useEventListener("mouseup", () => setIsActive(false));
  useEventListener("mouseenter", () => setIsVisible(true));
  useEventListener("mouseleave", () => setIsVisible(false));

  useEffect(() => {
    if (isActive) {
      cursorInnerRef.current.style.transform = `scale(${innerScale})`;
      cursorOuterRef.current.style.transform = `scale(${outerScale})`;
    } else {
      cursorInnerRef.current.style.transform = "scale(1)";
      cursorOuterRef.current.style.transform = "scale(1)";
    }
  }, [innerScale, outerScale, isActive]);

  useEffect(() => {
    if (isVisible) {
      cursorInnerRef.current.style.opacity = 1;
      cursorOuterRef.current.style.opacity = 1;
    } else {
      cursorInnerRef.current.style.opacity = 0;
      cursorOuterRef.current.style.opacity = 0;
    }
  }, [isVisible]);

  const styles = {
    cursorInner: {
      position: "fixed",
      borderRadius: "50%",
      width: innerSize,
      height: innerSize,
      pointerEvents: "none",
      backgroundColor: `rgba(${color}, 1)`,
    },
    cursorOuter: {
      position: "fixed",
      borderRadius: "50%",
      pointerEvents: "none",
      width: outerSize,
      height: outerSize,
      backgroundColor: `rgba(${color}, ${outerAlpha})`,
    },
  };

  return (
    <>
      <div
        ref={cursorOuterRef}
        className="cursor-outer"
        style={styles.cursorOuter}
      />
      <div
        ref={cursorInnerRef}
        className="cursor-inner"
        style={styles.cursorInner}
      />
    </>
  );
}

export default CustomCursor;
