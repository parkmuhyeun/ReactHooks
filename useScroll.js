const useScroll = () => {
    const [state, setState] = useState({
      x: 0,
      y: 0
    });
    const onScroll = () => {
      setState({ y: window.scrollY, x: window.scrollX });             //Scrool 할때 state = x,  y 저장
    };
    useEffect(() => {
      window.addEventListener("scroll", onScroll);                    //onScroll역활하는 scroll event 추가
      return () => window.removeEventListener("scroll", onScroll);    //onScroll역활하는 scroll event 제거
    }, []);
    return state;
  };