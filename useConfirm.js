const useConfirm = (message = "", onConfirm, onCancel) => {
    if (!onConfirm || typeof onConfirm !== "function") {             //onConfirm = false or function 아닌경우 return
      return;
    }
    if(onCancel && typeof onCancel !== "function"){                  //onCancel function 아닌경우 return
        return;
    }
    const confirmAction = () => {                                    
      if (confirm(message)) {                                        //confirm할수잇으면 onConfirm else onCancel
        onConfirm();
      }else{
        onCancel();
      }
    };
    return confirmAction;
  };