import React, { useEffect, useState } from 'react';


function LastMovieInDb(){

    let [product, setProduct] = useState([]);
    useEffect(()=>{
        fetch('/api/products')
        .then(res=> res.json())
        .then(data=>{
            let lastProduct = data.data[0][data.data[0].length-1];
            console.log('last product:', lastProduct);
            setProduct(lastProduct)
        })
        .catch(e=>console.log(e))
    },[])


    return(
        
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Producto más nuevo</h5>
                </div>
                <div className="card-body">
                <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">{product.productName}</div>
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={`http://localhost:8000/images/${product.img1}`}   alt=" Star Wars - Mandalorian "/>
                    </div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">Precio: ${product.price}</div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">Stock: {product.stock}</div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">Categoría: {product.name}</div>
           
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href={`http://localhost:8000/products/${product.id}`} >Ver detalle</a>
                </div>
            </div>
        </div>
    )
}

export default LastMovieInDb;
