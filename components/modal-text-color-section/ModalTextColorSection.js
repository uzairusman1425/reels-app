import { View, TouchableOpacity, StyleSheet } from "react-native"
import PropTypes from "prop-types"

export default function ModalTextColorSection({ textColors }) {
	return (
		<View style={styles.textColorSection}>
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
		</View>
	)
}

const styles = StyleSheet.create({
	textColorSection: {
		flex: 1,
		width: "100%",
		flexDirection: "column",
		paddingTop: 25,
		gap: 25
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

ModalTextColorSection.propTypes = {
	textColors: PropTypes.array.isRequired
}
