import React, {useState, useEffect, useMemo} from "react"

//function that returns boolean for a ref being visible on screen

export default function useOnScreen(ref) {

    const [isIntersecting, setIntersecting] = useState(false)

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting)
      )
      observer.observe(ref.current)
      return () => observer.disconnect()
    }, [ref])
  
    return isIntersecting
  }
  