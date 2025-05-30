import React, { useEffect, useState } from "react";
import { getProfile } from "../../api/authApi";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
	const [profile, setProfile] = useState({});
	const { id } = useParams();
	useEffect(() => {
		const fetchProfile = async () => {
			try {
				const { data } = await getProfile(id);
				setProfile(data);
				// console.log(res);
			} catch (error) {
				console.log(error);
			}
		};

		fetchProfile();
	}, []);
	return (
		<div>
			<h1>Profile</h1>
			<h1>{profile.username}</h1>
			<p>{profile.email}</p>
		</div>
	);
};

export default ProfilePage;
