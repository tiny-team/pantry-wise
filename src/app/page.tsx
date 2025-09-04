import { Col, Container, Image, Row } from 'react-bootstrap';

/** The Home page. */
const Home = () => (
  <main>
    <Container id="landing-page" fluid className="pt-5">
      <Row className="align-items-center">
        <Col xs={1} />
        <Col xs={6} className="pt-5">
          <h1>Effortlessly organize every kitchen space, from pantry to freezer</h1>
          <p>Quickly see what you have, what you&apos;re running low on, and avoid double-buying.</p>
          <Row className="align-items-center text-center">
            <Col xs={5}>
              <a href="/auth/signup" className="btn btn-primary btn-lg">
                Sign Up
              </a>
            </Col>
            <Col xs={3}>
              <a href="/auth/signin" className="btn btn-primary btn-lg">
                Sign In
              </a>
            </Col>
          </Row>
        </Col>
        <Col xs={4}>
          <Image src="PantryWise_Logo.png" width="500px" />
        </Col>
      </Row>
    </Container>
  </main>
);

export default Home;
