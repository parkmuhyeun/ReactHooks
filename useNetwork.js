import { useState, useEffect } from "react";

export const useNetwork = onChange => {
  const [status, setStatus] = useState(navigator.onLine || true);
  const handleChange = () => {
    if (onChange && typeof onChange === "function") {          //navigator.onLine = online일때 true , offline일때 false return                      
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);            //online일때 handleChange실행되는 event 추가
    window.addEventListener("offline", handleChange);           //offline일때 handleChange실행되는 event 추가
    () => {
      window.removeEventListener("online", handleChange);       //online일때 handleChange실행되는 event 제거
      window.removeEventListener("offline", handleChange);      //offline일때 handleChange실행되는 event 제거
    };
  }, []);
  return status;
};