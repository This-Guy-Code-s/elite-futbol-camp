import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import Player from './Player'


const Example = (props) => {
  const [collapse, setCollapse] = useState(false);
  const [status, setStatus] = useState('Closed');

  const onEntering = () => setStatus('Opening...');

  const onEntered = () => setStatus('Opened');

  const onExiting = () => setStatus('Closing...');

  const onExited = () => setStatus('Closed');

  const toggle = () => setCollapse(!collapse);

  return (
    <div>
      <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}><i className="fas fa-photo-video">Toggle</i></Button>
      <h5>See Videos: {status}{collapse?<i className="fas fa-video"></i>:<i className="fas fa-video-slash"></i>}</h5>
      <Collapse
        isOpen={collapse}
        onEntering={onEntering}
        onEntered={onEntered}
        onExiting={onExiting}
        onExited={onExited}
      >
        <Card>
          <CardBody>
           {collapse?<Player url='https://www.youtube.com/playlist?list=PLJLHax6Ng-KtQ9SJocnaIMZuVSQ4M-XHS'/>:''}
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default Example;
