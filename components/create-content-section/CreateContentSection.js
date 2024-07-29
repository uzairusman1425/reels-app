import { View, Text, StyleSheet } from "react-native"
import { useFonts } from "expo-font"
import CreateContentCard from "../create-content-card/CreateContentCard"

export default function CreateContentSection() {
	const [fontsLoaded] = useFonts({
		"Genos-Medium": require("../../assets/fonts/Genos/fonts/ttf/Genos-Medium.ttf")
	})

	return (
		<View style={styles.createSection}>
			{fontsLoaded && (
				<Text style={styles.createSectionTitleText}>
					Ready to Create?
				</Text>
			)}
			<View style={styles.cardsContainer}>
				<CreateContentCard
					image={require("../../assets/icons/create-stories.png")}
					salutation="Let's Create"
					title="Create Stories"
					description="Share your moments"
					href="/create-stories"
				/>
				<CreateContentCard
					image={require("../../assets/icons/create-reels.png")}
					salutation="Let's Make"
					title="Create Reels"
					description="Capture short videos"
					href="/create-reels"
				/>
				<CreateContentCard
					image={require("../../assets/icons/create-ads.png")}
					salutation="Let's Promote"
					title="Create Ads"
					description="Reach your audience"
					href="/create-ads"
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	createSection: {
		width: "95%",
		flexDirection: "column",
		gap: 10
	},
	createSectionTitleText: {
		fontSize: 35,
		color: "white",
		fontFamily: "Genos-Medium"
	},
	cardsContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between"
	}
})
