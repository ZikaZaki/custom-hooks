import { useCallback, useState, useEffect }from "react";

export function useLocalStorage(key, initialValue) {
    return useStorage(key, initialValue, window.localStorage);
}

export function useSessionStorage(key, initialValue) {
    return useStorage(key, initialValue, window.sessionStorage);
}

function useStorage(key, initialValue, storageObject) {
  const [value, setValue] = useState(() => {
    const jsonValue = storageObject.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof initialValue === "function") {
        return initialValue();
    } else {
        return initialValue;
    }
  });

  useEffect(() => {
    if (value === undefined) return storageObject.removeItem(key);
    storageObject.setItem(key, JSON.stringify(value));
  }, [key, value, storageObject]);

  const remove = useCallback(() => {
    setValue(undefined);
  }, []);

  return [value, setValue, remove];
}
