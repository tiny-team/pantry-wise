import { Button, Col, Container, Image, Row } from 'react-bootstrap';

/** The Home page. */
const Home = () => (
  <main>
    <Container id="landing-page" fluid className="pt-5">
      <Row className="d-flex justify-content-center align-items-center py-5">
        <Col xs={1} />
        <Col xs={6} className="pt-5">
          <h1>Track food. Save Time. Waste Less.</h1>
          <h5>Effortlessly organize every kitchen space, from pantry to freezer</h5>
          <Row className="align-items-center text-center pt-3">
            <Col xs={5}>
              <Button href="/auth/signup" className="btn btn-primary btn-lg">
                Sign Up
              </Button>
            </Col>
            <Col xs={3}>
              <Button href="/auth/signin" className="btn btn-secondary btn-lg">
                Sign In
              </Button>
            </Col>
          </Row>
        </Col>
        <Col xs={4}>
          <Image src="PantryWise_Logo.png" width="400px" />
        </Col>
      </Row>
      <Row className="d-flex justify-content-center px-5 py-5 text-center">
        <Col xs={3}>
          <Image src="ShoppingCart.png" width="300px" />
          <h2 className="pt-3">Smart Shopping</h2>
        </Col>
        <Col xs={3}>
          <Image src="food-basket.png" width="300px" />
          <h2 className="pt-3">Pantry Management</h2>
        </Col>
        <Col xs={3}>
          <Image src="Calendar.png" width="300px" />
          <h2 className="pt-3">Track Expiration</h2>
        </Col>
      </Row>
    </Container>
  </main>
);

export default Home;
