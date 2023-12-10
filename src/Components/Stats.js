export default function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 📦</em>
      </footer>
    );
  }
  const num = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const packPercentage = Math.round((packedItems / num) * 100);
  return (
    <footer className="stats">
      <em>
        {packPercentage === 100
          ? "You got everything Ready to go ✈️"
          : `🧳 You have ${num} items on your list, and you already packed 
          ${packedItems} (${packPercentage}%)`}
      </em>
    </footer>
  );
}
