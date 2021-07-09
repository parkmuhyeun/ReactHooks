import { useEffect, useState } from "react";

export const useTitle = initialTitle => {                       //처음에 initialTitle을 setTitle
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);                               // Title이 변경될떄마다 updateTitle
  return setTitle;
};