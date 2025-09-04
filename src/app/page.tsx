'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Card, ListGroup } from 'react-bootstrap';

/** PantryWise mockup page */
const Home = () => (
  <main>
    <Container fluid className="py-3">
      <Row>
        {/* Sidebar */}
        <Col xs={2} className="bg-light border-end vh-100">
          <ListGroup variant="flush">
            <ListGroup.Item action active>Pantries</ListGroup.Item>
            <ListGroup.Item action>Fridges</ListGroup.Item>
            <ListGroup.Item action>Freezers</ListGroup.Item>
            <ListGroup.Item action>Spice Rack</ListGroup.Item>
          </ListGroup>
          <Button variant="outline-secondary" className="mt-3 w-100">
            + Add Storage
          </Button>
        </Col>

        {/* Main Content */}
        <Col xs={10}>
          <Row className="mb-3">
            <Col><h2>Pantry</h2></Col>
            <Col className="text-end">
              <Button variant="outline-secondary">+ Add Item</Button>
            </Col>
          </Row>

          <Row className="g-3">
            {[
              { name: 'Flour', amount: '1 kg', status: 'Fresh', date: '14 Feb 2026', variant: 'success' },
              { name: 'Milk', amount: '2 L', status: 'Expired', date: '1 Sep 2025', variant: 'danger' },
              { name: 'Peanut Butter', amount: '750 g', status: 'Fresh', date: '05 Dec 2025', variant: 'success' },
              { name: 'Tomatoes', amount: '1 can', status: 'Expires Soon', date: '12 Sep 2025', variant: 'warning' },
              { name: 'Olive Oil', amount: '500 ml', status: 'Fresh', date: '23 Jan 2026', variant: 'success' },
              { name: 'Garlic Powder', amount: '50 g', status: 'Fresh', date: '15 Jan 2026', variant: 'success' },
            ].map((item) => (
              <Col xs={4} key={item.name}>
                <Card>
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text className="text-muted">{item.amount}</Card.Text>
                    <span className={`badge bg-${item.variant}`}>{item.status}</span>
                    <Card.Text className="mt-2 text-secondary">{item.date}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  </main>
);

export default Home;
