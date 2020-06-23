export default function useLocalStorage() {
  const storage = window.localStorage;

  const setItem = (key, value) => storage.setItem(key, JSON.stringify(value));

  const getItem = (key) => {
    return JSON.parse(storage.getItem(key));
  };

  const getAllItems = () =>
    Object.entries(storage).map((deck) => {
      const [name, cards] = deck;
      const parsedCards = JSON.parse(cards);
      return { name, cards: parsedCards };
    });

  const deleteItem = (key) => {
    delete storage[key];
  };

  const clear = () => storage.clear();

  return { setItem, getItem, getAllItems, deleteItem, clear };
}
