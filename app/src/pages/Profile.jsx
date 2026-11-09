import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Profile() {
  return (
    <Card style={{ width: '18rem' }} className='mx-auto mt-5'>
      <Card.Header>Profile</Card.Header>
      <Card.Body>
        <Card.Title>User Profile</Card.Title>
        <Card.Text>
          rodolfo.lazo@yahoo.com
        </Card.Text>
        <Button variant="danger" >Cerrar sesión</Button>
      </Card.Body>
    </Card>
  );
}

export default Profile;
