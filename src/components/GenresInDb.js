import React, { useState, useEffect } from "react";
import Category from "./Categories";

function GenresInDb() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {

      fetch('/api/categories')
          .then(response => response.json())
          .then(data => {
              console.log('categories', data.data);
              setCategories(data.data)

          })
          .catch(e => console.log('error', e));

  },[])

  let name = {
    name: 'hola'
  }
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Categorías
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
          

        {
          categories.map((category, i)=>{

            return <Category {...category} key={i} />

          })
        }

          </div>
        </div>
      </div>
    </div>
  );
}

export default GenresInDb;
