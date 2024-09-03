/* eslint-disable react/no-unescaped-entities */
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { FaBirthdayCake, FaBuilding, FaHandsHelping, FaGlassCheers, FaBaby, FaUsers } from 'react-icons/fa';
import { MdCelebration } from 'react-icons/md';
import "../../../src/assets/Css/events/events.css"// Custom CSS for animations and styling

const EventsSection = () => {
  return (
    <section className="events-section py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <img 
              src="your-image-url-here.jpg" 
              alt="Art Event" 
              className="img-fluid rounded shadow-lg animate-img" 
            />
          </Col>
          <Col md={6}>
            <h2 className="mb-4">Join us for unforgettable art events at CAD!</h2>
            <p className="lead">
              Where self-expression meets joy. Our hassle-free parties and private events offer:
            </p>
            <ListGroup variant="flush" className="event-details mb-4">
              <ListGroup.Item className="d-flex align-items-center animate-list-item">
                <MdCelebration className="icon text-primary me-2" /> 
                Fully customized art experiences tailored to your goals and interests
              </ListGroup.Item>
              <ListGroup.Item className="d-flex align-items-center animate-list-item">
                <MdCelebration className="icon text-secondary me-2" />
                1-on-1 professional art instruction in a warm, relaxing environment
              </ListGroup.Item>
              <ListGroup.Item className="d-flex align-items-center animate-list-item">
                <MdCelebration className="icon text-success me-2" />
                Hands-on art projects designed specifically for your celebration
              </ListGroup.Item>
              <ListGroup.Item className="d-flex align-items-center animate-list-item">
                <MdCelebration className="icon text-danger me-2" />
                Bonding and connection with guests in a fun and inspiring setting
              </ListGroup.Item>
              <ListGroup.Item className="d-flex align-items-center animate-list-item">
                <MdCelebration className="icon text-warning me-2" />
                Expert setup and cleanup, so you can focus on the fun!
              </ListGroup.Item>
            </ListGroup>
            <h4 className="mb-3">Choose from a variety of events, including:</h4>
            <ListGroup variant="flush" className="event-types">
              <ListGroup.Item className="d-flex align-items-center animate-list-item">
                <FaBirthdayCake className="icon text-primary me-2" /> Birthday Parties
              </ListGroup.Item>
              <ListGroup.Item className="d-flex align-items-center animate-list-item">
                <FaBuilding className="icon text-secondary me-2" /> Corporate Team Building
              </ListGroup.Item>
              <ListGroup.Item className="d-flex align-items-center animate-list-item">
                <FaHandsHelping className="icon text-success me-2" /> Fundraisers
              </ListGroup.Item>
              <ListGroup.Item className="d-flex align-items-center animate-list-item">
                <FaGlassCheers className="icon text-danger me-2" /> Ladies' Night Out
              </ListGroup.Item>
              <ListGroup.Item className="d-flex align-items-center animate-list-item">
                <FaBaby className="icon text-warning me-2" /> Baby and Bridal Showers
              </ListGroup.Item>
              <ListGroup.Item className="d-flex align-items-center animate-list-item">
                <FaUsers className="icon text-info me-2" /> Scout Events
              </ListGroup.Item>
              <ListGroup.Item className="d-flex align-items-center animate-list-item">
                <MdCelebration className="icon text-dark me-2" /> Any Group Celebration!
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default EventsSection;
