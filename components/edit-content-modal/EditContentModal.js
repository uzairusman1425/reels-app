import { useState } from "react"
import {
	Modal,
	View,
	ScrollView,
	Text,
	TouchableOpacity,
	TouchableWithoutFeedback,
	StyleSheet
} from "react-native"
import { Image } from "expo-image"
import { useFonts } from "expo-font"
import AntDesign from "@expo/vector-icons/AntDesign"
import * as ImagePicker from "expo-image-picker"
import PropTypes from "prop-types"
import EditOptionCard from "../edit-option-card/EditOptionCard"

export default function EditContentModal({
	openModal,
	setOpenModal,
	options,
	selectedOption,
	setSelectedOption,
	musicCategories,
	selectedMusicCategory,
	setSelectedMusicCategory
}) {
	const [fontsLoaded] = useFonts({
		"Genos-Regular": require("../../assets/fonts/Genos/fonts/ttf/Genos-Regular.ttf")
	})

	const [image, setImage] = useState(null)

	const pickImage = async () => {
		let result = await ImagePicker?.launchImageLibraryAsync({
			mediaTypes: ImagePicker?.MediaTypeOptions?.All,
			aspect: [4, 3],
			quality: 1
		})

		if (!result.canceled) {
			setImage(result?.assets[0])
		}
	}
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
				<View
					style={[
						styles.modalContainer,
						{
							height:
								selectedOption?.id === 1
									? 465
									: selectedOption?.id === 2
									? 400
									: 300
						}
					]}
				>
					<View style={styles.headerWrapper}>
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
					<View style={styles.horizontalSeparator} />
					<View style={styles.modalBodyContainer}>
						{selectedOption?.id === 1 ? (
							<View style={styles.mediaSection}>
								<Image
									source={require("../../assets/images/edit-media-bg.png")}
									style={styles.mediaBackgroundImage}
									contentFit="contain"
								/>
								<TouchableOpacity
									style={styles.allowAccessButton}
									onPress={pickImage}
								>
									<AntDesign
										name="check"
										size={22.5}
										color="white"
									/>
									<Text style={styles.allowAccessButtonText}>
										Allow access
									</Text>
								</TouchableOpacity>
							</View>
						) : selectedOption?.id === 2 ? (
							<View style={styles.musicSection}>
								<ScrollView
									horizontal
									style={styles.musicTabsScrollArea}
									showsHorizontalScrollIndicator={false}
								>
									<View
										style={styles.musicTabsScrollContainer}
									>
										{musicCategories?.map((item, key) => {
											return (
												<TouchableOpacity
													style={[
														styles.musicCategoryTab,
														{
															backgroundColor:
																selectedMusicCategory?.id ===
																item?.id
																	? "white"
																	: "lightgrey"
														}
													]}
													onPress={() => {
														setSelectedMusicCategory(
															item
														)
													}}
													key={key}
												>
													<Image
														source={require("../../assets/icons/music-category.png")}
														style={
															styles.musicCategoryTabIcon
														}
														contentFit="contain"
													/>
													{fontsLoaded && (
														<Text
															style={
																styles.musicCategoryTabText
															}
														>
															{item?.title}
														</Text>
													)}
												</TouchableOpacity>
											)
										})}
									</View>
								</ScrollView>
							</View>
						) : (
							<View />
						)}
					</View>
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
		width: "100%",
		flexDirection: "column",
		alignItems: "center",
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,
		backgroundColor: "#F0F0F0"
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
		color: "#1C274C"
	},
	horizontalSeparator: {
		height: 1,
		width: "100%",
		backgroundColor: "lightgrey"
	},
	modalBodyContainer: {
		flex: 1,
		width: "100%"
	},
	mediaSection: {
		flex: 1,
		width: "100%",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		gap: 25
	},
	mediaBackgroundImage: {
		height: 200,
		width: "100%"
	},
	allowAccessButton: {
		height: 45,
		width: 160,
		borderRadius: 12.5,
		backgroundColor: "rgba(27, 196, 105, 0.9)",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 5
	},
	allowAccessButtonText: {
		fontSize: 17.5,
		fontWeight: "600",
		color: "white"
	},
	musicSection: {
		flex: 1,
		width: "100%",
		flexDirection: "column",
		alignItems: "center",
		gap: 25
	},
	musicTabsScrollArea: {
		maxHeight: 25,
		width: "100%",
		marginVertical: 7.5
	},
	musicTabsScrollContainer: {
		flexDirection: "row",
		gap: 10,
		paddingHorizontal: 15
	},
	musicCategoryTab: {
		height: 25,
		borderRadius: 3.5,
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 7.5,
		gap: 7.5
	},
	musicCategoryTabIcon: {
		height: 16.5,
		width: 16.5
	},
	musicCategoryTabText: {
		fontSize: 15,
		fontFamily: "Genos-Regular",
		color: "#1C274C"
	}
})

EditContentModal.propTypes = {
	openModal: PropTypes.bool.isRequired,
	setOpenModal: PropTypes.func.isRequired,
	options: PropTypes.array.isRequired,
	selectedOption: PropTypes.object,
	setSelectedOption: PropTypes.func.isRequired,
	musicCategories: PropTypes.array.isRequired,
	selectedMusicCategory: PropTypes.object.isRequired,
	setSelectedMusicCategory: PropTypes.func.isRequired
}
