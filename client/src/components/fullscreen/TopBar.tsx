import React, {useEffect} from "react";
import LinkButton from "../LinkButton";
import styled from "styled-components";
import {useHistory} from "react-router-dom";

type Props = {
	title: string;
	buttonKind: "primary" | "white" | "black";
	backType: "history" | "main";
};

const TopBar: React.FC<Props> = ({title, buttonKind, backType}) => {
	const history = useHistory();
	return (
		<>
			<Wrapper>
				{backType === "history" ? (
					<LinkButton
						title="Back"
						linkTo="/main"
						kind={buttonKind}
						onClick={() => history.goBack()}
						customization="topBarButton"
					/>
				) : backType === "main" ? (
					<LinkButton title="Back" linkTo="/main" kind={buttonKind} />
				) : null}
				<TitleWrapper>
					<TopBarTitle>{title}</TopBarTitle>
				</TitleWrapper>
			</Wrapper>
		</>
	);
};

export default TopBar;

const Wrapper = styled.div`
	position: absolute;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding: 2em 0;
`;

const TitleWrapper = styled.div`
	position: absolute;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 2em 0;

	@media only screen and (max-width: 800px) {
		justify-content: flex-end;
	}
`;

const TopBarTitle = styled.h1`
	margin: 0px 10px;
	color: white;
	max-width: 200px;
	padding: 5px;
	border-radius: 5px;
	background-color: #00000029;
	text-align: center;
`;