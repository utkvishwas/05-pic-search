import React from "react";

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard">
        <p className="title">PIX</p>
        <div className="profile">
          <div className="dummyicon"></div>
        </div>
        <div className="menus">
          <div className="link">
            <img src={this.props.profile} alt="profile icon" />
            <p>Profile</p>
          </div>
          <div className="link">
            <img src={this.props.favorite} alt="favorite icon" />
            <p>Favorite</p>
          </div>
          <div className="link">
            <img src={this.props.logout} alt="logout icon" />
            <p>Logout</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
