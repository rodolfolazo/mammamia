import Card from 'react-bootstrap/Card';
import { Link } from 'react-router';

const NotFound = () => {
  return (
    <>
      <Card style={{ width: '18rem' }} className="mx-auto mt-5">
        <Card.Header>404</Card.Header>
        <Card.Body>
          <Card.Title>Not Found</Card.Title>
          <Card.Text>
            The page you are looking for might have been removed had its name changed or is temporarily unavailable.
          </Card.Text>
          <Link to="/">Home Page </Link>
          </Card.Body>
        </Card>
    </>
  );
};

export default NotFound;
