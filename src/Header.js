import React from 'react';
import styled from 'styled-components';
import Palette from './palette';

const Content = styled.div`
	position: fixed;
	width: 100%;
	height: 120px;
	background-color: #c18bf3;
`;

const Title = styled.h2`
	margin: 10px 0 0;
	text-align: center;
`;

const Title1 = styled.h2`
	margin: 0 auto 0;
	text-align: center;

`;

const ItunesForm1 = styled.div`
	display: flex;
	
	align-items: center;
`;

const ItunesForm2 = styled.div`
	display: flex;
	
	align-items: center;
`;


const Button = styled.button`
  

	background-color: grey;
	display: flex;
	width: 100px;
	margin: 10px auto 0;
	
	border-radius: 2em;
	
	
	height: 25px;
	font-size: 10px;
	color: black;
	
	
	:hover {
		cursor: pointer;
		background-color: #3d7934};
	}
	:focus {
		outline-color: ${Palette('Secondary')};
	}
`;



const Input = styled.input`
	height: 25px;
	display: flex;
	width: 200px;
	margin: 10px auto 0;
	padding: 0 20px;
	background-color: White;
	color: black;
	font-size: 17px;
	::placeholder {
		color: #8d95c3;
	}
	:focus {
		outline-color: ${Palette('Secondary')};
	}
`;

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchText: '',
			searchMedia: 'all',
		};
	}

	handleSearchTextChange = event =>
		this.setState({ searchText: event.target.value });

	handleSearchMediaChange = event =>
		this.setState({ searchMedia: event.target.value });

	render() {
		const { mediaTypes, startSearch } = this.props;
		const { searchText, searchMedia } = this.state;
		const mediaOptions = mediaTypes.map(media => (
			<option value={media} label={media} key={media} />
		));
		return (
			<Content>
				<Title>MUSIC LIBRARY </Title>
				<ItunesForm1>
				<Input
						type="text"
						value={searchText}
						placeholder="Enter the desired ..."
						onChange={this.handleSearchTextChange}
					/>
				</ItunesForm1>

				<ItunesForm2>
					 <Button onClick={() => startSearch(searchText, searchMedia)}>
					 <Title1>Search </Title1>
						
				   </Button>
				</ItunesForm2>

			</Content>
		);
	}
}

export default Header;
