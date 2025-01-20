import React from 'react';

import Product from '../components/Product';

import products from '../products';

function HomeScreen() {
    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            gap: '20px',
            padding: '20px',
        }}>

            {
products.map(product => (
    <Product product={product} />
 ))
            }




        </div>
        
       
    );
    
}

export default HomeScreen;
