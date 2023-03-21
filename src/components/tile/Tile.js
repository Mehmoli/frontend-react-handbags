import React from 'react';

function Tile({ image, altText, title, children }) {
    return (
        <section>
            {image && <img src={image} alt={altText} />}
            {title && <h2>{title}</h2>}
            {children}
        </section>
    );
}

export default Tile;