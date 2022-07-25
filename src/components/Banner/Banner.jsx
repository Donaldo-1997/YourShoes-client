import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import styles from './Banner.module.css'

export default function Banner() {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            style={{ height: "500px" }}
            src="https://img.freepik.com/vector-premium/banner-venta-zapatillas-deporte_100562-29.jpg?w=2000"
            alt="First slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            style={{ height: "500px" }}
            src="https://newsolez.com/wp-content/uploads/2018/02/banner_addidas_originals_promo_b7ad4407-7dd0-4ca9-8881-29d04bbda68a_1600x681-e1563918699775.png"
            alt="Second slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            style={{ height: "500px" }}
            src="https://www.fotoefectos.com/images/202207/25/fotoefectos.com__final_7229072012361613604_.jpg?act=96"
            alt="Third slide"
          />
          <Carousel.Caption>
          <div className={styles.yourShoes}>Your<span>Shoes</span></div>
            <p>Elige tu marca</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
