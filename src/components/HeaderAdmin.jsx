import React from "react";
import styled from "@emotion/styled";

const Header = styled.header`
	background-color: #282c34;
	color: white;
	padding: 20px;
`;
const HeaderAdmin = () => {
	return (
		<Header>
			<h1>Xin chào Admin,</h1>
		</Header>
	);
};

export default HeaderAdmin;
