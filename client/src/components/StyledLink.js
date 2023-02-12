import { Link as ReactRouterDomLink } from "react-router-dom";

const Link = ({children, isActive,...props }) => {
	return <ReactRouterDomLink {...props}>{children}</ReactRouterDomLink>;
};

export const StyledLink = styled(Link)`
	box-sizing: border-box;
	display: block;
	padding: 4px 8px;
	margin: 0 auto;
	text-align: center;

	font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
`;