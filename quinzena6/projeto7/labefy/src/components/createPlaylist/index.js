import React from "react";
import styled from "styled-components";
import axios from "axios";

const PlaylistCreationForm = styled.form`
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

class PlaylistCreation extends React.Component {
  state = {
    textPlaylist: ""
  }

  onChangePlaylistInput = (event) => {
    this.setState({ textPlaylist: event.target.value });
  };

  createPlaylist = () => {
    const body = {
      name: this.state.textPlaylist,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        body,
        {
          headers: {
            Authorization: "bruno-santos-muyembe",
          },
        }
      )
      .then(() => {
        this.setState({ textPlaylist: "" });
        alert("SUCESSO!");
      })
      .catch(() => {
        alert("ERRO!");
      });
  };

  render() {
    return (
      
        <PlaylistCreationForm onSubmit={this.createPlaylist}>
          <label><h2>Cadastre uma nova Playlist</h2></label>
          <input
            placeholder={"Nome da Playlist"}
            value={this.state.textoPlaylist}
            onChange={this.onChangePlaylistInput}
          />
          <button type="submit">Cadastrar Playlist</button>
        </PlaylistCreationForm>
      
    );
  }
}

export default PlaylistCreation;
