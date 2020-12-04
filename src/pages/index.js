import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, Menu, Section, StackItem, Stack } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section>
			<Box
				display="flex"
				padding="12px 0"
				justify-content="space-between"
				align-items="center"
				flex-direction="row"
				md-flex-direction="column"
			>
				<Text margin="0" md-margin="0px 0 20px 0" text-align="left" font="--lead">
					Kshitiz Codes
				</Text>
				<Menu
					display="flex"
					justify-content="center"
					font="--base"
					font-weight="700"
					md-flex-direction="column"
					md-align-items="center"
				>
					<Override slot="link" text-decoration="none" color="--dark" padding="6px 12px" />
					<Override slot="link-active" color="--primary" />
					<Override slot="item" padding="6px" />
					<Override slot="link-404">
						C.V
					</Override>
					<Override slot="link-index">
						Contact Me
					</Override>
				</Menu>
			</Box>
		</Section>
		<Section background="--color-darkL2" padding="64px 0" sm-padding="40px 0">
			<Stack>
				<StackItem width="50%" lg-width="100%">
					<Override
						slot="StackItemContent"
						margin-right="-20%"
						padding-bottom="120%"
						lg-margin-right="0"
						lg-padding-bottom="80%"
						background="#cc0e0e url(https://uploads.quarkly.io/5fc9d0d304e716001efc3a6d/images/WhatsApp_Image_2020-11-14_at_7.26.08_PM-removebg-preview.png?v=2020-12-04T06:09:17.341Z) 50% 15%/cover"
						box-shadow="0 0 0 0 #c81a1a"
					/>
				</StackItem>
				<StackItem width="50%" lg-width="100%">
					<Override
						slot="StackItemContent"
						padding="98px 64px"
						margin-left="-20%"
						margin-top="36px"
						background="--color-red"
						color="--light"
						mix-blend-mode="lighten"
						lg-margin-left="0"
						lg-margin-top="0"
						flex-direction="column"
					/>
					<Text
						as="h4"
						margin="0"
						font="--base"
						letter-spacing="1px"
						text-transform="uppercase"
					>
						About me
					</Text>
					<Text as="h1" margin="0 0 16px 0" font="--headline1" lg-font="--headline2">
						Hey I’m Kshitiz
					</Text>
					<Text as="p" margin="16px 0" font="--base" max-width="400px">
						HELLO, MY NAME IS KSHITIZ KATHURIA. I AM A DESIGNER / FULL STACK DEVELOPER LIVING IN BAREILLY(U.P),INDIA.
						<br />
						Providing the best,most innovative application development services in the market, known for creating high performance,Featured packed web and mobile experiences. All the applications built by me are both secure and sustainable and can be easily maintained.
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			background="--color-light"
			display="flex"
			flex-direction="column"
		>
			<Text
				as="h1"
				margin="8px 0px 32px"
				font="--headline1"
				md-font="--headline2"
				color="--dark"
				max-width="850px"
			>
				Heading
			</Text>
			<Stack margin-top="auto" color="--grey" font="--base">
				<StackItem width="75%" md-width="100%" />
				<StackItem width="25%" md-width="100%" />
			</Stack>
			<Image width="20%" height="100%" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5fc9d0d304e716001efc3a6d/images/Screenshot%20(183).png?v=2020-12-04T06:29:04.981Z) 0% 0% /auto repeat scroll padding-box" src="https://uploads.quarkly.io/5fc9d0d304e716001efc3a6d/images/what's%20app%20graphic%20news.gif?v=2020-12-04T06:30:23.825Z" />
			<Image
				width="20%"
				height="100%"
				src="https://uploads.quarkly.io/5fc9d0d304e716001efc3a6d/images/websii.png?v=2020-12-04T06:28:44.521Z"
				display="block"
				position="inherit"
				hover-width="40%"
			/>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});