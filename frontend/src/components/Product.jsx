import { Card, Button } from 'react-bootstrap';
import Rating from './Rating';
import { Link } from 'react-router-dom';

export default function Product({ product }) {
    return (
      
        <Card key={product._id} style={{ width: '18rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            
            <Link to={`/product/${product._id}`}>  
                <Card.Img
                    variant="top"
                    src={product.image}
                    alt={product.name}
                />
            </Link>
            
            <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Card.Text>
                        <strong>Brand:</strong> {product.brand}<br />
                        <strong>Price:</strong> ${product.price.toFixed(2)}<br />
                        <strong>Stock:</strong> {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}<br />
                        <Rating value={product.rating} />
                    </Card.Text>
                </div>
                <Button variant="primary" style={{ marginTop: 'auto' }}>Add to Cart</Button>
            </Card.Body>
        </Card>
    );
}
