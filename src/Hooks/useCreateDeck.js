export default function useCreateDeck() {
  const repeat = (x, f) => {
    let cards = [];
    while (x > 0) {
      cards.push(f());
      x -= 1;
    }
    return cards;
  };

  const shuffleDeck = (deck) => {
    deck = [...deck];
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }

    return deck;
  };

  const createDeck = (deck) => {
    deck = [...deck];
    return deck.reduce((deck, card) => {
      const cards = repeat(card.qty, () => {
        return { name: card.name, url: card.url };
      });

      return [...deck, ...cards];
    }, []);
  };

  return { createDeck, shuffleDeck };
}
