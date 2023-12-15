import { createContext, useEffect, useState } from "react";
import { data } from "../utils/data";

const setItem = (categoriesList, newCat) => {
  const item = categoriesList.find((category) => {
    return category.id === newCat.id;
  });
  if (item) {
    const data = categoriesList.map((category) => {
      return category.id === newCat.id
        ? { ...category, flag: true }
        : { ...category };
    });

    return data;
  }
};

const setCategoriesByRemove = (categoriesList, newCat) => {
  const item = categoriesList.find((category) => {
    return category.id === newCat.id;
  });
  if (item) {
    const data = categoriesList.map((category) => {
      return category.id === newCat.id
        ? { ...category, flag: false }
        : { ...category };
    });

    return data;
  }
};

export const CategoriesContext = createContext({
  categoriesList: [],
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesList, setCategoriesList] = useState(data);

  const setNewCategoryItem = (category) => {
    const val = setItem(categoriesList, category);
    setCategoriesList(val);
  };

  const setNewByRemove = (category) => {
    const val = setCategoriesByRemove(categoriesList, category);
    setCategoriesList(val);
  };

  const value = {
    categoriesList,
    setNewCategoryItem,
    setNewByRemove,
    setCategoriesList,
  };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
