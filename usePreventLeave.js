const usePreventLeave = () => {
    const lisetner = (event) => {
      event.preventDefault();
      event.returnValue = "";
    };
    const enablePrevent = () => window.addEventListener("beforeunload", lisetner);        //listener 역활하는 beforeunload 추가
    const disablePrevent = () =>                                                          //listener 역활하는 beforeunload 제거
      window.removeEventListener("beforeunload", lisetner);
    return { enablePrevent, disablePrevent };
  };