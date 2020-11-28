import React, { useState } from 'react';
import { Collapse, CardBody, Card } from 'reactstrap';
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

<div className="centerBox">
  
  <div className="categoryWrapper">
    <h1>{status?"Videos":"Videos"}</h1>
    <button onClick={toggle}>
      <span>
        <span>
          <span data-attr-span={`${collapse?'Hide Videos':'See Videos'}`}>
            <i className={`fas fa-${collapse?'video-slash':'photo-video'}`}>{collapse?'Hide Videos':'See Videos'}</i>
          </span>
        </span>
      </span>
    </button>
  </div>
  
</div>
      
      <Collapse
        isOpen={collapse}
        onEntering={onEntering}
        onEntered={onEntered}
        onExiting={onExiting}
        onExited={onExited}
        className="vid"
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
