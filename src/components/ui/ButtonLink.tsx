import { Button, ButtonProps } from "@chakra-ui/button";
import FlexibleLink, { FlexibleLinkProps } from "./FlexibleLink";

/**
 * A button that acts as a link
 *
 * @param props The props
 * @param props.href The link destination
 * @param [props.useNextLink] see 'FlexibleLinkProps'
 * @param [props.nextLinkProps] see 'FlexibleLinkProps'
 * @param [props.chakraLinkProps] see 'FlexibleLinkProps'
 * @returns Component stuff
 */
const ButtonLink: React.FC<ButtonProps & FlexibleLinkProps> = ({
	href,
	useNextLink,
	nextLinkProps,
	chakraLinkProps,
	...props
}) => {
	return (
		<FlexibleLink
			href={href}
			useNextLink={useNextLink}
			nextLinkProps={nextLinkProps}
			chakraLinkProps={chakraLinkProps}
		>
			<Button {...props} />
		</FlexibleLink>
	);
};

export default ButtonLink;
