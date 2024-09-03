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
          <Col md={12} className="mb-4 d-flex flex-lg-row flex-column justify-content-center gap-5 mb-md-0">
            <img 
              src="/Images/event-2.png" 
              alt="Art Event" 
              className="img-fluid col-lg-4 rounded shadow-lg animate-img" 
            />
            <img 
              src="/Images/event-1.png" 
              alt="Art Event" 
              className="img-fluid rounded col-lg-4 shadow-lg animate-img" 
            />
          </Col>
          <Col className='bg-custom-dark mt-5 text-center' md={12}>
           <div className='mb-4'>
           <h3 className="mb-2">Join us for unforgettable <span className='text-main'>art events</span> at CAD!</h3>
            <p>
              Where self-expression meets joy. Our hassle-free parties and private events offer:
            </p>
           </div>
            <ListGroup  className="event-details bg-custom-dark mb-4">
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
            <div className='mt-5 mb-4'>
            <h3 className="">Choose from a <span className='text-main'>variety</span> of events, including:</h3>
            </div>
            <ListGroup className="event-types">
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
