import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { Link } from "react-router-dom";
export default function ProductCards({ allProducts }) {
  return (
    <div>
      {allProducts.map((product) => {
        return (
          <div key={product.id}>
            <Link to={"/shoes/" + product.id}>
              <ProductCard
                image={product.image}
                title={product.title}
                price={product.price}
                key={product.id}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
