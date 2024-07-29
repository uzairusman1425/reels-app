import { View, Text, StyleSheet } from "react-native"
import { useFonts } from "expo-font"
import AdsOptionCard from "../ads-option-card/AdsOptionCard"

export default function AdsOptionsSection() {
	const [fontsLoaded] = useFonts({
		"Genos-Medium": require("../../assets/fonts/Genos/fonts/ttf/Genos-Medium.ttf")
	})

	return (
		<View style={styles.adsOptionsSection}>
			{fontsLoaded && (
				<Text style={styles.adsOptionsSectionTitleText}>
					Our Ads Options
				</Text>
			)}
			<View style={styles.cardsContainer}>
				<AdsOptionCard
					image={require("../../assets/images/business-cards.png")}
					title="Business"
					description="Cards"
				/>
				<AdsOptionCard
					image={require("../../assets/images/services-flyers.png")}
					title="Services"
					description="Flyers"
				/>
				<AdsOptionCard
					image={require("../../assets/images/restaurant-offers.png")}
					title="Restaurant"
					description="Offers"
				/>
				<AdsOptionCard
					image={require("../../assets/images/special-offers.png")}
					title="Special"
					description="Offers"
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	adsOptionsSection: {
		width: "95%",
		flexDirection: "column",
		gap: 10
	},
	adsOptionsSectionTitleText: {
		fontSize: 25,
		color: "white",
		fontFamily: "Genos-Medium"
	},
	cardsContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between"
	}
})
