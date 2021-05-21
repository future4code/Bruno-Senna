import React from "react";
import styled from "styled-components";

const HeaderContent = styled.div`
  display: flex;
  justify-content: center;
  background-color: #107369;
`;

const PlaylistButtons = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  border-radius: 3px;
  border: 2px solid #161c40;
  color: #161c40;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

const componentesPlaylist = (props) => {
  return (
    <HeaderContent>
      <h2>DEV Playlists</h2>
      <PlaylistButtons>
        <Button onClick={() => props.changePage("PlaylistCreation")}>
          Criação Playlist
        </Button>
        <Button onClick={() => props.changePage("playlistManager")}>
          Gerenciar Playlists
        </Button>
      </PlaylistButtons>
    </HeaderContent>
  );
};

export default componentesPlaylist;
