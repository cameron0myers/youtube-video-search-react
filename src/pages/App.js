import React, { useEffect, useState } from "react";
import { Container, Segment, Grid } from "semantic-ui-react";

import SearchBar from "../component/SearchBar";
import YouTube from "../api/youtube";
import VideoDetail from "../component/VideoDetail";
import VideoList from "../component/VideoList";

const App = () => {
  const [searchedVideos, setSearchedVideoList] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const _search = async term => {
    try {
      const {
        data: { items }
      } = await YouTube.get("/search", {
        params: { q: term }
      });
      setSearchedVideoList(items);
      _getVideoDetail(items[0].id.videoId);
    } catch (error) {
      console.log(error);
      setSelectedVideo(null);
    }
  };

  const _getVideoDetail = async id => {
    try {
      const {
        data: { items }
      } = await YouTube.get("/videos", {
        params: { id, part: "topicDetails, statistics, snippet" }
      });
      setSelectedVideo(items[0]);
      console.log(items[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    _search("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <SearchBar onSubmit={_search} count={searchedVideos.length} />
      <Segment>
        <Grid>
          <Grid.Column computer={8} tablet={16}>
            <VideoDetail video={selectedVideo} />
          </Grid.Column>
          <Grid.Column computer={8} tablet={16}>
            <VideoList
              title="Search Result"
              videos={searchedVideos}
              onSelectVideo={_getVideoDetail}
            />
          </Grid.Column>
        </Grid>
      </Segment>
    </Container>
  );
};

export default App;
