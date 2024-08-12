import { useState } from "react"
import {
	View,
	ScrollView,
	ImageBackground,
	TouchableOpacity,
	Text,
	TextInput,
	StyleSheet
} from "react-native"
import { Image } from "expo-image"
import { useFonts } from "expo-font"
import { useRouter } from "expo-router"
import ToggleSwitch from "toggle-switch-react-native"
import Feather from "@expo/vector-icons/Feather"
import PreviewScreenHeader from "../../components/preview-screen-header/PreviewScreenHeader"

export default function Page() {
	const [fontsLoaded] = useFonts({
		"Genos-Medium": require("../../assets/fonts/Genos/fonts/ttf/Genos-Medium.ttf"),
		"Genos-Light": require("../../assets/fonts/Genos/fonts/ttf/Genos-Light.ttf")
	})

	const tabs = [
		{
			id: 1,
			title: "Select Country",
			description: "Share in whole country",
			icon: require("../../assets/icons/country.svg"),
			max: 3,
			items: [
				{
					id: 1,
					name: "Kurdistan",
					image: require("../../assets/images/kurdistan.png"),
					totalUsers: "999k"
				},
				{
					id: 2,
					name: "Kurdistan",
					image: require("../../assets/images/kurdistan.png"),
					totalUsers: "999k"
				},
				{
					id: 3,
					name: "Kurdistan",
					image: require("../../assets/images/kurdistan.png"),
					totalUsers: "999k"
				},
				{
					id: 4,
					name: "Kurdistan",
					image: require("../../assets/images/kurdistan.png"),
					totalUsers: "999k"
				},
				{
					id: 5,
					name: "Kurdistan",
					image: require("../../assets/images/kurdistan.png"),
					totalUsers: "999k"
				},
				{
					id: 6,
					name: "Kurdistan",
					image: require("../../assets/images/kurdistan.png"),
					totalUsers: "999k"
				},
				{
					id: 7,
					name: "Kurdistan",
					image: require("../../assets/images/kurdistan.png"),
					totalUsers: "999k"
				},
				{
					id: 8,
					name: "Kurdistan",
					image: require("../../assets/images/kurdistan.png"),
					totalUsers: "999k"
				},
				{
					id: 9,
					name: "Kurdistan",
					image: require("../../assets/images/kurdistan.png"),
					totalUsers: "999k"
				},
				{
					id: 10,
					name: "Kurdistan",
					image: require("../../assets/images/kurdistan.png"),
					totalUsers: "999k"
				}
			]
		},
		{
			id: 2,
			title: "Select City",
			description: "Share in single city",
			icon: require("../../assets/icons/city.svg"),
			max: 6,
			items: [
				{
					id: 1,
					name: "City Name",
					image: require("../../assets/images/germany.png"),
					totalUsers: "10k"
				},
				{
					id: 2,
					name: "City Name",
					image: require("../../assets/images/germany.png"),
					totalUsers: "10k"
				},
				{
					id: 3,
					name: "City Name",
					image: require("../../assets/images/germany.png"),
					totalUsers: "10k"
				},
				{
					id: 4,
					name: "City Name",
					image: require("../../assets/images/germany.png"),
					totalUsers: "10k"
				},
				{
					id: 5,
					name: "City Name",
					image: require("../../assets/images/germany.png"),
					totalUsers: "10k"
				},
				{
					id: 6,
					name: "City Name",
					image: require("../../assets/images/germany.png"),
					totalUsers: "10k"
				},
				{
					id: 7,
					name: "City Name",
					image: require("../../assets/images/germany.png"),
					totalUsers: "10k"
				},
				{
					id: 8,
					name: "City Name",
					image: require("../../assets/images/germany.png"),
					totalUsers: "10k"
				},
				{
					id: 9,
					name: "City Name",
					image: require("../../assets/images/germany.png"),
					totalUsers: "10k"
				},
				{
					id: 10,
					name: "City Name",
					image: require("../../assets/images/germany.png"),
					totalUsers: "10k"
				}
			]
		}
	]

	const [selectedTab, setSelectedTab] = useState(tabs[0])
	const [search, setSearch] = useState("")

	const router = useRouter()

	return (
		<View style={styles.container}>
			<PreviewScreenHeader />
			<ImageBackground
				source={require("../../assets/images/background-image-dark.png")}
				style={styles.imageBackground}
				resizeMode="cover"
			>
				<View style={styles.bodyContainer}>
					<View style={styles.selectRegionCard}>
						<View style={styles.tabsLayoutContainer}>
							{tabs?.map((item, key) => {
								return (
									<TouchableOpacity
										style={[
											styles.tabContainer,
											{
												backgroundColor:
													selectedTab?.id === item?.id
														? "white"
														: "lightgrey"
											}
										]}
										onPress={() => {
											setSelectedTab(item)
										}}
										key={key}
									>
										<Image
											source={item?.icon}
											style={styles.tabIcon}
											contentFit="contain"
										/>
										<View style={styles.tabTextContainer}>
											{fontsLoaded && (
												<Text
													style={styles.tabTitleText}
												>
													{item?.title}
												</Text>
											)}
											{fontsLoaded && (
												<Text
													style={
														styles.tabDescriptionText
													}
												>
													{item?.description}
												</Text>
											)}
										</View>
									</TouchableOpacity>
								)
							})}
						</View>
						<View style={styles.informationBoxContainer}>
							<Image
								source={require("../../assets/icons/information.svg")}
								style={styles.informationIcon}
								contentFit="contain"
							/>
							<View style={styles.informationTextContainer}>
								<View style={styles.informationTitleContainer}>
									<View style={styles.circleSeparator} />
									{fontsLoaded && (
										<Text
											style={styles.informationTitleText}
										>
											Information
										</Text>
									)}
									<View style={styles.circleSeparator} />
								</View>
								{fontsLoaded && (
									<Text
										style={
											styles.informationDescriptionText
										}
									>
										No Backup found on this Account
									</Text>
								)}
							</View>
							<View style={styles.emptyView} />
						</View>
						<View style={styles.sectionTitleContainer}>
							{fontsLoaded && (
								<Text style={styles.sectionTitleText}>
									{selectedTab?.title}
								</Text>
							)}
							{fontsLoaded && (
								<Text style={styles.maxValueText}>
									Max. {selectedTab?.max}{" "}
									{selectedTab?.id === 1
										? "countries"
										: "cities"}
								</Text>
							)}
						</View>
						{selectedTab?.id === 2 && (
							<View style={styles.searchInputFieldContainer}>
								{fontsLoaded && (
									<TextInput
										style={styles.searchInputField}
										value={search}
										onChangeText={setSearch}
										placeholder="Select Country"
									/>
								)}
								<TouchableOpacity style={styles.crossButton}>
									<Feather
										name="x"
										size={17.5}
										color="white"
									/>
								</TouchableOpacity>
							</View>
						)}
						<ScrollView showsVerticalScrollIndicator={false}>
							<View style={styles.scrollContainer}>
								{selectedTab?.items?.map((item, key) => {
									const [isEnabled, setIsEnabled] =
										useState(false)
									return (
										<View
											style={styles.listItemWrapper}
											key={key}
										>
											<View
												style={styles.listItemContainer}
											>
												<View
													style={
														styles.listItemDetailsContainer
													}
												>
													<View
														style={
															styles.locationFlagNameContainer
														}
													>
														<Image
															source={item?.image}
															style={
																styles.flagIcon
															}
															contentFit="cover"
														/>
														{fontsLoaded && (
															<Text
																style={
																	styles.locationNameText
																}
															>
																{item?.name}
															</Text>
														)}
													</View>
													<View
														style={
															styles.locationFlagNameContainer
														}
													>
														<View
															style={
																styles.emptyViewSmall
															}
														/>
														{fontsLoaded && (
															<Text
																style={
																	styles.totalUsersText
																}
															>
																Total Users{" "}
																{
																	item?.totalUsers
																}
															</Text>
														)}
													</View>
												</View>
												<ToggleSwitch
													isOn={isEnabled}
													onColor="#1C274C"
													offColor="lightgrey"
													size="small"
													onToggle={() =>
														setIsEnabled(!isEnabled)
													}
												/>
											</View>
											{key <
												selectedTab?.items?.length -
													1 && (
												<View
													style={
														styles.horizontalSeparator
													}
												/>
											)}
										</View>
									)
								})}
							</View>
						</ScrollView>
					</View>
				</View>
				<View style={styles.footerContainer}>
					<TouchableOpacity
						style={styles.arrowButton}
						onPress={() => {
							router?.back()
						}}
					>
						<Image
							source={require("../../assets/icons/left-arrow.svg")}
							style={styles.arrowIcon}
							contentFit="contain"
						/>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.arrowButton}
						onPress={() => {
							router?.navigate("/select-plan")
						}}
					>
						<Image
							source={require("../../assets/icons/right-arrow.svg")}
							style={styles.arrowIcon}
							contentFit="contain"
						/>
					</TouchableOpacity>
				</View>
			</ImageBackground>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		backgroundColor: "black"
	},
	imageBackground: {
		flex: 1,
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		flexDirection: "column"
	},
	bodyContainer: {
		flex: 1,
		paddingTop: 15,
		alignItems: "center"
	},
	selectRegionCard: {
		width: "95%",
		height: 500,
		borderRadius: 10,
		backgroundColor: "white",
		elevation: 5,
		shadowOffset: { width: 0, height: 5 },
		shadowOpacity: 0.5,
		shadowRadius: 3,
		flexDirection: "column",
		alignItems: "center",
		padding: 10,
		gap: 10
	},
	tabsLayoutContainer: {
		width: "100%",
		height: 55,
		backgroundColor: "rgba(0, 0, 0, 0.06)",
		borderRadius: 10,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		padding: 5
	},
	tabContainer: {
		height: "100%",
		width: "47.5%",
		borderRadius: 7.5,
		paddingHorizontal: 5,
		flexDirection: "row",
		alignItems: "center",
		gap: 7.5
	},
	tabIcon: {
		height: 22.5,
		width: 22.5
	},
	tabTextContainer: {
		flexDirection: "column"
	},
	tabTitleText: {
		fontSize: 13.5,
		fontFamily: "Genos-Medium",
		color: "#1C274C",
		opacity: 0.6
	},
	tabDescriptionText: {
		fontSize: 11.5,
		fontFamily: "Genos-Light",
		color: "#1C274C",
		opacity: 0.4
	},
	informationBoxContainer: {
		width: "95%",
		height: 55,
		backgroundColor: "rgba(0, 0, 0, 0.06)",
		borderRadius: 10,
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 10
	},
	informationIcon: {
		height: 30,
		width: 30
	},
	informationTextContainer: {
		flex: 1,
		flexDirection: "column",
		alignItems: "center",
		gap: 5
	},
	informationTitleContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 10
	},
	informationTitleText: {
		fontSize: 17.5,
		fontFamily: "Genos-Medium",
		color: "#64748B",
		lineHeight: 20
	},
	informationDescriptionText: {
		fontSize: 12.5,
		fontFamily: "Genos-light",
		color: "red"
	},
	circleSeparator: {
		height: 3,
		width: 3,
		borderRadius: 1.5,
		backgroundColor: "black",
		opacity: 0.4
	},
	emptyView: {
		width: 30
	},
	emptyViewSmall: {
		width: 17.5
	},
	sectionTitleContainer: {
		width: "95%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginVertical: 7.5
	},
	sectionTitleText: {
		fontSize: 17.5,
		fontFamily: "Genos-Medium",
		color: "#1C274C",
		opacity: 0.6
	},
	maxValueText: {
		fontSize: 15,
		fontFamily: "Genos-Light",
		color: "#1C274C",
		opacity: 0.6
	},
	searchInputFieldContainer: {
		height: 50,
		width: "95%",
		borderRadius: 10,
		borderWidth: 1.25,
		borderColor: "rgba(0, 0, 0, 0.1)",
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 12.5,
		gap: 5
	},
	searchInputField: {
		flex: 1,
		fontSize: 20,
		fontFamily: "Genos-Medium"
	},
	crossButton: {
		height: 25,
		width: 25,
		borderRadius: 15,
		backgroundColor: "lightgrey",
		alignItems: "center",
		justifyContent: "center"
	},
	scrollContainer: {
		width: "95%",
		flexDirection: "column",
		gap: 10
	},
	listItemWrapper: {
		width: "100%",
		flexDirection: "column",
		alignItems: "center",
		gap: 5
	},
	listItemContainer: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between"
	},
	listItemDetailsContainer: {
		flexDirection: "column"
	},
	locationFlagNameContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 10
	},
	flagIcon: {
		height: 17.5,
		width: 17.5,
		borderRadius: 10,
		overflow: "hidden"
	},
	locationNameText: {
		fontSize: 17.5,
		fontFamily: "Genos-Medium",
		color: "#1C274C",
		opacity: 0.6,
		lineHeight: 20
	},
	totalUsersText: {
		fontSize: 15,
		fontFamily: "Genos-Light",
		color: "#1C274C",
		opacity: 0.4,
		lineHeight: 20
	},
	horizontalSeparator: {
		width: "100%",
		height: 1,
		backgroundColor: "lightgrey"
	},
	footerContainer: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingTop: 15,
		paddingHorizontal: 15,
		paddingBottom: 25
	},
	arrowButton: {
		height: 40,
		width: 40,
		borderRadius: 20,
		backgroundColor: "gray",
		alignItems: "center",
		justifyContent: "center"
	},
	arrowIcon: {
		height: 25,
		width: 25
	}
})
