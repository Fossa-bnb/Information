import React from 'react';

const HostInfo = (props) => {
  const varified = props.hostInfo.hostVarified ===true ? 'Varified' : '';
  return (
    <div>
      <h2>{ `Hosted by ${props.hostInfo.hostName}` }</h2>
      <div>{ `${props.hostInfo.hostLocation} · ${props.hostInfo.hostDateJoind}` }</div>
      <div>{`* ${props.hostInfo.hostReviews} Reviews   >${varified}`}</div>
      <hr />
      <p>{ props.hostInfo.hostDescription }</p>
      <div>Languages:</div>
      <div className="hostStats"> {`   ${props.hostInfo.hostLanguage}`}</div>
      <div>Response rate:</div>
      <div className="hostStats"> {`   ${props.hostInfo.hostResponceRate}%`}</div>
      <div>Response time:</div>
      <div className="hostStats"> {`   ${props.hostInfo.hostResponceTime}`}</div>
      <hr />
      <div className="hostStats">Always communicate through Airbnb · </div>
      <div>{ props.hostInfo.hostWarning }</div>
      <hr />
    </div>

  );
};

export default HostInfo;
