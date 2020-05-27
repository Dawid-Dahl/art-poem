import React, {useEffect} from "react";
import styled from "styled-components";
import {useSelector, useDispatch} from "react-redux";
import {RootState} from "../../store";
import ArtPoem from "./ArtPoem";
import {getAllPoems} from "../../actions/poemActions";
import Loading from "../Loading";

const ArtPoemGrid = () => {
	const poems = useSelector((state: RootState) => state.poemReducer.poems);
	const isLoading = useSelector((state: RootState) => state.loadingReducer.isLoading);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllPoems());
	}, []);

	return (
		<>
			<Wrapper>
				<Grid>
					{isLoading ? (
						<Loading />
					) : (
						poems?.map(({id, title, content, imageUrl, createdAt, likes}) => (
							<ArtPoem
								key={id}
								id={id}
								title={title}
								imageUrl={imageUrl}
								content={content}
								createdAt={createdAt}
								likes={likes}
							/>
						))
					)}
				</Grid>
			</Wrapper>
		</>
	);
};

export default ArtPoemGrid;

const Wrapper = styled.div`
	width: 80%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Grid = styled.div`
	height: 500px;
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 2em;
	align-items: center;
	justify-content: center;
`;
