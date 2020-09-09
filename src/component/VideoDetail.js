import React, { Fragment } from "react";
import { Embed, Header, Segment } from "semantic-ui-react";
import styled from "styled-components";

const Paragraph = styled.p`
  white-space: pre-line;
`;

const VideoDetail = ({ video }) => {
  if (!video) {
    return <Fragment />;
  }

  return (
    <Segment>
      <Embed
        id={video.id.videoId}
        placeholder={video.snippet.thumbnails.high.url}
        source="youtube"
      />
      <Header as="h2">{video.snippet.title}</Header>
      <Paragraph>{video.snippet.description}</Paragraph>
    </Segment>
  );
};

export default VideoDetail;
