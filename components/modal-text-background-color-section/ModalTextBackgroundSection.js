import { View, TouchableOpacity, StyleSheet } from "react-native"
import PropTypes from "prop-types"
import ModalSlider from "../modal-slider/ModalSlider"

export default function ModalTextBackgroundSection({ textColors }) {
	return (
		<View style={styles.textBackgroundColorSection}>
			<View style={styles.horizontalColorsRow}>
				{textColors?.map((item, key) => {
					return (
						<TouchableOpacity
							style={[
								styles.colorBox,
								{
									backgroundColor: item
								}
							]}
							key={key}
						/>
					)
				})}
			</View>
			<View style={styles.horizontalColorsRow}>
				{textColors?.map((item, key) => {
					return (
						<TouchableOpacity
							style={[
								styles.colorBox,
								{
									backgroundColor: item
								}
							]}
							key={key}
						/>
					)
				})}
			</View>
			<ModalSlider />
		</View>
	)
}

const styles = StyleSheet.create({
	textBackgroundColorSection: {
		flex: 1,
		width: "100%",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-evenly"
	},
	horizontalColorsRow: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around"
	},
	colorBox: {
		height: 30,
		width: 30,
		borderRadius: 3.5,
		opacity: 0.5
	}
})

ModalTextBackgroundSection.propTypes = {
	textColors: PropTypes.array.isRequired
}
