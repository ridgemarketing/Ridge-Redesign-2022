import React, { useState, useEffect, useRef } from "react";
import useOnScreen from "./OnScreen";

const Counter = (props) => {

  const [inView, setView] = useState(false); // used to track if ref is in view
  const [scrolledOnce, setScrolled] = useState(false); //state to track if we've already scrolled the numbers
  const [count, setCount] = useState("0"); //count injected into the text

  const suffix = props.title;
  const ref = useRef(null);
  const SPEED = props.number < 100 ? 2 : 4; // animation speed

  // intersection observer function I built (components/OnScreen.js) to check if ref is in view
  const isVisible = useOnScreen(ref); 

  //change state if visible
  useEffect(() => {
    if (isVisible) setView(true);
  }, [isVisible]);


  useEffect(() => {
    // if in view and hasn't been animated already
    if (inView && !scrolledOnce) {
      let start = 0;
      const end = parseInt(props.number);
      if (start === end) {
        //set scrolled to prevent repeat and end animation
        setScrolled(true);
        return;
      }
      let incrementTime = (SPEED / end) * 1000; // maps all animations to same duration
  
      //set timer on count based on mapping above
      let timer = setInterval(() => {
        start += 1;
        setCount(String(start))
        if (start === end) clearInterval(timer)       
      }, incrementTime);
    }

    // dependency array
  }, [inView]);

    return (
      <span ref={ref} className={props.classes}>{`${count}${suffix}`}</span>  
    );
  }

  export default Counter;