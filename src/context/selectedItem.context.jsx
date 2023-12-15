import { createContext, useState } from "react";

const addItem = (selectedItem, ItemTOAdd) => {
  const exist = selectedItem.find((ele) => {
    return ele.id === ItemTOAdd.id;
  });

  if (!exist) {
    return [...selectedItem, ItemTOAdd];
  } else {
    const newSelectedItem = selectedItem.filter((item) => {
      return item.id !== ItemTOAdd.id;
    });

    return [...newSelectedItem];
  }
};

const removeSelectedItem = (selectedItem, itemToRemove) => {
  const items = selectedItem.filter((category) => {
    category = { ...category, flag: false };
    return category.id !== itemToRemove.id;
  });

  return [...items];
};

export const selectedContext = createContext({
  selectedItem: [],
  isSelect: false,
});

export const SelectedProvider = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState([]);

  const handleAdd = (item) => {
    setSelectedItem(addItem(selectedItem, item));
  };
  const handleRemove = (item) => {
    setSelectedItem(removeSelectedItem(selectedItem, item));
  };
  const value = { selectedItem, handleAdd, handleRemove };

  return (
    <selectedContext.Provider value={value}>
      {children}
    </selectedContext.Provider>
  );
};
