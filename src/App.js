import { useState } from "react";
import Logo from "./logo.js";
import Form from "./form.js";
import Stats from "./stats.js";
import PackagingList from "./packagingList.js";

let initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

export default function App() {
  const [items, setItems] = useState(initialItems);

  function handleAddItem(item) {
    setItems((item) => [...items, item]);
  }
  function handleClearList() {
    const confirmed = window.confirm("Do You Really Want To Delete The Items!");
    if (confirmed) setItems([]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggle(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackagingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onTogggleItem={handleToggle}
        handleClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
