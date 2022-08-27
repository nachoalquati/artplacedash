import React, { useEffect } from 'react';
import ChartRow from './ChartRow';
import { useState } from 'react'


function Chart() {
    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetch('/api/products')
            .then(response => response.json())
            .then(data => {
                console.log('', data);
                setProducts(data.data[0])

            })
            .catch(e => console.log('error', e));

    },[])

    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Stock</th>
                                <th>Precio</th>
                                <th>Categoría</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((product, i) => {
                                    return <ChartRow {...product} key={i} />
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;