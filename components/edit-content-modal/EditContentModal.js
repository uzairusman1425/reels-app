import {
	Modal,
	View,
	ScrollView,
	Text,
	TouchableWithoutFeedback,
	StyleSheet
} from "react-native"
import { Image } from "expo-image"
import { useFonts } from "expo-font"
import PropTypes from "prop-types"
import EditOptionCard from "../edit-option-card/EditOptionCard"

export default function EditContentModal({
	openModal,
	setOpenModal,
	options,
	selectedOption,
	setSelectedOption
}) {
	const [fontsLoaded] = useFonts({
		"Genos-Regular": require("../../assets/fonts/Genos/fonts/ttf/Genos-Regular.ttf")
	})

	return (
		<Modal
			animationType="slide"
			transparent
			visible={openModal}
			onRequestClose={() => {
				setOpenModal(false)
			}}
		>
			<View style={styles.modalWrapper}>
				<TouchableWithoutFeedback
					onPress={() => {
						setOpenModal(false)
					}}
				>
					<View style={styles.modalEmptySpace} />
				</TouchableWithoutFeedback>
				<View style={styles.modalContainer}>
					<View style={styles.headerContainer}>
						<View style={styles.circleSeparator} />
						<Image
							source={selectedOption?.icon}
							style={styles.headerIcon}
						/>
						<View style={styles.circleSeparator} />
						{fontsLoaded && (
							<Text style={styles.headerTitleText}>
								{selectedOption?.title}
							</Text>
						)}
						<View style={styles.circleSeparator} />
					</View>
					<View style={styles.horizontalSeparator} />
					<View style={styles.modalBodyContainer}></View>
					<ScrollView
						horizontal
						style={styles.horizontalScrollArea}
						showsHorizontalScrollIndicator={false}
					>
						<View style={styles.scrollItemsContainer}>
							{options?.map((item, key) => {
								return (
									<EditOptionCard
										image={item?.image}
										title={item?.title}
										color={
											selectedOption?.id === item?.id
												? "rgba(27, 196, 105, 0.5)"
												: "lightgrey"
										}
										onPress={() => {
											setSelectedOption(item)
										}}
										key={key}
									/>
								)
							})}
						</View>
					</ScrollView>
				</View>
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	modalWrapper: {
		flex: 1,
		flexDirection: "column",
		backgroundColor: "rgba(0, 0, 0, 0.5)"
	},
	modalEmptySpace: {
		flex: 1,
		width: "100%"
	},
	modalContainer: {
		height: 350,
		width: "100%",
		flexDirection: "column",
		alignItems: "center",
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,
		backgroundColor: "white"
	},
	horizontalScrollArea: {
		maxHeight: 65,
		width: "100%",
		marginTop: 15,
		marginBottom: 25
	},
	scrollItemsContainer: {
		flexDirection: "row",
		gap: 15,
		paddingHorizontal: 15
	},
	headerContainer: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		gap: 6.5,
		paddingLeft: 15,
		marginVertical: 10
	},
	headerIcon: {
		height: 15,
		width: 15
	},
	headerTitleText: {
		fontSize: 16.5,
		fontFamily: "Genos-Regular",
		color: "#1C274C",
		marginHorizontal: 3.5
	},
	circleSeparator: {
		height: 2,
		width: 2,
		borderRadius: 1,
		backgroundColor: "gray"
	},
	horizontalSeparator: {
		height: 1,
		width: "100%",
		backgroundColor: "lightgrey"
	},
	modalBodyContainer: {
		flex: 1,
		width: "100%"
	}
})

EditContentModal.propTypes = {
	openModal: PropTypes.bool.isRequired,
	setOpenModal: PropTypes.func.isRequired,
	options: PropTypes.array.isRequired,
	selectedOption: PropTypes.object,
	setSelectedOption: PropTypes.func.isRequired
}
