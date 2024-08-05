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
import { AntDesign, FontAwesome5 } from "@expo/vector-icons"
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
	setSelectedMusicCategory,
	selectedSong,
	setSelectedSong
}) {
	const [fontsLoaded] = useFonts({
		"Genos-Regular": require("../../assets/fonts/Genos/fonts/ttf/Genos-Regular.ttf")
	})

	const [image, setImage] = useState(null)

	const pickImage = async () => {
		let result = await ImagePicker?.launchImageLibraryAsync({
			mediaTypes: ImagePicker?.MediaTypeOptions?.All,
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
									{fontsLoaded && (
										<Text
											style={styles.allowAccessButtonText}
										>
											Allow access
										</Text>
									)}
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
																	: "rgba(0, 0, 0, 0.04)"
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
														source={require("../../assets/icons/music-category.svg")}
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
								<ScrollView
									style={styles.songsScrollArea}
									showsVerticalScrollIndicator={false}
								>
									<View style={styles.songsScrollContainer}>
										{selectedMusicCategory?.songs?.map(
											(item, key) => {
												return (
													<TouchableOpacity
														style={[
															styles.songItemContainer,
															{
																backgroundColor:
																	selectedSong?.id ===
																	item?.id
																		? "rgba(0, 0, 0, 0.04)"
																		: "transparent"
															}
														]}
														key={key}
														onPress={() => {
															if (
																selectedSong?.id ===
																item?.id
															) {
																setSelectedSong(
																	null
																)
															} else {
																setSelectedSong(
																	item
																)
															}
														}}
													>
														<View
															style={
																styles.songContainer
															}
														>
															<Image
																source={
																	item?.image
																}
																style={
																	styles.songCoverImage
																}
																contentFit="cover"
															/>
															<View
																style={
																	styles.songDetailsContainer
																}
															>
																{fontsLoaded && (
																	<Text
																		style={
																			styles.songNameText
																		}
																	>
																		{
																			item?.name
																		}
																	</Text>
																)}
																<View
																	style={
																		styles.songArtistNameContainer
																	}
																>
																	{fontsLoaded && (
																		<Text
																			style={
																				styles.songArtistNameText
																			}
																		>
																			{
																				item?.artist
																			}
																		</Text>
																	)}
																	<View
																		style={
																			styles.circleSeparatorLarge
																		}
																	/>
																</View>
															</View>
														</View>
														<View
															style={
																styles.songIconsContainer
															}
														>
															<Image
																source={
																	selectedSong?.id ===
																	item?.id
																		? require("../../assets/icons/playing.svg")
																		: require("../../assets/icons/play.svg")
																}
																style={
																	styles.songIcon
																}
																contentFit="contain"
															/>
															<View
																style={[
																	styles.checkbox,
																	selectedSong?.id ===
																	item?.id
																		? styles.checkboxChecked
																		: styles.checkboxUnchecked
																]}
															>
																{selectedSong?.id ===
																	item?.id && (
																	<FontAwesome5
																		name="check"
																		size={
																			10
																		}
																		color="white"
																	/>
																)}
															</View>
														</View>
													</TouchableOpacity>
												)
											}
										)}
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
		marginHorizontal: 3.5,
		lineHeight: 20
	},
	circleSeparator: {
		height: 2,
		width: 2,
		borderRadius: 1,
		backgroundColor: "gray"
	},
	circleSeparatorLarge: {
		height: 4,
		width: 4,
		borderRadius: 2,
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
		color: "#1C274C",
		lineHeight: 22.5
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
		fontSize: 20,
		fontWeight: "600",
		color: "white",
		fontFamily: "Genos-Regular",
		lineHeight: 22.5
	},
	musicSection: {
		flex: 1,
		width: "100%",
		flexDirection: "column",
		alignItems: "center",
		gap: 10
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
	},
	songsScrollArea: {
		flex: 1,
		width: "100%"
	},
	songsScrollContainer: {
		flexDirection: "column",
		gap: 7.5,
		marginHorizontal: 15
	},
	songItemContainer: {
		height: 40,
		width: "100%",
		borderWidth: 0.5,
		borderRadius: 7.5,
		borderColor: "lightgrey",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingHorizontal: 5
	},
	songContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 7.5
	},
	songCoverImage: {
		height: 30,
		width: 30,
		borderRadius: 5
	},
	songDetailsContainer: {
		flexDirection: "column"
	},
	songNameText: {
		fontSize: 12.5,
		fontFamily: "Genos-Regular",
		lineHeight: 12.5
	},
	songArtistNameContainer: {
		flexDirection: "row",
		gap: 7.5,
		alignItems: "center"
	},
	songArtistNameText: {
		fontSize: 12.5,
		fontFamily: "Genos-Regular",
		lineHeight: 15,
		color: "gray"
	},
	songIconsContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 35,
		marginRight: 10
	},
	songIcon: {
		height: 20,
		width: 20
	},
	checkbox: {
		height: 20,
		width: 20,
		borderRadius: 10
	},
	checkboxChecked: {
		backgroundColor: "#5F9CE3",
		alignItems: "center",
		justifyContent: "center"
	},
	checkboxUnchecked: {
		borderWidth: 1,
		borderColor: "lightgrey"
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
	setSelectedMusicCategory: PropTypes.func.isRequired,
	selectedSong: PropTypes.object,
	setSelectedSong: PropTypes.func.isRequired
}
