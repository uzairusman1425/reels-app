import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { Image } from "expo-image"
import { useFonts } from "expo-font"
import PropTypes from "prop-types"

export default function ModalHeader({
	selectedOption,
	selectedTextEditingOption,
	setOpenModal
}) {
	const [fontsLoaded] = useFonts({
		"Genos-Regular": require("../../assets/fonts/Genos/fonts/ttf/Genos-Regular.ttf")
	})

	return (
		<View style={styles.headerWrapper}>
			<View style={styles.headerContainer}>
				<View style={styles.circleSeparator} />
				<Image
					source={
						selectedOption?.id === 3
							? selectedTextEditingOption?.icon
							: selectedOption?.icon
					}
					style={styles.headerIcon}
				/>
				<View style={styles.circleSeparator} />
				{fontsLoaded && (
					<Text style={styles.headerTitleText}>
						{selectedOption?.id === 3
							? selectedTextEditingOption?.title
							: selectedOption?.title}
					</Text>
				)}
				<View style={styles.circleSeparator} />
			</View>
			<View style={styles.actionButtonsContainer}>
				{selectedOption?.id === 3 && (
					<TouchableOpacity style={styles.actionButton}>
						<Image
							source={require("../../assets/icons/undo.svg")}
							style={styles.actionButtonIcon}
							contentFit="contain"
						/>
					</TouchableOpacity>
				)}
				{selectedOption?.id === 3 && (
					<TouchableOpacity style={styles.actionButton}>
						<Image
							source={require("../../assets/icons/redo.svg")}
							style={styles.actionButtonIcon}
							contentFit="contain"
						/>
					</TouchableOpacity>
				)}
				<TouchableOpacity
					style={styles.doneButton}
					onPress={() => {
						setOpenModal(false)
					}}
				>
					{fontsLoaded && (
						<Text style={styles.doneButtonText}>Done</Text>
					)}
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	headerWrapper: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingHorizontal: 15
	},
	headerContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 6.5,
		marginVertical: 10
	},
	headerIcon: {
		height: 17.5,
		width: 17.5
	},
	headerTitleText: {
		fontSize: 16.5,
		fontFamily: "Genos-Regular",
		color: "#1C274C",
		marginHorizontal: 3.5,
		lineHeight: 20
	},
	circleSeparator: {
		height: 2,
		width: 2,
		borderRadius: 1,
		backgroundColor: "gray"
	},
	actionButtonsContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 17.5
	},
	actionButton: {
		height: 25,
		width: 25,
		borderRadius: 6.5,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "white"
	},
	actionButtonIcon: {
		height: 15,
		width: 15
	},
	doneButton: {
		height: 25,
		width: 65,
		borderRadius: 6.5,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "white"
	},
	doneButtonText: {
		fontSize: 17.5,
		fontFamily: "Genos-Regular",
		color: "#1C274C",
		lineHeight: 22.5
	}
})

ModalHeader.propTypes = {
	setOpenModal: PropTypes.func.isRequired,
	selectedOption: PropTypes.object,
	selectedTextEditingOption: PropTypes.object
}
