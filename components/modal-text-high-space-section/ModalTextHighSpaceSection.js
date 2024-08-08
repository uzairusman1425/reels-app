import { View, StyleSheet } from "react-native"
import ModalSlider from "../modal-slider/ModalSlider"

export default function ModalTextHighSpaceSection() {
	return (
		<View style={styles.spaceSection}>
			<ModalSlider />
		</View>
	)
}

const styles = StyleSheet.create({
	spaceSection: {
		flex: 1,
		width: "100%",
		alignItems: "center",
		justifyContent: "center"
	}
})
