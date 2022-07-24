import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

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
            <h3>YOURSHOES</h3>
            <p>Elige tu marca</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            style={{ height: "500px" }}
            src="https://www.paris.cl/on/demandware.static/-/Sites/es_CL/dw0c086768/marketing/imagenes/zapatillas/banner_zapatillas_larga-vida_mar22.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>YOURSHOES</h3>
            <p>Chouse your Brand</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            style={{ height: "500px" }}
            src="https://intersport-f2e7.kxcdn.com/web/image/573531/ESPECIAL-ZAPATILLAS-BANNER-1280-X-333.jpg?access_token=a9bf158a-82e5-4174-b117-a4ec7170212d"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>YOURSHOES</h3>
            <p>Chouse your Brand</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
