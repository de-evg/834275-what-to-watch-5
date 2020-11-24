import React from "react";
import {AuthorizationStatus} from "../../const";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import userBlockProps from "./user-block.props";

const UserBlock = ({authorizationStatus, userAvatar}) => {
  return (
    <div className="user-block">
      {
        authorizationStatus === AuthorizationStatus.AUTH
          ? (
            <div className="user-block__avatar">
              <Link to={`/myList`} >
                <img src={userAvatar} alt="User avatar" width="63" height="63" />
              </Link>
            </div>
          )
          : <Link to="/login" className="user-block__link">Sign in</Link>
      }
    </div>
  );
};

UserBlock.propTypes = userBlockProps;

const mapStateToProps = (state) => ({
  authorizationStatus: state.USER.authorizationStatus,
  userAvatar: state.USER.userAvatar,
});

export {UserBlock};
export default connect(mapStateToProps)(UserBlock);
