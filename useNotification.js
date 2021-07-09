const useNotification = (title, options) => {
  if (!("Notification" in window)) {                              //!Notification => return
    return;
  }
  const fireNotif = () => {
    if (Notification.permission !== "granted") {                  //permission != granted
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {                                                      //permisson = granted
      new Notification(title, options);
    }
  };
  return fireNotif;
};