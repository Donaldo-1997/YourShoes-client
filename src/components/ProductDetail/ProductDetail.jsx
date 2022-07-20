import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../../redux/actions";
import { useParams } from "react-router-dom";

export default function ProductDetail(props) {
  const dispatch = useDispatch();
  let { id } = useParams();
  console.log(id);
  useEffect(() => {
    dispatch(getDetails(id));
  }, [dispatch, id]);

  const myShoes = useSelector((state) => state.detail);
  return (
    <div>
      {
            myShoes
            ?<div>
                <img src={myShoes.image} alt="imgShoes not found" />
                <div>
                <h1>{myShoes.title}</h1>
                <h3>{myShoes.price}</h3>
                <h5>descripcion del producto</h5>
                </div>
                <div>
                    <h1>Size: </h1>
                    <select>
                        <option value="35">35</option>
                        <option value="36">36</option>
                        <option value="37">37</option>
                        <option value="38">38</option>
                        <option value="39">39</option>
                        <option value="40">40</option>
                        <option value="41">41</option>
                        <option value="42">42</option>
                        <option value="43">43</option>
                        <option value="44">44</option>
                    </select>
                    <button>Comprar</button>
                    <button>Añadir al carro</button>
                </div>
            </div>
            : <div>
            <img src="https://i.pinimg.com/originals/76/59/35/7659353c8fcde74a4c224dafd7a5eccf.gif" alt="Shoes" />
            <p>Loading...</p>
        </div>
      }
    </div>
  );
}
