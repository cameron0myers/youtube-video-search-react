import React from "react";
import { Item } from "semantic-ui-react";
import styled from "styled-components";

const Preview = styled(Item.Image)`
  object-fit: contain;
`;

const VideoItem = React.memo(({ video, onSelectVideoItem }) => (
  <Item onClick={() => onSelectVideoItem(video.id.videoId)}>
    <Preview
      rounded
      alt={video.snippet.description}
      src={video.snippet.thumbnails.default.url}
    />
    <Item.Content>
      <Item.Header as="h4">{video.snippet.title}</Item.Header>
      <Item.Meta>Description</Item.Meta>
      <Item.Description>{video.snippet.description}</Item.Description>
    </Item.Content>
  </Item>
));

export default VideoItem;
