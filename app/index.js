import { View, ImageBackground, StyleSheet } from "react-native"
import Navbar from "../components/navbar/Navbar"
import ProfileOptionsSection from "../components/profile-options-section/ProfileOptionsSection"
import CreateContentSection from "../components/create-content-section/CreateContentSection"
import AdsOptionsSection from "../components/ads-options-section/AdsOptionsSection"

export default function Page() {
	return (
		<ImageBackground
			source={require("../assets/images/background-image.png")}
			style={styles.container}
			resizeMode="cover"
		>
			<Navbar />
			<View style={styles.bodyContainer}>
				<ProfileOptionsSection />
				<CreateContentSection />
				<AdsOptionsSection />
			</View>
		</ImageBackground>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column"
	},
	bodyContainer: {
		flex: 1,
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		paddingVertical: 25,
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-between"
	}
})
