import React from 'react';
import SmallCard from './SmallCard';
import { useState, useEffect } from 'react'

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */


function ContentRowMovies() {
    let moviesInDB = {
        title: 'Total de productos',
        color: 'primary',
        cuantity: 21,
        icon: 'fa-clipboard-list'
    }

    /* <!-- Total awards --> */

    let totalAwards = {
        title: ' Total de Usuarios',
        color: 'success',
        cuantity: '79',
        icon: 'fa-award'
    }

    /* <!-- Actors quantity --> */

    let actorsQuantity = {
        title: 'Total de categorías',
        color: 'warning',
        cuantity: '49',
        icon: 'fa-user-check'
    }

    let cartProps = [moviesInDB, totalAwards, actorsQuantity];
    const [products, setProducts] = useState([]);

    useEffect(() => {
        console.log('products', products);
        let productsAPI = fetch('/api/products').then(res=> res.json());
        let usersAPI = fetch('/api/users').then(res=> res.json());
        let categoriesAPI = fetch('/api/categories').then(res=> res.json());
            Promise.all([productsAPI,usersAPI,categoriesAPI])
            .then(data => {
                console.log();
                console.log('asdasd', data);
                setProducts([{
                    title: 'Total de productos',
                    color: 'primary',
                    cuantity: data[0].count,
                    icon: 'fa-clipboard-list'
                }, {
                    title: ' Total de Usuarios',
                    color: 'success',
                    cuantity: data[1].count,
                    icon: 'fa-award'
                }, {
                    title: 'Total de categorías',
                    color: 'warning',
                    cuantity: data[2].data.length,
                    icon: 'fa-user-check'
                }])

            })
            .catch(e => console.log('error', e));

    }, [])


    return (

        <div className="row">

            {products.map((product, i) => {

                return <SmallCard {...product} key={i} />

            })}

        </div>
    )
}

export default ContentRowMovies;