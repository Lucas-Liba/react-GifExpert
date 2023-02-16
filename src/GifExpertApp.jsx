import { useState } from "react";
import { AddCategory,GifGrid } from "./components";


export function GifExpertApp() {
  const [categories, setCategories] = useState(["one punch"]);

  const onAddCategory = (newCategory) => {
    if(categories.includes(newCategory ))return
    setCategories([newCategory,...categories])
  };

  return (
    <>
      <h1>GiftExpertApp</h1>
      <AddCategory 
        onNewCategory={onAddCategory}>
      </AddCategory>

  
    {categories.map((category)=>(
    <GifGrid 
        key={ category }
        category={ category }>
        </GifGrid>
    ))
    }


      {/*gif Item*/}
    </>
  );
}
