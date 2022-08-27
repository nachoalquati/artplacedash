import React from 'react';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.productName}</td>
                    <td>{props.stock}</td>
                    <td>${props.price}</td>
                    <td>{props.name}</td>
                </tr>
            )
    }
    
        

export default ChartRow;