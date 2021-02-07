export const clearStorage = () => localStorage.clear();

export const getItemFromStorage = (key) => {
  if (!localStorage) return;

  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (err) {
    console.error(`Error getting item ${key} from localStoragee`, err);
  }
};

export const storeItem = (key, item) => {
  if (!localStorage) return;

  try {
    return localStorage.setItem(key, JSON.stringify(item));
  } catch (err) {
    console.error(`Error storing item ${key} to localStoragee`, err);
  }
};

export const removeItemFromStorage = (key) => {
  if (!localStorage) return;

  try {
    return localStorage.removeItem(key);
  } catch (err) {
    console.error(`Error removing item ${key} from localStoragee`, err);
  }
};
