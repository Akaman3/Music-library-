import React from 'react';
import styled from 'styled-components';
import Palette from './palette';

const Card = styled.div`
  flex-direction: column;
	height: 200px;
	width: 150px;
	display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  white-space: nowrap;
	margin: 10px 5px;
	padding: 5px;
	background-color: #8391b9};
	color: #4c4c4c;
	:hover {
		box-shadow: 0 0 0.75rem ${Palette('Secondary', 'dark')};
	}
`;

const CardText = styled.div`
	overflow: hidden;
	text-overflow: ellipsis;
`;



const Item = ({ kind, artistName, trackName, artworkUrl100 }) => (
	<Card>
		
	  <img src={artworkUrl100} />
		<CardText>{artistName}</CardText>
	  <CardText>{trackName}</CardText>
    	
	</Card>
  	
);

export default Item;
