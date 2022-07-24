import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useEffect, useState} from 'react'
import {getAllShoes, getAllBrands, filterByBrand} from "../../redux/actions"
import ProductCards from "../ProductCards/ProductCards"
import Pagination from "../Pagination/Pagination"
import Banner from "../Banner/Banner";
import NavBar from "../NavBar/NavBar";
import About from "../About/About"
import styles from "./HomePage.module.css"

export default function HomePage() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products);

  const [brandFilter, setBrandFilter] = useState("default") 

  //Paginado//
  const [currentPage, setCurrentPage] = useState(1);
  const [shoesPerPage, setShoesPerPage] = useState(12);
  const indexOfLastShoe = currentPage * shoesPerPage;
  const indexOfFirstShoe = indexOfLastShoe - shoesPerPage;
  const currentShoes = Array.isArray(allProducts) && allProducts.slice(indexOfFirstShoe, indexOfLastShoe)

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

  const handleFilterBrand = (e) => {
    
    dispatch(filterByBrand(e.target.value))
    setBrandFilter(e.target.value)
    setCurrentPage(1)

  }

  const handleReset = (e) => {
    e.preventDefault()
    dispatch(getAllShoes())
    setBrandFilter("default")
  }

  useEffect(() => {
    dispatch(getAllShoes());
    dispatch(getAllBrands())
  }, [dispatch]);



  return (
    <div>
      <NavBar setCurrentPage={setCurrentPage} handleReset={handleReset}></NavBar>
      <Banner></Banner>
      <div>
        <select onChange={(e) => handleFilterBrand(e)} value={brandFilter} >
          <option value={'default'} disabled >Marcas</option>
          <option value="Vans">Vans</option>
          <option value="Converse">Converse</option>
          <option value="Crocs">Crocs</option>
          <option value="Nike">Nike</option>
          <option value="Vizzano">Vizzano</option>
          <option value="adidas">Adidas</option>
          <option value="Caterpillar">Caterpillar</option>
          <option value="Moleca">Moleca</option>
          <option value="Faraon">Faraon</option>
        </select>
      </div>
      <div>
        <select onChange={(e) => handleFilterBrand(e)} value={brandFilter} >
          <option value={'default'} disabled >Categorias</option>
          <option value="Vans">Vans</option>
          <option value="Converse">Converse</option>
          <option value="Crocs">Crocs</option>
          <option value="Nike">Nike</option>
          <option value="Vizzano">Vizzano</option>
          <option value="adidas">Adidas</option>
          <option value="Caterpillar">Caterpillar</option>
          <option value="Moleca">Moleca</option>
          <option value="Faraon">Faraon</option>
        </select>
      </div>
      <Pagination
        shoesPerPage={shoesPerPage}
        allProducts={allProducts.length}
        pagination={pagination}
        nextPageButton={nextPageButton}
        prevPageButton={prevPageButton}
        currentPage={currentPage}
      />
      <div className={styles.cardContainer}>
        <div>
          {
            currentShoes ? <ProductCards allProducts={currentShoes} /> : <ProductCards allProducts={allProducts}/>
          }
        </div>
        <Pagination
        shoesPerPage={shoesPerPage}
        allProducts={allProducts.length}
        pagination={pagination}
        nextPageButton={nextPageButton}
        prevPageButton={prevPageButton}
        currentPage={currentPage}
      />
        <div><About/></div>
      </div>
      
      
    </div>
  );
}
