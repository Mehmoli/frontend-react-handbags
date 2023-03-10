import React from 'react';

function Product({productLabel, image, altText, productName, price}) {
    return (
        <article>
            <span>{productLabel}</span><img src={image} alt={altText}/><p>{productName}</p><h4>€{price}</h4>
        </article>
    );
}

export default Product;

