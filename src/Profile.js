import React, { useState, useEffect } from 'react';
import "./styles.css";

const Profile = props => {
  const [profileState, setProfileState] = useState(props);

  useEffect(() => {
    setProfileState(props);
  }, [props]);

  return (
    <div>
      <p>
        <strong>Name: </strong>
        { profileState.name }
      </p>
      <p>
        <strong>Email: </strong>
        { profileState.email }
      </p>
    </div>
  );
};

export default Profile;