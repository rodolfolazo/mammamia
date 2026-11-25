import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useMe } from '../features/auth/hooks/useMe'
import { Alert, Spinner } from 'react-bootstrap'

import { useAuthContext } from '../features/auth/hooks/useAuthContext'

function Profile() {
  const { logoutUser } = useAuthContext()
  const { me, loading, error } = useMe()

  return (
    <Card style={{ width: '18rem' }} className='mx-auto mt-5'>
      <Card.Header>Profile</Card.Header>
      {loading && (<Spinner animation="border" /> )}

      {error && ( <Alert variant="danger">{error}</Alert> )}
      {!loading && !error &&me && (
        <Card.Body>
          <Card.Title>User Profile</Card.Title>
          <Card.Text>
            {me.email}
          </Card.Text>
          <Button variant="danger" onClick={logoutUser}>Cerrar sesión</Button>
        </Card.Body>
      )}
    </Card>
  );
}

export default Profile;
