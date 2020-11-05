import React from "react";
import {typesMap} from "../../prop-types/prop-types";
import {AuthorizationStatus} from "../../const";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

const UserBlock = ({authorizationStatus, userAvatar}) => {
  let userBlock;
  switch (authorizationStatus) {
    case AuthorizationStatus.AUTH:
      userBlock = (
        <div className="user-block__avatar">
          <img src={userAvatar} alt="User avatar" width="63" height="63" />
        </div>
      );
      break;
    case AuthorizationStatus.NO_AUTH:
      userBlock = <Link to="/login" className="user-block__link">Sign in</Link>;
      break;
  }
  return (
    <div className="user-block">
      {
        userBlock
      }
    </div>
  );
};

const MapStateToProps = (state) => ({
  authorizationStatus: state.USER.authorizationStatus,
  userAvatar: state.USER.userAvatar,
});

UserBlock.propTypes = {
  authorizationStatus: typesMap.authorizationStatus,
  userAvatar: typesMap.userAvatar
};

export {UserBlock};
export default connect(MapStateToProps)(UserBlock);
