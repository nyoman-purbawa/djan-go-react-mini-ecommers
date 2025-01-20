import { Container } from 'react-bootstrap';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';

export default function App() {
   return (
     <Router>
       <Header />
       <main>
         <Container>
           <Routes>
             <Route path="/" element={<HomeScreen />} />
             <Route path="/product/:id" element={<ProductScreen />} />
           </Routes>
         </Container>
       </main>
       <Footer />
     </Router>
   );
}
