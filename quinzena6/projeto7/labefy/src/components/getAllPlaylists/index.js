import React from "react";
import styled from "styled-components";
import axios from "axios";
import PlaylistCard from "../PlaylistCard";

const PlaylistsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

class AllPlaylists extends React.Component {
  state = {
    playlists: []
  }

  componentDidMount() {
    this.getAllPlaylists();
  }

  getAllPlaylists = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        {
          headers: {
            Authorization: "bruno-santos-muyembe",
          },
        }
      )
      .then((resposta) =>
        this.setState({ playlists: resposta.data.result.list })
      )
      .catch((erro) => console.log(erro));
  };

  deletePlaylist = (playlistId) => {
    axios
      .delete(
        `"https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}"`,
        {
          headers: {
            Authorization: "bruno-santos-muyembe",
          },
        }
      )
      .then((resposta) => this.getAllPlaylists())
      .catch((erro) => console.log(erro));
  };

  render() {
    const playlists = this.state.playlists.map(playlist => {
        return <PlaylistCard 
            key={playlist.id}
            changePage={this.props.changePage}
            name={playlist.name}
            playlistId={playlist.id}
            deletePlaylist={this.deletePlaylist}
        />
    })

    return (
        <PlaylistsContainer>
            {playlists}
        </PlaylistsContainer>
    )
  }
}

export default AllPlaylists;
