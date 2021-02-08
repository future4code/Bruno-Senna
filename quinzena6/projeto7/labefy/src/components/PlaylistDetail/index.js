import React from "react";
import styled from "styled-components";
import axios from "axios";
import TrackCard from "../TrackCard/index";

const PlaylistDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TrackCreationForm = styled.form`
  width: 100vw;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  div {
    display: flex;
    flex-direction: column;
  }
`;

class PlaylistDetail extends React.Component {
  state = {
    tracks: [],
    trackName: "",
    artist: "",
    url: "",
  };

  componentDidMount = () => {
    this.getPlaylistTracks();
  };

  getPlaylistTracks = () => {
    axios
      .get(
        `"https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}/tracks"`,
        {
          headers: {
            Authorization: "bruno-santos-muyembe",
          },
        }
      )
      .then((resposta) =>
        this.setState({ tracks: resposta.data.result.tracks })
      )
      .catch((erro) => console.log(erro));
  };

  removeTrackFromPlaylist = (trackId) => {
    axios
      .delete(
        `"https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}/tracks/${trackId}"`,
        {
          headers: {
            Authorization: "bruno-santos-muyembe",
          },
        }
      )
      .then(() => this.getPlaylistTracks)
      .catch((erro) => console.log(erro));
  };

  onChangeInput = (event) => {
    this.setState({[event.target.name]: event.target.value});
  };

  addTrackToPlaylist = (event) => {
    event.preventDefault();
    const body = {
      name: this.state.trackName,
      artist: this.state.artist,
      url: this.state.url,
    };

    axios
      .post(
          `"https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}/tracks"`, body,
          {
            headers: {
              Authorization: "bruno-santos-muyembe",
            },
          }
      )
      .then(() => {
        this.getPlaylistTracks();
      })
      .catch((erro) => {
        console.log(erro);
      });

    this.setState({
      trackName: "",
      artist: "",
      url: "",
    });
  };

  render() {
    const tracks = this.state.tracks.map((track) => {
      return (
        <TrackCard
          key={track.id}
          trackName={track.name}
          artist={track.artist}
          url={track.url}
          trackId={track.id}
          removeTrackFromPlaylist={this.removeTrackFromPlaylist}
        />
      );
    });

    return (
      <PlaylistDetailContainer>
        <TrackCreationForm onSubmit={this.addTrackToPlaylist}>
          <div>
            <label>Nome da música:</label>
            <input
              placeholder="Nome da música"
              name="trackName"
              value={this.state.trackName}
              onChange={this.onChangeInput}
            />
          </div>
          <div>
            <label>Artista:</label>
            <input
              placeholder="Nome do Artista"
              name="artist"
              value={this.state.artist}
              onChange={this.onChangeInput}
            />
          </div>
          <div>
            <label>URL da música:</label>
            <input
              placeholder="URL da música"
              name="url"
              value={this.state.url}
              onChange={this.onChangeInput}
            />
          </div>
          <button type="submit">Adicionar música</button>
        </TrackCreationForm>
        {tracks}
        <button onClick={() => this.props.changePage("playlists", "")}>
          Voltar para playlists
        </button>
      </PlaylistDetailContainer>
    );
  }
}

export default PlaylistDetail;
