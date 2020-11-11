import React, {PureComponent} from "react";
import {typesMap} from "../../prop-types/prop-types";
import {AuthorizationStatus} from "../../const";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

class UserBlock extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {authorizationStatus, userAvatar} = this.props;
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
  }
}

UserBlock.propTypes = {
  authorizationStatus: typesMap.authorizationStatus,
  userAvatar: typesMap.userAvatar
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.USER.authorizationStatus,
  userAvatar: state.USER.userAvatar,
});

export {UserBlock};
export default connect(mapStateToProps)(UserBlock);
