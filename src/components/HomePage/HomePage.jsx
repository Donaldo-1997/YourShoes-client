import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useEffect, useState} from 'react'
import {getAllShoes} from "../../redux/actions"
import ProductCards from "../ProductCards/ProductCards"
import Pagination from "../Pagination/Pagination"
<<<<<<< HEAD
import Banner from "../Banner/Banner";
import NavBar from "../NavBar/NavBar";
import About from "../About/About"

export default function HomePage() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products);
=======
import About from '../About/About'
export default function HomePage(){
    const dispatch = useDispatch()
    const allProducts = useSelector(state => state.products) 
>>>>>>> f1c3e9a (Componente About hecho, falta funcionalidad)

  //Paginado//
  const [currentPage, setCurrentPage] = useState(1);
  const [shoesPerPage, setShoesPerPage] = useState(12);
  const indexOfLastShoe = currentPage * shoesPerPage;
  const indexOfFirstShoe = indexOfLastShoe - shoesPerPage;
  const currentShoes = allProducts.slice(indexOfFirstShoe, indexOfLastShoe);

  const pagination = (page) => {
    setCurrentPage(page);
  };

  const nextPageButton = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPageButton = () => {
    setCurrentPage(currentPage - 1);
  };
  //Paginado//

  useEffect(() => {
    dispatch(getAllShoes());
  }, [dispatch]);
  return (
    <div>
      <NavBar></NavBar>
      <Banner></Banner>
      <Pagination
        shoesPerPage={shoesPerPage}
        allProducts={allProducts.length}
        pagination={pagination}
        nextPageButton={nextPageButton}
        prevPageButton={prevPageButton}
        currentPage={currentPage}
      />
      <ProductCards allProducts={currentShoes} />
      <div><About/></div>
    </div>
  );
}
