import React, { useEffect } from 'react';
import ChartRow from './ChartRow';
import { useState } from 'react'

let tableRowsData = [
    {
        Title: 'Billy Elliot ',
        Length: '123',
        Rating: '5',
        Categories: ['Drama', 'Comedia'],
        Awards: 2
    },
    {
        Title: 'Alicia en el país de las maravillas',
        Length: '142',
        Rating: '4.8',
        Categories: ['Drama', 'Acción', 'Comedia'],
        Awards: 3
    },

]


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