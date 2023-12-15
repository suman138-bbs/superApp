import React, { useState } from "react";
import style from "./categories.module.css";
import Category from "../../components/category/category.component";
import { useContext } from "react";
import { selectedContext } from "../../context/selectedItem.context";
import { CategoriesContext } from "../../context/categories.context";
import ErrorIcon from "../../assets/ErrorIcon.svg";
import { useNavigate } from "react-router-dom";
const Categories = () => {
  const [error, setError] = useState(null);
  const { selectedItem, handleRemove } = useContext(selectedContext);
  const { setNewByRemove } = useContext(CategoriesContext);
  const navigate = useNavigate();
  const handleNextPage = () => {
    if (selectedItem.length < 3) {
      setError("Minimum 3 category required");
    } else {
      setError(null);
      localStorage.setItem("selectedItem", JSON.stringify(selectedItem));
      navigate("/dashbord");
    }
  };
  return (
    <div className={style.categoriesContainer}>
      <div className={style.selectedCate}>
        <div>
          <div className={style.selectedCatHeadline}>
            <div>
              <h1 className={style.heading}>Super app</h1>
            </div>
            <div>
              <p className={style.headline}>
                Choose your entertainment category
              </p>
            </div>
          </div>
          <div className={style.selectedItem}>
            {selectedItem.map((category) => {
              return (
                <div key={category.id}>
                  <p>{category.name}</p>
                  <button
                    onClick={() => {
                      handleRemove(category);
                      setNewByRemove(category);
                    }}
                  >
                    X
                  </button>
                </div>
              );
            })}
          </div>
          {error && (
            <div className={style.errorContainer}>
              <img src={ErrorIcon} alt="" />
              <p>{error}</p>
            </div>
          )}
        </div>
      </div>
      <div className={style.categoryList}>
        <Category handleNextPage={handleNextPage} />
      </div>
    </div>
  );
};

export default Categories;
