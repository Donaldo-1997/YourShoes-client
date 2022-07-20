import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllShoes } from "../../redux/actions";
import ProductCards from "../ProductCards/ProductCards";
import Banner from "../Banner/Banner";
import Searchbar from "../SearchBar/SearchBar";

export default function HomePage() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAllShoes());
  }, [dispatch]);

  return (
    <div>
    <Searchbar></Searchbar>
      <Banner></Banner>
      <ProductCards allProducts={allProducts} />
    </div>
  );
}
