const useBeforeLeave = (onBefore) => {
  if (typeof onBefore !== "function") {                               //onBefore이 function아닌경우 return
    return;
  }
  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {                                               //event.clientY <= 0 일때 onBefore실행
      onBefore();
    }
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);                  //handle 역활가지는 mouseleave 추가
    return () => document.removeEventListener("mouseleave", handle);  //handle 역활가지는 mouseleave 제거
  }, []);
};