import React from 'react';
import styles from './styles.css';

const HostInfo = (props) => {
  const varified = props.hostInfo.hostVerified === true ? 'Verified' : '';
  return (
    <div>
      <h2>{ `Hosted by ${props.hostInfo.hostName}` }</h2>
      <div>{ `${props.hostInfo.hostLocation} · ${props.hostInfo.hostDateJoined}` }</div>
      <div>{`* ${props.hostInfo.hostReviews} Reviews`}</div>
      <div>{varified}</div>
      <hr />
      <p>{ props.hostInfo.hostDescription }</p>
      <div>Languages:</div>
      <div className="boldText"> {`   ${props.hostInfo.hostLanguage}`}</div>
      <div>Response rate:</div>
      <div className="boldText"> {`   ${props.hostInfo.hostResponseRate}%`}</div>
      <div>Response time:</div>
      <div className="boldText"> {`   ${props.hostInfo.hostResponseTime}`}</div>
      <hr />
      <div className="boldText">Always communicate through Airbnb · </div>
      <div>{ props.hostInfo.hostWarning }</div>
      <hr />
    </div>

  );
};

export default HostInfo;
