import { StyleSheet } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import BackButton from "../back-button/BackButton"

export default function PreviewScreenHeader() {
	return (
		<LinearGradient
			style={styles.headerContainer}
			colors={["rgba(0,0,0,1)", "rgba(0,0,0,0.85)"]}
		>
			<BackButton />
		</LinearGradient>
	)
}

const styles = StyleSheet.create({
	headerContainer: {
		height: 55,
		width: "100%",
		justifyContent: "center",
		paddingHorizontal: 20
	}
})
