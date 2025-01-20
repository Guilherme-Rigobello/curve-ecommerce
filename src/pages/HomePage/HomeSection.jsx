import { useState } from "react";
import ProductsFilters from "./ProductsFilters";
import ProductsContainer from "./ProductsContainer";


const HomeSection = () => {
  //femaleProducts
  const [femaleProducts, setFemaleProducts] = useState(null)
  return (
    <>
      <ProductsFilters setFemaleProducts={setFemaleProducts}/>
      <ProductsContainer femaleProducts={femaleProducts}/>
    </>
  );
};

export default HomeSection;
