import "./App.css";
import React from "react";
import styled from "styled-components";
import PlaylistButtons from './components/PlaylistButtons';
import PlaylistCreation from './components/createPlaylist';
import PlaylistManager from './components/PlaylistManager';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

class App extends React.Component {
  state = {
    currentPage: "PlaylistCreation",
  };

  changePage = (currentPage) => {
    this.setState({ currentPage: currentPage });
  };

  render() {
    const renderCurrentPage = () => {
      if (this.state.currentPage === "PlaylistCreation") {
        return <PlaylistCreation />;
      } else if (this.state.currentPage === "playlistManager") {
        return <PlaylistManager />;
      }
    };

    return (
      <AppContainer>
        <PlaylistButtons changePage={this.changePage} />
        {renderCurrentPage()}
      </AppContainer>
    );
  }
}

export default App;
