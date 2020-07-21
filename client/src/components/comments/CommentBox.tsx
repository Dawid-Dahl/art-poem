import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import ProfilePic from "../profile/ProfilePic";

const CommentBox = () => {
	return (
		<>
			<Wrapper>
				<PresentationWrapper>
					<ProfilePicWrapper>
						<Link to={"/profile"}>
							<ProfilePic size={3} />
						</Link>
					</ProfilePicWrapper>
					<h2>Integral Monastery</h2>
					<h3>1h</h3>
				</PresentationWrapper>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus repudiandae
					labore nobis ipsum, placeat consequuntur sed, at eius beatae inventore eos ut
					fugit delectus hic odit!
				</p>
			</Wrapper>
		</>
	);
};

export default CommentBox;

const Wrapper = styled.div`
	border: 1px solid var(--light-grey-color);
	border-radius: var(--border-radius);
	padding: 1em;

	p {
		margin: 0;
		padding: 0;
		font-weight: lighter;
	}
`;

const PresentationWrapper = styled.div`
	display: flex;
	align-items: center;
	margin: 0;

	h2 {
		font-size: 0.9em;
		margin: 0 0.5em 0 0;
		font-weight: 600;
	}

	h3 {
		font-size: 0.8em;
		margin: 0;
		font-weight: lighter;
	}
`;
const ProfilePicWrapper = styled.div`
	margin: 0 0.5em 0.5em 0;

	@media only screen and (min-width: 1000px) {
		display: none;
	}
`;