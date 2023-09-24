import { useState } from "react";
import Item from "./item.js";
export default function PackagingList({
  items,
  onDeleteItem,
  onTogggleItem,
  handleClearList,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItem;
  if (sortBy === "input") sortedItem = items;
  if (sortBy === "description")
    sortedItem = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItem = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItem.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onTogggleItem={onTogggleItem}
          />
        ))}
      </ul>
      <div children="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed statisics</option>
        </select>
        <button className="actions" onClick={() => handleClearList()}>
          Clear List
        </button>
      </div>
    </div>
  );
}
