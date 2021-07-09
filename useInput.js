export const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (event) => {                         
      const {
        target: { value }
      } = event;
      let willUpdate = true;
      if (typeof validator === "function") {              //validator가 fucntion이면 validator 실행
        willUpdate = validator(value);
      }
      if (willUpdate) {                                   //validator 통과하면 setValue
        setValue(value);
      }
    };
    return { value, onChange };
  };