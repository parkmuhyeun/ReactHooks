import { useEffect,useRef } from "react";

const useClick = onClick => {
    if(typeof onCLick !== "function"){                                          //onClick 함수아닐경우 return
        return;
    }
    const element = useRef();
    useEffect(() => {                                                          //onClick을 가진 useClick이 마운트 되었을때
        if(element.current){
            element.current.addEventListner("click", onClick);
        }
        return () => {                                                         //useClick이 언마운트 되었을때
            if(element.current){
                element.current.removeEventListner("click", onClick);
            }
        };
    },[]);
    return element;
}