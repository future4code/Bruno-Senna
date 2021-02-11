import React from "react";
import styled from "styled-components";
import AllPlaylists from "../getAllPlaylists";
import PlaylistDetail from "../PlaylistDetail";

const PlaylistManagerContainer = styled.div``;

class PlaylistManager extends React.Component {
  state = {
    currentPage: "AllPlaylists",
    playlistId: "",
  };

  changePage = (currentPage, playlistId) => {
    this.setState({
      currentPage: currentPage,
      playlistId: playlistId,
    })
  };

  render() {
    const renderCurrentPage = () => {
      if (this.state.currentPage === "AllPlaylists") {
        return <AllPlaylists changePage={this.changePage} />;
      } else if (this.state.currentPage === "playlistDetail") {
        return (
          <PlaylistDetail
            changePage={this.changePage}
            playlistId={this.state.playlistId}
          />
        );
      }
    };

    return (
      <PlaylistManagerContainer>{renderCurrentPage()}</PlaylistManagerContainer>
    );
  }
}

export default PlaylistManager;
