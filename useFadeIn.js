const useFadeIn = (duration = 1, delay = 0) => {
    if (typeof duration !== "number" || typeof delay !== "number") {                //duration, delay != number => return
      return;
    }
    const element = useRef();
    useEffect(() => {
      if (element.current) {
        const { current } = element;
        current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;   //delay초후에 duration만큼 FadeIn
        current.style.opacity = 1;
      }
    },[]);
    return { ref: element, style: { opacity: 0 } };
  };