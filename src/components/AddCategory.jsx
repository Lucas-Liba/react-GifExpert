import { useState } from "react";

export function AddCategory({onNewCategory}) {


  const [inputValue, setInputValue] = useState("");


  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };


  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length<1) return;
    // console.log(inputValue);
    // setCategories(categories =>[inputValue,...categories])
    onNewCategory(inputValue.trim())
    setInputValue('')

  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gif"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
}
