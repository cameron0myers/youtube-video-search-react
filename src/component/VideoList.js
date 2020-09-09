import React, { Fragment } from "react";
import { Item, Header, Label, List } from "semantic-ui-react";
import styled from "styled-components";

import VideoItem from "./VideoItem";

const FullWidthLabel = styled(Label)`
  width: 100%;
`;

const ScrollList = styled(List)`
  height: 300px;
  overflow-y: auto;
`;

const VideoList = ({ videos, title, onSelectVideo }) => (
  <Fragment>
    <Item>
      <FullWidthLabel>
        <Header as="h3">{title}</Header>
      </FullWidthLabel>
    </Item>
    <ScrollList relaxed divided>
      {videos.map(video => (
        <VideoItem
          key={video.id.videoId}
          video={video}
          onSelectVideoItem={onSelectVideo}
        />
      ))}
    </ScrollList>
  </Fragment>
);

export default VideoList;
