import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {updateProfileImage} from "../../actions/userActions";
import {ImageFile, User} from "../../types/types";
import ProfilePictureInput from "../inputs/ProfilePictureInput";

type Props = {
	size: number;
	isAnimating?: boolean;
	user: User | null;
};

const ProfilePic: React.FC<Props> = ({size, isAnimating, user}) => {
	const dispatch = useDispatch();

	const [imageFile, setImageFile] = useState<ImageFile>(null);
	const [hasUploadedProfileImage, setHasUploadedProfileImage] = useState<boolean>(false);

	useEffect(() => {
		const data = new FormData();

		if (!imageFile) return;

		data.append("profilePictureInput", imageFile);

		dispatch(updateProfileImage(data));

		setImageFile(null);
		setHasUploadedProfileImage(false);
	}, [hasUploadedProfileImage]);

	const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setImageFile(e.target.files?.[0]);

		setHasUploadedProfileImage(true);
	};

	return (
		<>
			<Wrapper size={size} isAnimating={isAnimating}>
				<img
					src={
						user?.profilePicture
							? user.profilePicture
							: "https://storage.googleapis.com/poem-art-bucket/default-profile-image.jpg"
					}
					alt="profile image"
				/>
				<ProfilePictureInputWrapper>
					<ProfilePictureInput
						name="profilePictureInput"
						isFileSelected={Boolean(imageFile)}
						onChangeHandle={onChangeHandle}
					/>
					<p>Change Profile Picture</p>
				</ProfilePictureInputWrapper>
			</Wrapper>
		</>
	);
};

export default ProfilePic;

const Wrapper = styled.div<Omit<Props, "user">>`
	border-radius: 50%;
	overflow: hidden;
	height: ${props => `${props.size}em`};
	width: ${props => `${props.size}em`};
	margin: 0;
	box-shadow: var(--box-shadow);
	position: relative;

	img {
		height: inherit;
		width: inherit;
		object-fit: cover;
		object-position: 50% 50%;
		transition: transform 1s cubic-bezier(0.68, -0.6, 0.32, 1.6);

		:hover {
			transform: ${props => props.isAnimating && "rotate(360deg);"};
		}
	}

	:hover {
		div {
			display: block;
		}
	}
`;

const ProfilePictureInputWrapper = styled.div`
	display: none;
	background-color: #00000038;
	height: 50%;
	width: 100%;
	position: absolute;
	top: 64px;
	color: white;
	padding: 0.1em;

	p {
		margin: 0;
		padding: 0;
		text-align: center;
	}
`;
