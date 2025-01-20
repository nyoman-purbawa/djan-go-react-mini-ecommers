import { useParams } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap';
import products from '../products';

export default function ProductScreen() {
    // Menggunakan useParams untuk mendapatkan parameter dari URL
    const { id } = useParams();

    // Mencari produk berdasarkan ID
    const product = products.find(p => p._id === id);

    return (
        <div>
            {product ? product.name : 'Product not found'}
        </div>
    );
}
