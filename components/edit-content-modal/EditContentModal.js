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
import {
	GestureHandlerRootView,
	gestureHandlerRootHOC,
	Gesture,
	GestureDetector
} from "react-native-gesture-handler"
import Animated, {
	useSharedValue,
	useAnimatedStyle,
	runOnJS
} from "react-native-reanimated"
import { FlashList } from "@shopify/flash-list"
import { AntDesign, FontAwesome5 } from "@expo/vector-icons"
import * as ImagePicker from "expo-image-picker"
import PropTypes from "prop-types"
import EditOptionCard from "../edit-option-card/EditOptionCard"

const Slider = gestureHandlerRootHOC(() => {
	const [sliderValue, setSliderValue] = useState(0)

	const X = useSharedValue(0)

	const panGesture = Gesture?.Pan()
		?.onStart((e) => {
			X.value = e.x
			runOnJS(setSliderValue)(Math.round((X.value / 240) * 100))
		})
		?.onUpdate((e) => {
			X.value = Math.max(0, Math.min(e.x, 240))
			runOnJS(setSliderValue)(Math.round((X.value / 240) * 100))
		})

	const animatedStyles = {
		swipeable: useAnimatedStyle(() => {
			return {
				transform: [{ translateX: X.value }]
			}
		})
	}
	return (
		<GestureDetector gesture={panGesture}>
			<View style={styles.swipeContainer}>
				<Animated.View
					style={[styles.swipeable, animatedStyles.swipeable]}
				>
					<View style={styles.sliderValueContainer}>
						<Text style={styles.sliderValueText}>
							{sliderValue}
						</Text>
					</View>
				</Animated.View>
			</View>
		</GestureDetector>
	)
})
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
	setSelectedSong,
	textEditingOptions,
	selectedTextEditingOption,
	setSelectedTextEditingOption,
	textAlignmentOptions,
	selectedTextAlignment,
	setSelectedTextAlignment,
	textColors,
	stickerCategories,
	selectedStickerCategory,
	setSelectedStickerCategory
}) {
	const [fontsLoaded] = useFonts({
		"Genos-Regular": require("../../assets/fonts/Genos/fonts/ttf/Genos-Regular.ttf")
	})

	const [image, setImage] = useState(null)
	const [previousSelectedOption, setPreviousSelectedOption] = useState()

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
			<GestureHandlerRootView style={{ flex: 1 }}>
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
										: selectedOption?.id === 3
										? selectedTextEditingOption?.id === 7
											? 350
											: 300
										: 415
							}
						]}
					>
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
									<TouchableOpacity
										style={styles.actionButton}
									>
										<Image
											source={require("../../assets/icons/undo.svg")}
											style={styles.actionButtonIcon}
											contentFit="contain"
										/>
									</TouchableOpacity>
								)}
								{selectedOption?.id === 3 && (
									<TouchableOpacity
										style={styles.actionButton}
									>
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
										<Text style={styles.doneButtonText}>
											Done
										</Text>
									)}
								</TouchableOpacity>
							</View>
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
												style={
													styles.allowAccessButtonText
												}
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
										style={styles.tabsScrollArea}
										showsHorizontalScrollIndicator={false}
									>
										<View
											style={styles.tabsScrollContainer}
										>
											{musicCategories?.map(
												(item, key) => {
													return (
														<TouchableOpacity
															style={[
																styles.tabContainer,
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
																	styles.tabIcon
																}
																contentFit="contain"
															/>
															{fontsLoaded && (
																<Text
																	style={
																		styles.tabText
																	}
																>
																	{
																		item?.title
																	}
																</Text>
															)}
														</TouchableOpacity>
													)
												}
											)}
										</View>
									</ScrollView>
									<ScrollView
										style={styles.songsScrollArea}
										showsVerticalScrollIndicator={false}
									>
										<View
											style={styles.songsScrollContainer}
										>
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
							) : selectedOption?.id === 3 ? (
								selectedTextEditingOption?.id === 1 ? (
									<View style={styles.fontSection}>
										<FlashList
											data={new Array(8).fill("Fonts")}
											renderItem={({ item }) => (
												<TouchableOpacity
													style={styles.fontTab}
												>
													{fontsLoaded && (
														<Text
															style={
																styles.fontTabText
															}
														>
															{item}
														</Text>
													)}
												</TouchableOpacity>
											)}
											estimatedItemSize={50}
											numColumns={4}
											ItemSeparatorComponent={() => (
												<View
													style={styles.itemSeparator}
												/>
											)}
											showsVerticalScrollIndicator={false}
										/>
									</View>
								) : selectedTextEditingOption?.id === 2 ? (
									<View style={styles.spaceSection}>
										<View style={styles.sliderBox}>
											<Slider />
										</View>
									</View>
								) : selectedTextEditingOption?.id === 3 ? (
									<View style={styles.spaceSection}>
										<View style={styles.sliderBox}>
											<Slider />
										</View>
									</View>
								) : selectedTextEditingOption?.id === 4 ? (
									<View style={styles.liningSection}>
										{textAlignmentOptions?.map(
											(item, key) => {
												return (
													<TouchableOpacity
														style={[
															styles.textAlignmentOptionCard,
															{
																backgroundColor:
																	selectedTextAlignment?.id ===
																	item?.id
																		? "rgba(27, 196, 105, 0.5)"
																		: "white"
															}
														]}
														onPress={() => {
															setSelectedTextAlignment(
																item
															)
														}}
														key={key}
													>
														<Image
															source={item?.image}
															style={
																styles.textAlignmentIcon
															}
															contentFit="contain"
														/>
														{fontsLoaded && (
															<Text
																style={
																	styles.textAlignmentTitleText
																}
															>
																{item?.title}
															</Text>
														)}
													</TouchableOpacity>
												)
											}
										)}
									</View>
								) : selectedTextEditingOption?.id === 5 ? (
									<View style={styles.spaceSection}>
										<View style={styles.sliderBox}>
											<Slider />
										</View>
									</View>
								) : selectedTextEditingOption?.id === 6 ? (
									<View style={styles.textColorSection}>
										<View
											style={styles.horizontalColorsRow}
										>
											{textColors?.map((item, key) => {
												return (
													<TouchableOpacity
														style={[
															styles.colorBox,
															{
																backgroundColor:
																	item
															}
														]}
														key={key}
													/>
												)
											})}
										</View>
										<View
											style={styles.horizontalColorsRow}
										>
											{textColors?.map((item, key) => {
												return (
													<TouchableOpacity
														style={[
															styles.colorBox,
															{
																backgroundColor:
																	item
															}
														]}
														key={key}
													/>
												)
											})}
										</View>
									</View>
								) : selectedTextEditingOption?.id === 7 ? (
									<View
										style={
											styles.textBackgroundColorSection
										}
									>
										<View
											style={styles.horizontalColorsRow}
										>
											{textColors?.map((item, key) => {
												return (
													<TouchableOpacity
														style={[
															styles.colorBox,
															{
																backgroundColor:
																	item
															}
														]}
														key={key}
													/>
												)
											})}
										</View>
										<View
											style={styles.horizontalColorsRow}
										>
											{textColors?.map((item, key) => {
												return (
													<TouchableOpacity
														style={[
															styles.colorBox,
															{
																backgroundColor:
																	item
															}
														]}
														key={key}
													/>
												)
											})}
										</View>
										<View style={styles.sliderBox}>
											<Slider />
										</View>
									</View>
								) : null
							) : selectedOption?.id === 4 ? (
								<View style={styles.effectSection}>
									<FlashList
										data={new Array(12)}
										renderItem={() => (
											<TouchableOpacity
												style={styles.effectBox}
											/>
										)}
										estimatedItemSize={50}
										numColumns={4}
										ItemSeparatorComponent={() => (
											<View
												style={
													styles.itemSeparatorLarge
												}
											/>
										)}
										showsVerticalScrollIndicator={false}
									/>
								</View>
							) : selectedOption?.id === 5 ? (
								<View style={styles.stickerSection}>
									<ScrollView
										horizontal
										style={styles.tabsScrollArea}
										showsHorizontalScrollIndicator={false}
									>
										<View
											style={styles.tabsScrollContainer}
										>
											{stickerCategories?.map(
												(item, key) => {
													return (
														<TouchableOpacity
															style={[
																styles.tabContainer,
																{
																	backgroundColor:
																		selectedStickerCategory?.id ===
																		item?.id
																			? "white"
																			: "rgba(0, 0, 0, 0.04)"
																}
															]}
															onPress={() => {
																setSelectedStickerCategory(
																	item
																)
															}}
															key={key}
														>
															<Image
																source={require("../../assets/icons/sticker-icon.svg")}
																style={
																	styles.tabIcon
																}
																contentFit="contain"
															/>
															{fontsLoaded && (
																<Text
																	style={
																		styles.tabText
																	}
																>
																	{
																		item?.title
																	}
																</Text>
															)}
														</TouchableOpacity>
													)
												}
											)}
										</View>
									</ScrollView>
									<View style={styles.stickerListContainer}>
										<FlashList
											data={new Array(8)}
											renderItem={() => (
												<TouchableOpacity
													style={styles.effectBox}
												/>
											)}
											estimatedItemSize={50}
											numColumns={4}
											ItemSeparatorComponent={() => (
												<View
													style={
														styles.itemSeparatorLarge
													}
												/>
											)}
											showsVerticalScrollIndicator={false}
										/>
									</View>
								</View>
							) : selectedOption?.id === 6 ? (
								<View style={styles.backsideSection}>
									<FlashList
										data={new Array(12)}
										renderItem={() => (
											<TouchableOpacity
												style={styles.effectBox}
											/>
										)}
										estimatedItemSize={50}
										numColumns={4}
										ItemSeparatorComponent={() => (
											<View
												style={
													styles.itemSeparatorLarge
												}
											/>
										)}
										showsVerticalScrollIndicator={false}
									/>
								</View>
							) : null}
						</View>
						<ScrollView
							horizontal
							style={styles.horizontalScrollArea}
							showsHorizontalScrollIndicator={false}
						>
							<View style={styles.scrollItemsContainer}>
								{selectedOption?.id === 3 && (
									<EditOptionCard
										image={require("../../assets/icons/back.svg")}
										title="Back"
										color="lightgrey"
										onPress={() => {
											if (previousSelectedOption) {
												setSelectedOption(
													previousSelectedOption
												)
											} else {
												setOpenModal(false)
											}
										}}
									/>
								)}
								{selectedOption?.id === 3
									? textEditingOptions?.map((item, key) => {
											return (
												<EditOptionCard
													image={item?.image}
													title={item?.name}
													color={
														selectedTextEditingOption?.id ===
														item?.id
															? "rgba(27, 196, 105, 0.5)"
															: "lightgrey"
													}
													onPress={() => {
														setSelectedTextEditingOption(
															item
														)
													}}
													key={key}
												/>
											)
									  })
									: options?.map((item, key) => {
											return (
												<EditOptionCard
													image={item?.image}
													title={item?.title}
													color={
														selectedOption?.id ===
														item?.id
															? "rgba(27, 196, 105, 0.5)"
															: "lightgrey"
													}
													onPress={() => {
														setPreviousSelectedOption(
															selectedOption
														)
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
			</GestureHandlerRootView>
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
		maxHeight: 70,
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
	circleSeparatorLarge: {
		height: 4,
		width: 4,
		borderRadius: 2,
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
	tabsScrollArea: {
		maxHeight: 25,
		width: "100%",
		marginVertical: 7.5
	},
	tabsScrollContainer: {
		flexDirection: "row",
		gap: 10,
		paddingHorizontal: 15
	},
	tabContainer: {
		height: 25,
		borderRadius: 3.5,
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 7.5,
		gap: 7.5
	},
	tabIcon: {
		height: 16.5,
		width: 16.5
	},
	tabText: {
		fontSize: 15,
		fontFamily: "Genos-Regular",
		color: "#1C274C",
		lineHeight: 17.5
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
	},
	fontSection: {
		flex: 1,
		width: "100%",
		padding: 15
	},
	fontTab: {
		height: 25,
		width: "90%",
		backgroundColor: "lightgrey",
		borderRadius: 5,
		marginHorizontal: "auto",
		alignItems: "center",
		justifyContent: "center"
	},
	fontTabText: {
		fontSize: 15,
		color: "white",
		fontFamily: "Genos-Regular",
		lineHeight: 17.5
	},
	itemSeparator: {
		height: 10
	},
	itemSeparatorLarge: {
		height: 15
	},
	spaceSection: {
		flex: 1,
		width: "100%",
		alignItems: "center",
		justifyContent: "center"
	},
	sliderBox: {
		height: 75,
		width: 275,
		backgroundColor: "lightgrey",
		borderRadius: 10,
		alignItems: "center"
	},
	swipeContainer: {
		height: 5,
		width: 250,
		borderRadius: 2.5,
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "center",
		marginTop: 45
	},
	swipeable: {
		height: 10,
		width: 10,
		borderRadius: 5,
		backgroundColor: "white",
		position: "absolute",
		left: 0,
		zIndex: 2,
		elevation: 5,
		shadowOffset: { width: 0, height: 2.5 },
		shadowOpacity: 0.5,
		shadowRadius: 3
	},
	sliderValueContainer: {
		position: "absolute",
		top: -30,
		left: -5,
		height: 20,
		width: 20,
		borderRadius: 10,
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "center"
	},
	sliderValueText: {
		fontSize: 7.5
	},
	liningSection: {
		flex: 1,
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-evenly"
	},
	textAlignmentOptionCard: {
		height: 85,
		width: "21.5%",
		borderRadius: 7.5,
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-evenly"
	},
	textAlignmentIcon: {
		height: 40,
		width: 40
	},
	textAlignmentTitleText: {
		fontSize: 13.5,
		color: "#1C274C",
		fontFamily: "Genos-Regular"
	},
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
	},
	textBackgroundColorSection: {
		flex: 1,
		width: "100%",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-evenly"
	},
	effectSection: {
		flex: 1,
		width: "100%",
		paddingTop: 15
	},
	effectBox: {
		height: 70,
		width: 70,
		backgroundColor: "lightgrey",
		borderRadius: 5,
		marginHorizontal: "auto",
		alignItems: "center",
		justifyContent: "center"
	},
	stickerSection: {
		flex: 1,
		width: "100%",
		flexDirection: "column",
		alignItems: "center",
		gap: 10
	},
	stickerListContainer: {
		flex: 1,
		width: "100%"
	},
	backsideSection: {
		flex: 1,
		width: "100%",
		paddingTop: 15
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
	setSelectedSong: PropTypes.func.isRequired,
	textEditingOptions: PropTypes.array.isRequired,
	selectedTextEditingOption: PropTypes.object,
	setSelectedTextEditingOption: PropTypes.func.isRequired,
	textAlignmentOptions: PropTypes.array.isRequired,
	selectedTextAlignment: PropTypes.object,
	setSelectedTextAlignment: PropTypes.func.isRequired,
	textColors: PropTypes.array.isRequired,
	stickerCategories: PropTypes.array.isRequired,
	selectedStickerCategory: PropTypes.object,
	setSelectedStickerCategory: PropTypes.func.isRequired
}
