//import './Footer.css';
import { Container, Row, Col } from 'react-bootstrap';
function Footer(){
    return(
       /* <div className="contenedor-footer">
            <p>Aca va el footer</p>
        </div>*/

        
            <footer className="bg-gray-800 text-white py-8">
              <Container>
                <Row>
                  <Col md={3} className="mb-4">
                    <h3 className="text-lg font-bold mb-2">Be the first to know about new arrivals, sales & more.</h3>
                    <input type="email" placeholder="Enter your email" className="border px-4 py-2 w-full mb-4" />
                    <p>California residents, please see the Financial Incentive Terms for terms.</p>
                  </Col>
                  <Col md={3} className="mb-4">
                    <h3 className="text-lg font-bold mb-2">CUSTOMER SERVICE</h3>
                    <ul>
                      <li>Contact Us</li>
                      <li>Shipping Information</li>
                      <li>Returns & Exchanges</li>
                      <li>Safety Recalls</li>
                      <li>State Disclosures</li>
                      <li>Email Preferences</li>
                      <li>Site Feedback</li>
                    </ul>
                  </Col>
                  <Col md={3} className="mb-4">
                    <h3 className="text-lg font-bold mb-2">OUR COMPANY</h3>
                    <ul>
                      <li>About Us</li>
                      <li>Chuck Williams</li>
                      <li>Our Original Sonoma Store</li>
                      <li>Williams-Sonoma Inc.</li>
                      <li>Sustainability</li>
                      <li>Wedding & Gift Registry</li>
                      <li>Careers</li>
                    </ul>
                  </Col>
                  <Col md={3} className="mb-4">
                    <h3 className="text-lg font-bold mb-2">BUSINESS TO BUSINESS</h3>
                    <ul>
                      <li>Contract</li>
                      <li>Trade</li>
                      <li>B2B Overview</li>
                      <li>Professional Chefs</li>
                      <li>Corporate Gifting</li>
                    </ul>
                  </Col>
                </Row>
                <Row>
                  <Col md={12} className="mb-4">
                    <p className="text-center">© 2024 Georgina Gisela Bosque, All Rights Reserved</p>
                  </Col>
                </Row>
              </Container>
            </footer>
        
    )
}
export default Footer;
