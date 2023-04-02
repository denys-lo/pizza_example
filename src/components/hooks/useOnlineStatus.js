import {useEffect, useState} from "react";

function useOnlineStatus() {
  const [online, setOnline]  = useState(true);

  useEffect(() => {
    const off = window.addEventListener('offline', () => setOnline(false));
    const on = window.addEventListener('online', () => setOnline(true));

    // После Unmountig мы отписываемся от ивент-листенерив off и on
    return () => {
      window.removeEventListener('offline', off);
      window.removeEventListener('online', on);
    }
  }, []);

  // Возвращаем state online, чтобы использовать эту функцию как хук
  return online;
}

export default useOnlineStatus;
