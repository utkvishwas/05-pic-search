import React from "react";
import Profile from "./images/profile.png";
import Favorite from "./images/favorite.png";
import Logout from "./images/logout.png";
import Dashboard from "./Dashboard";
import Search from "./Search";
import Results from "./Result";
import axios from "axios";

class Home extends React.Component {
  state = { imagelist: [] };
  onSearchSubmit = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term,
      },
      headers: {
        Authorization: "Client-ID SeifiGecj_Q0HLYEoHTTvaMZhck9DtvLWoyRBugegpo",
      },
    });

    this.setState({ imagelist: response.data.results });
  };
  render() {
    return (
      <div>
        <main>
          <div className="glass">
            <Dashboard profile={Profile} favorite={Favorite} logout={Logout} />
            <div className="mainsection">
              <Search childtoparent={this.onSearchSubmit} />
              <Results resultdata={this.state.imagelist} />
            </div>
          </div>
        </main>
        <div className="circle1"></div>
        <div className="circle2"></div>
      </div>
    );
  }
}

export default Home;
