import {
	View,
	ImageBackground,
	Text,
	StyleSheet,
	TouchableOpacity
} from "react-native"
import { Image } from "expo-image"
import { useFonts } from "expo-font"
import PreviewScreenHeader from "../../components/preview-screen-header/PreviewScreenHeader"

export default function Page() {
	const [fontsLoaded] = useFonts({
		"Genos-Medium": require("../../assets/fonts/Genos/fonts/ttf/Genos-Medium.ttf"),
		"Genos-Light": require("../../assets/fonts/Genos/fonts/ttf/Genos-Light.ttf"),
		"Genos-Regular": require("../../assets/fonts/Genos/fonts/ttf/Genos-Regular.ttf")
	})

	const cards = [
		{
			id: 1,
			title: "Feeds",
			image: require("../../assets/icons/feeds.svg")
		},
		{
			id: 2,
			title: "History",
			image: require("../../assets/icons/history.svg")
		},
		{
			id: 3,
			title: "Shopping",
			image: require("../../assets/icons/shopping.svg")
		},
		{
			id: 4,
			title: "Voting",
			image: require("../../assets/icons/voting.svg")
		},
		{
			id: 5,
			title: "Services",
			image: require("../../assets/icons/services.svg")
		},
		{
			id: 6,
			title: "Bazar",
			image: require("../../assets/icons/bazar.svg")
		},
		{
			id: 7,
			title: "Music",
			image: require("../../assets/icons/music2.svg")
		},
		{
			id: 8,
			title: "Events",
			image: require("../../assets/icons/events.svg")
		}
	]

	return (
		<View style={styles.container}>
			<PreviewScreenHeader />
			<ImageBackground
				source={require("../../assets/images/background-image-dark.png")}
				style={styles.imageBackground}
				resizeMode="cover"
			>
				<View style={styles.bodyContainer}>
					<View style={styles.thankYouCard}>
						<View style={styles.thankYouIconContainer}>
							<Image
								source={require("../../assets/icons/thank-you.svg")}
								style={styles.thankYouIcon}
								contentFit="contain"
							/>
						</View>
						{fontsLoaded && (
							<Text style={styles.usernameText}>Username</Text>
						)}
						{fontsLoaded && (
							<Text style={styles.thankYouText}>
								Thank you Watching and we wish a nice day on our
								Portal
							</Text>
						)}
						<View style={styles.horizontalCardsWrapper}>
							{cards?.slice(0, 4)?.map((item, key) => {
								return (
									<TouchableOpacity
										style={styles.cardContainer}
										key={key}
									>
										<Image
											source={item?.image}
											style={styles.cardIcon}
											contentFit="contain"
										/>
										<View style={styles.cardTitleContainer}>
											<View
												style={styles.circularSeparator}
											/>
											{fontsLoaded && (
												<Text
													style={styles.cardTitleText}
												>
													{item?.title}
												</Text>
											)}
											<View
												style={styles.circularSeparator}
											/>
										</View>
									</TouchableOpacity>
								)
							})}
						</View>
						<View style={styles.horizontalCardsWrapper}>
							{cards?.slice(4, 8)?.map((item, key) => {
								return (
									<TouchableOpacity
										style={styles.cardContainer}
										key={key}
									>
										<Image
											source={item?.image}
											style={styles.cardIcon}
											contentFit="contain"
										/>
										<View style={styles.cardTitleContainer}>
											<View
												style={styles.circularSeparator}
											/>
											{fontsLoaded && (
												<Text
													style={styles.cardTitleText}
												>
													{item?.title}
												</Text>
											)}
											<View
												style={styles.circularSeparator}
											/>
										</View>
									</TouchableOpacity>
								)
							})}
						</View>
					</View>
				</View>
			</ImageBackground>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		backgroundColor: "black"
	},
	imageBackground: {
		flex: 1,
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		flexDirection: "column"
	},
	bodyContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	},
	thankYouCard: {
		width: "95%",
		borderRadius: 10,
		backgroundColor: "white",
		alignItems: "center",
		flexDirection: "column",
		position: "relative",
		paddingTop: 60,
		paddingBottom: 15
	},
	thankYouIconContainer: {
		position: "absolute",
		top: -50,
		height: 100,
		width: 100,
		borderRadius: 50,
		borderWidth: 5,
		borderColor: "lightgrey",
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "center"
	},
	thankYouIcon: {
		height: 60,
		width: 60
	},
	usernameText: {
		fontSize: 22.5,
		fontFamily: "Genos-Medium"
	},
	thankYouText: {
		fontSize: 15,
		fontFamily: "Genos-Regular",
		color: "#64748B",
		width: 210,
		textAlign: "center"
	},
	horizontalCardsWrapper: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-evenly",
		marginTop: 10
	},
	cardContainer: {
		height: 75,
		width: "22.5%",
		borderRadius: 5,
		borderWidth: 0.5,
		borderColor: "rgba(0, 0, 0, 0.1)",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-evenly",
		gap: 10
	},
	cardIcon: {
		height: 35,
		width: 35
	},
	cardTitleContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 3.5
	},
	cardTitleText: {
		fontSize: 12.5,
		fontFamily: "Genos-Regular",
		color: "#64748B",
		lineHeight: 15
	},
	circularSeparator: {
		height: 3,
		width: 3,
		borderRadius: 1.5,
		backgroundColor: "#64748B"
	}
})
