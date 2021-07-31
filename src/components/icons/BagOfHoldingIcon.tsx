import { useColorModeValue } from "@chakra-ui/color-mode";
import Icon, { IconProps } from "@chakra-ui/icon";
import { useToken } from "@chakra-ui/system";

//Icon Source: https://www.iconfinder.com/icons/2711191/christmas_gift_line_sack_santa_icon

interface BagOfHoldingIconProps extends IconProps {
	thickStroke?: boolean;
	showCreaseLines?: boolean;
}

/**
 * Icon of a bag of holding
 *
 * @param props The props
 * @param [props.showCreaseLines=false] If true,
 * shows two extra lines in the icons that represent creases
 * in the bag
 * @param [props.thickStroke=false] If true, applies
 * a thick stroke to the icon. Should be used when showing a
 * small version of the icon, eg; The home link in the top nav
 * @returns Component stuff
 */
const BagOfHoldingIcon: React.FC<BagOfHoldingIconProps> = ({
	showCreaseLines = false,
	thickStroke = false,
	...props
}) => {
	const strokeColor = useToken(
		"colors",
		useColorModeValue("gray.800", "gray.50")
	);

	const sharedProps = {
		fill: "currentColor",
		...(thickStroke ? { strokeWidth: 20, stroke: strokeColor } : {}),
	};

	return (
		<Icon {...props} viewBox="0 0 500 510">
			<path
				{...sharedProps}
				id="svg_2"
				d="m254.2,502.4c-50.7,0 -102.9,-2.5 -141.1,-20.5c-40.9,-19.3 -60.7,-54.1 -60.7,-106.4c0,-37.8 14.9,-84.8 41.9,-132.4c22.6,-39.9 52.7,-77.8 82.5,-104l1.6,-1.4l-1.5,-1.5c-4.5,-4.6 -7,-10.8 -7,-17.2c0,-13.5 11,-24.6 24.6,-24.6l3.6,0l-1.3,-2.8c-7.4,-16 -15.9,-29.7 -25.2,-40.7c-4.2,-5 -13.2,-17.9 -4.3,-28.9c4.6,-5.7 13.2,-9 23.6,-9c8.4,0 17.1,2.2 24.6,6.2c2,1.1 4.3,1.6 6.8,1.6c6.9,0 14.4,-3.9 20.5,-7c3.1,-1.6 5.9,-3.1 8.3,-3.8l0.7,-0.2l0.4,-0.1c0.7,-0.1 1.3,-0.2 2,-0.2c0.7,0 1.4,0.1 2,0.2l0.6,0.1l0.6,0.2c2.4,0.7 5.1,2.1 8.2,3.8c6,3.1 13.5,7 20.5,7c2.5,0 4.8,-0.5 6.8,-1.6c7.5,-4 16.2,-6.2 24.6,-6.2c10.4,0 19,3.3 23.6,9c8.8,11 -0.1,23.8 -4.3,28.9c-9.1,10.7 -17.3,24 -24.6,39.4l-2,4.2l4.4,-1.4c7.8,-2.5 16,-3.8 24.6,-3.8c12.9,0 26.8,2.9 41.3,8.7c9.2,3.7 17.4,5.5 24.5,5.5c1.7,0 3.3,-0.1 4.8,-0.3c2.8,-0.4 5.4,-1.1 7.7,-2.2c2.8,-1.3 6,-2.1 9.2,-2.1c4.3,0 8.5,1.2 12,3.6c6.7,4.4 10.4,11.8 9.9,19.8c-0.5,7.9 -5,14.7 -12.1,18.1c-6.4,3.1 -13.4,5.2 -20.8,6.2c-3.4,0.5 -7,0.7 -10.6,0.7c-12.7,0 -26.4,-2.9 -40.8,-8.6c-8.2,-3.3 -15.8,-5.1 -22.7,-5.4l-4.2,-0.2l2.5,3.4c8,11 22.5,18.6 41.8,22.1c31.6,5.6 48.7,28.8 60,44c3.8,5.1 7.4,10 10.4,12.7c4.6,4.3 7.2,10 7.4,16.2c0.2,6.2 -2,12.1 -6.2,16.7c-4.4,4.7 -10.6,7.4 -17,7.4c-0.8,0 -1.7,0 -2.5,-0.1c-3.9,-0.4 -7.5,-1.8 -10.8,-4l-2.9,2.6c23.1,43.6 35.9,86.8 35.9,121.6c0,52.3 -19.9,87.1 -60.7,106.4c-38.2,17.9 -90.4,20.3 -141.1,20.3zm-65.2,-358.6c-30.6,25.7 -61.7,64.4 -85.2,106c-25.7,45.5 -39.9,90.2 -39.9,125.7c0,48 17.2,78.5 54.1,96c36.1,17.1 86.8,19.4 136.2,19.4c49.4,0 100,-2.4 136.2,-19.4c36.9,-17.4 54.1,-47.9 54.1,-96c0,-24.9 -7,-54.6 -20.2,-85.9c-12,-28.4 -28.7,-57.6 -48.5,-84.4l-0.4,-0.6l-0.7,-0.2c-0.3,-0.1 -0.7,-0.2 -1,-0.2c-1.5,-0.3 -3,-0.6 -4.4,-0.8c-5.6,-1.2 -11,-2.6 -16.1,-4.3c-1.2,-0.4 -2.5,-0.8 -3.7,-1.3c-31.8,-11.5 -47.2,-31.6 -54.4,-46.4c-0.5,-1 -1,-2.2 -1.6,-3.5c-0.4,-0.9 -0.7,-1.9 -1.1,-2.9l-0.5,-1.4l-43.2,0c-3.2,0 -5.8,-2.6 -5.8,-5.8s2.6,-5.8 5.8,-5.8l65.3,0c0.4,0 0.9,0 1.5,-0.1l0.5,-0.1c0.3,0 0.5,-0.1 0.8,-0.2l0.3,-0.1l-0.6,-0.3l1.2,-0.4l-0.4,0.7c0.2,0 0.3,-0.1 0.5,-0.1l0.2,-0.1c0.2,-0.1 0.3,-0.1 0.5,-0.2c0,0 0.3,-0.1 0.4,-0.2c0.5,-0.2 0.9,-0.4 1.3,-0.6l0.1,0c0.4,-0.2 0.8,-0.5 1.2,-0.8l0.3,-0.3c0.3,-0.2 0.6,-0.4 0.8,-0.7c0.1,-0.1 0.2,-0.2 0.3,-0.3c0.4,-0.3 0.7,-0.6 0.9,-1l0,0c0.4,-0.5 0.7,-0.9 1,-1.3c0.2,-0.2 0.3,-0.5 0.4,-0.7c0.3,-0.5 0.5,-1 0.7,-1.5l0.1,-0.2c0.1,-0.3 0.3,-0.7 0.4,-1.2c0,-0.2 0.1,-0.3 0.1,-0.5c0.1,-0.3 0.1,-0.7 0.2,-1l0,0c0,0 0.1,-0.4 0.1,-0.5c0.1,-0.6 0.1,-1.1 0.1,-1.5c0,-5.7 -3.7,-10.7 -9.2,-12.5c-1.2,-0.4 -2.6,-0.6 -3.9,-0.6l-119.4,0c-7.2,0 -13,5.9 -13,13s5.9,13 13,13l12.1,0c3.2,0 5.8,2.6 5.8,5.8s-2.6,5.8 -5.8,5.8l-12.1,0c-1.3,0 -2.5,-0.1 -3.8,-0.3l-0.9,-0.1l-0.7,0.9zm116.5,2.7c8.3,17 27.3,38.8 70.3,46.5c0.7,0.1 1.4,0.3 2.2,0.5l0.4,0.1c16.3,4 26,17.2 35.4,29.9c4.6,6.2 9.3,12.5 14.6,17.5c1.9,1.7 4.2,2.8 6.7,3.1c0.4,0 0.9,0.1 1.3,0.1c3.3,0 6.3,-1.3 8.6,-3.7c2.1,-2.3 3.3,-5.3 3.1,-8.4c-0.1,-3.1 -1.4,-6 -3.7,-8.2c-3.8,-3.5 -7.6,-8.8 -11.8,-14.3c-11.5,-15.5 -25.7,-34.7 -52.8,-39.6c-24.1,-4.3 -41.1,-14.1 -50.7,-29l-1,-1.6l-1.7,1c-0.2,0.1 -0.4,0.3 -0.7,0.4c-0.3,0.2 -0.7,0.4 -1,0.5c-0.2,0.1 -0.5,0.2 -0.7,0.3c-0.3,0.1 -0.6,0.2 -0.8,0.4c-0.2,0.1 -0.4,0.2 -0.6,0.2c-0.2,0.1 -0.4,0.1 -0.6,0.2l0,0c0,0 -0.4,0.1 -0.4,0.1c-0.1,0 -0.3,0.1 -0.4,0.1l-0.4,0.1c-0.4,0.1 -0.8,0.2 -1.2,0.3l-0.5,0.1c-0.5,0.1 -1,0.2 -1.5,0.3l-0.1,0c-0.5,0.1 -1,0.1 -1.5,0.2l-0.4,0c-0.2,0 -0.4,0 -0.6,0c-0.4,0 -0.7,0 -1.1,0l-9.9,0l1.5,2.9zm33.8,-45.7c-1.5,0 -2.9,0 -4.4,0.1l-3.8,0.2l2.3,3c0.1,0.1 0.2,0.3 0.3,0.4c0.1,0.2 0.2,0.3 0.3,0.5c0.1,0.2 0.2,0.3 0.3,0.5c0.1,0.2 0.2,0.3 0.3,0.5c0.1,0.2 0.2,0.3 0.3,0.5c0.1,0.2 0.2,0.3 0.3,0.5c0.1,0.2 0.2,0.4 0.3,0.5c0.1,0.2 0.2,0.3 0.3,0.5l0.3,0.5c0.1,0.1 0.1,0.3 0.2,0.5c0,0 0.2,0.5 0.3,0.6c0.1,0.2 0.4,0.9 0.4,1.1c0.1,0.2 0.1,0.3 0.2,0.5c0,0 0.2,0.5 0.2,0.6c0,0.2 0.3,1 0.3,1.1c0,0.2 0.1,0.3 0.1,0.5c0,0 0.1,0.5 0.1,0.7c0,0.2 0.1,0.3 0.1,0.5c0,0 0.1,0.5 0.1,0.7c0,0.2 0,0.3 0.1,0.5c0,0.1 0.1,0.6 0.1,0.7c0,0.2 0,0.5 0.1,0.7l0,0.6c0,0.4 0,0.8 0,1.2c0,0.2 0,0.4 0,0.6l-0.1,2l2,0c8.6,0.2 18.1,2.3 28.2,6.3c13,5.2 25.3,7.8 36.6,7.8c3.1,0 6.1,-0.2 9,-0.6c6.2,-0.8 12,-2.6 17.3,-5.1c3.4,-1.6 5.4,-4.7 5.7,-8.5c0.2,-3.8 -1.5,-7.4 -4.7,-9.5c-1.7,-1.1 -3.7,-1.7 -5.7,-1.7c-1.5,0 -2.9,0.3 -4.2,0.9c-3.3,1.6 -7.1,2.7 -11.1,3.2c-2,0.3 -4.1,0.4 -6.3,0.4c-8.6,0 -18.2,-2.1 -28.8,-6.3c-13,-5.1 -25.5,-7.7 -37,-7.7zm-148.7,-76.2c-6.7,0 -12.1,1.8 -14.5,4.7c-3.2,3.9 0.5,9.9 4.2,14.2c14.1,16.7 23.9,36.3 29.7,49.8l0.5,1.2l87.2,0l0.5,-1.2c5.8,-13.5 15.7,-33.1 29.7,-49.8c3.6,-4.3 7.3,-10.3 4.2,-14.2c-2.4,-3 -7.8,-4.7 -14.5,-4.7c-6.6,0 -13.5,1.7 -19.4,4.8c-3.7,2 -7.9,3 -12.2,3c-9.7,0 -19,-4.9 -25.8,-8.4c-2,-1.1 -4,-2.1 -5.4,-2.6l-0.8,-0.3l-0.8,0.3c-1.4,0.6 -3.3,1.6 -5.4,2.6c-6.8,3.6 -16.2,8.4 -25.8,8.4c-4.4,0 -8.5,-1 -12.2,-3c-5.7,-3.1 -12.6,-4.8 -19.2,-4.8z"
			/>
			{showCreaseLines && (
				<>
					<path
						{...sharedProps}
						id="svg_3"
						d="m110.3,317.8c-0.7,0 -1.4,-0.1 -2,-0.4c-1.4,-0.5 -2.6,-1.6 -3.2,-3c-0.6,-1.4 -0.7,-3 -0.1,-4.4c8.1,-21.4 19.2,-43.3 33,-65.2c1.1,-1.7 2.9,-2.7 4.9,-2.7c1.1,0 2.1,0.3 3.1,0.9c1.3,0.8 2.2,2.1 2.5,3.6s0.1,3 -0.7,4.3c-13.4,21.2 -24.1,42.5 -32,63.1c-0.9,2.3 -3.1,3.8 -5.5,3.8z"
					/>
					<path
						{...sharedProps}
						id="svg_4"
						d="m96.1,384.3c-3.2,0 -5.8,-2.6 -5.8,-5.8c0,-9.8 1.2,-20.5 3.6,-31.9c0.6,-2.6 2.9,-4.6 5.6,-4.6c0.4,0 0.8,0 1.2,0.1c1.5,0.3 2.8,1.2 3.6,2.5s1.1,2.8 0.8,4.3c-2.2,10.6 -3.4,20.5 -3.4,29.5c0.2,3.3 -2.4,5.9 -5.6,5.9z"
					/>
				</>
			)}
		</Icon>
	);
};

export default BagOfHoldingIcon;
