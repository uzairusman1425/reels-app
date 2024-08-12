import { useState } from "react"
import {
	View,
	ScrollView,
	ImageBackground,
	Text,
	StyleSheet,
	TouchableOpacity
} from "react-native"
import { Image } from "expo-image"
import { useFonts } from "expo-font"
import Fontisto from "@expo/vector-icons/Fontisto"
import PreviewScreenHeader from "../../components/preview-screen-header/PreviewScreenHeader"

export default function Page() {
	const [fontsLoaded] = useFonts({
		"Genos-Medium": require("../../assets/fonts/Genos/fonts/ttf/Genos-Medium.ttf"),
		"Genos-Light": require("../../assets/fonts/Genos/fonts/ttf/Genos-Light.ttf"),
		"Genos-Regular": require("../../assets/fonts/Genos/fonts/ttf/Genos-Regular.ttf")
	})

	const [selectedPlan, setSelectedPlan] = useState()
	const [accepted, setAccepted] = useState(false)

	const selectedCities = [
		{
			id: 1,
			name: "City Name",
			image: require("../../assets/images/germany.png")
		},
		{
			id: 2,
			name: "City Name",
			image: require("../../assets/images/germany.png")
		},
		{
			id: 3,
			name: "City Name",
			image: require("../../assets/images/germany.png")
		},
		{
			id: 4,
			name: "City Name",
			image: require("../../assets/images/germany.png")
		},
		{
			id: 5,
			name: "City Name",
			image: require("../../assets/images/germany.png")
		}
	]

	return (
		<View style={styles.container}>
			<PreviewScreenHeader />
			<ImageBackground
				source={require("../../assets/images/background-image-dark.png")}
				style={styles.imageBackground}
				resizeMode="cover"
			>
				<View style={styles.bodyContainer}>
					{fontsLoaded && (
						<Text style={styles.sectionTitleText}>
							Your Selections
						</Text>
					)}
					<View style={[styles.card, styles.selectionsCard]}>
						{fontsLoaded && (
							<Text style={styles.selectionsHeaderText}>
								Selected City
							</Text>
						)}
						<ScrollView
							horizontal
							style={styles.tabsScrollArea}
							showsHorizontalScrollIndicator={false}
						>
							<View style={styles.tabsScrollContainer}>
								{selectedCities?.map((item, key) => {
									return (
										<View
											style={styles.tabContainer}
											key={key}
										>
											<Image
												source={item?.image}
												style={styles.tabIcon}
												contentFit="cover"
											/>
											{fontsLoaded && (
												<Text style={styles.tabText}>
													{item?.name}
												</Text>
											)}
										</View>
									)
								})}
							</View>
						</ScrollView>
						<View style={styles.horizontalSeparator} />
						{fontsLoaded && (
							<Text style={styles.selectionsHeaderText}>
								Total Users
							</Text>
						)}
						<View style={styles.totalUsersSectionContainer}>
							<View style={styles.usersBox}>
								<Image
									source={require("../../assets/icons/educated-user.svg")}
									style={styles.usersBoxIcon}
									contentFit="contain"
								/>
								{fontsLoaded && (
									<Text style={styles?.usersBoxTitleText}>
										Educated Users
									</Text>
								)}
								{fontsLoaded && (
									<Text style={styles?.usersQuantityText}>
										2M - 12K
									</Text>
								)}
							</View>
							<View style={styles.usersBox}>
								<Image
									source={require("../../assets/icons/cultivated-user.svg")}
									style={styles.usersBoxIcon}
									contentFit="contain"
								/>
								{fontsLoaded && (
									<Text style={styles?.usersBoxTitleText}>
										Cultivated Users
									</Text>
								)}
								{fontsLoaded && (
									<Text style={styles?.usersQuantityText}>
										2M - 12K
									</Text>
								)}
							</View>
							<View style={styles.usersBox}>
								<Image
									source={require("../../assets/icons/academic-user.svg")}
									style={styles.usersBoxIcon}
									contentFit="contain"
								/>
								{fontsLoaded && (
									<Text style={styles?.usersBoxTitleText}>
										Academic Users
									</Text>
								)}
								{fontsLoaded && (
									<Text style={styles?.usersQuantityText}>
										2M - 12K
									</Text>
								)}
							</View>
						</View>
					</View>
					{fontsLoaded && (
						<Text style={styles.sectionTitleText}>
							Select Your Plan
						</Text>
					)}
					<View style={[styles.card, styles.plansCard]}>
						<View style={styles.plansCardIconsContainer}>
							<Image
								source={require("../../assets/icons/medal-gray.svg")}
								style={styles.plansCardMedalIcon}
								contentFit="contain"
							/>
							<Fontisto
								name="check"
								size={11.5}
								color="#5F9CE3"
							/>
						</View>
						<View style={styles.plansCardBodyContainer}>
							<View style={styles.plansCardHeaderContainer}>
								{fontsLoaded && (
									<Text style={styles.plansCardHeaderText}>
										Standard
									</Text>
								)}
								<View
									style={
										styles.planPriceTextCheckBoxContainer
									}
								>
									{fontsLoaded && (
										<Text
											style={[
												styles.plansCardHeaderText,
												styles.planPriceText
											]}
										>
											1,99 €
										</Text>
									)}
									<TouchableOpacity
										style={[
											styles.planCardCheckBox,
											selectedPlan === "standard"
												? styles.checkBoxChecked
												: styles.checkBoxUnchecked
										]}
										onPress={() => {
											setSelectedPlan("standard")
										}}
									>
										{selectedPlan === "standard" && (
											<Fontisto
												name="check"
												size={7.5}
												color="white"
											/>
										)}
									</TouchableOpacity>
								</View>
							</View>
							<View
								style={styles.plansCardDescriptionTextContainer}
							>
								<View
									style={
										styles.plansCardDescriptionTextWrapper
									}
								>
									{fontsLoaded && (
										<Text
											style={styles.plansCardHeaderText}
										>
											2 Days
										</Text>
									)}
									{fontsLoaded && (
										<Text
											style={
												styles.plansCardDescriptionText
											}
										>
											in the selected category
										</Text>
									)}
								</View>
							</View>
						</View>
					</View>
					<View style={[styles.card, styles.plansCard]}>
						<View style={styles.plansCardIconsContainer}>
							<Image
								source={require("../../assets/icons/medal-blue.svg")}
								style={styles.plansCardMedalIcon}
								contentFit="contain"
							/>
							<Fontisto
								name="check"
								size={11.5}
								color="#5F9CE3"
							/>
						</View>
						<View style={styles.plansCardBodyContainer}>
							<View style={styles.plansCardHeaderContainer}>
								{fontsLoaded && (
									<Text style={styles.plansCardHeaderText}>
										Premium
									</Text>
								)}
								<View
									style={
										styles.planPriceTextCheckBoxContainer
									}
								>
									{fontsLoaded && (
										<Text
											style={[
												styles.plansCardHeaderText,
												styles.planPriceText
											]}
										>
											15,99 €
										</Text>
									)}
									<TouchableOpacity
										style={[
											styles.planCardCheckBox,
											selectedPlan === "premium"
												? styles.checkBoxChecked
												: styles.checkBoxUnchecked
										]}
										onPress={() => {
											setSelectedPlan("premium")
										}}
									>
										{selectedPlan === "premium" && (
											<Fontisto
												name="check"
												size={7.5}
												color="white"
											/>
										)}
									</TouchableOpacity>
								</View>
							</View>
							<View
								style={styles.plansCardDescriptionTextContainer}
							>
								<View
									style={
										styles.plansCardDescriptionTextWrapper
									}
								>
									{fontsLoaded && (
										<Text
											style={styles.plansCardHeaderText}
										>
											3 Days
										</Text>
									)}
									{fontsLoaded && (
										<Text
											style={
												styles.plansCardDescriptionText
											}
										>
											in Selected Category Area and in
										</Text>
									)}
								</View>
								<View
									style={
										styles.plansCardDescriptionTextWrapper
									}
								>
									{fontsLoaded && (
										<Text
											style={
												styles.plansCardDescriptionText
											}
										>
											Selected Location
										</Text>
									)}
									{fontsLoaded && (
										<Text
											style={styles.plansCardHeaderText}
										>
											in Header
										</Text>
									)}
								</View>
							</View>
						</View>
					</View>
					<View style={[styles.card, styles.plansCard]}>
						<View style={styles.plansCardIconsContainer}>
							<Image
								source={require("../../assets/icons/medal-gold.svg")}
								style={styles.plansCardMedalIcon}
								contentFit="contain"
							/>
							<Fontisto
								name="check"
								size={11.5}
								color="#5F9CE3"
							/>
						</View>
						<View style={styles.plansCardBodyContainer}>
							<View style={styles.plansCardHeaderContainer}>
								{fontsLoaded && (
									<Text style={styles.plansCardHeaderText}>
										Advanced
									</Text>
								)}
								<View
									style={
										styles.planPriceTextCheckBoxContainer
									}
								>
									{fontsLoaded && (
										<Text
											style={[
												styles.plansCardHeaderText,
												styles.planPriceText
											]}
										>
											25,99 €
										</Text>
									)}
									<TouchableOpacity
										style={[
											styles.planCardCheckBox,
											selectedPlan === "advanced"
												? styles.checkBoxChecked
												: styles.checkBoxUnchecked
										]}
										onPress={() => {
											setSelectedPlan("advanced")
										}}
									>
										{selectedPlan === "advanced" && (
											<Fontisto
												name="check"
												size={7.5}
												color="white"
											/>
										)}
									</TouchableOpacity>
								</View>
							</View>
							<View
								style={styles.plansCardDescriptionTextContainer}
							>
								<View
									style={
										styles.plansCardDescriptionTextWrapper
									}
								>
									{fontsLoaded && (
										<Text
											style={styles.plansCardHeaderText}
										>
											5 Days
										</Text>
									)}
									{fontsLoaded && (
										<Text
											style={
												styles.plansCardDescriptionText
											}
										>
											in Selected Category and in
										</Text>
									)}
								</View>
								<View
									style={
										styles.plansCardDescriptionTextWrapper
									}
								>
									{fontsLoaded && (
										<Text
											style={styles.plansCardHeaderText}
										>
											Feeds
										</Text>
									)}
									{fontsLoaded && (
										<Text
											style={
												styles.plansCardDescriptionText
											}
										>
											Area
										</Text>
									)}
								</View>
							</View>
						</View>
					</View>
					<View style={styles.acceptPolicyCheckboxContainer}>
						<TouchableOpacity
							style={[
								styles.acceptPolicyCheckbox,
								accepted
									? styles.checkBoxChecked
									: styles.checkBoxUnchecked
							]}
							onPress={() => {
								setAccepted(!accepted)
							}}
						>
							{accepted && (
								<Fontisto
									name="check"
									size={7.5}
									color="white"
								/>
							)}
						</TouchableOpacity>
						<View style={styles.acceptPolicyCheckboxTextWrapper}>
							{fontsLoaded && (
								<Text style={styles.acceptPolicyCheckboxText}>
									Accept policy and
								</Text>
							)}
							{fontsLoaded && (
								<Text
									style={[
										styles.acceptPolicyCheckboxText,
										styles.acceptPolicyCheckboxTextBlue
									]}
								>
									terms
								</Text>
							)}
						</View>
					</View>
					<TouchableOpacity style={styles.publishNowButton}>
						{fontsLoaded && (
							<Text style={styles.publishNowButtonText}>
								Publish Now
							</Text>
						)}
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
		flexDirection: "column",
		padding: 10,
		gap: 10
	},
	sectionTitleText: {
		fontSize: 20,
		fontFamily: "Genos-Medium",
		color: "white"
	},
	card: {
		width: "100%",
		borderRadius: 10,
		backgroundColor: "white",
		elevation: 5,
		shadowOffset: { width: 0, height: 5 },
		shadowOpacity: 0.5,
		shadowRadius: 3
	},
	selectionsCard: {
		flexDirection: "column",
		padding: 10,
		gap: 7.5
	},
	selectionsHeaderText: {
		fontSize: 17.5,
		fontFamily: "Genos-Medium",
		color: "#1C274C",
		opacity: 0.6,
		lineHeight: 20
	},
	tabsScrollArea: {
		maxHeight: 25,
		width: "100%"
	},
	tabsScrollContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 10
	},
	tabContainer: {
		height: 25,
		flexDirection: "row",
		gap: 7.5,
		alignItems: "center",
		paddingHorizontal: 7.5,
		borderRadius: 5,
		backgroundColor: "#E5E5E5"
	},
	tabIcon: {
		height: 15,
		width: 15,
		borderRadius: 10
	},
	tabText: {
		fontSize: 15,
		fontFamily: "Genos-Light",
		color: "#1C274C",
		opacity: 0.6,
		lineHeight: 17.5
	},
	horizontalSeparator: {
		width: "95%",
		height: 1,
		backgroundColor: "lightgrey",
		alignSelf: "center",
		marginTop: 5
	},
	totalUsersSectionContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around"
	},
	usersBox: {
		height: 75,
		width: 100,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: "rgba(0, 0, 0, 0.1)",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-evenly"
	},
	usersBoxIcon: {
		height: 30,
		width: 30
	},
	usersBoxTitleText: {
		fontSize: 12.5,
		fontFamily: "Genos-Medium",
		color: "#1C274C",
		opacity: 0.6
	},
	usersQuantityText: {
		fontSize: 13.5,
		fontFamily: "Genos-Medium",
		color: "#1C274C",
		opacity: 0.4
	},
	plansCard: {
		flexDirection: "row",
		padding: 10,
		gap: 10
	},
	plansCardIconsContainer: {
		flexDirection: "column",
		alignItems: "center",
		gap: 10
	},
	plansCardMedalIcon: {
		height: 27.5,
		width: 27.5
	},
	plansCardBodyContainer: {
		flex: 1,
		flexDirection: "column",
		gap: 10
	},
	plansCardHeaderContainer: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between"
	},
	plansCardHeaderText: {
		fontSize: 17.5,
		fontFamily: "Genos-Medium",
		lineHeight: 20
	},
	planPriceText: {
		color: "red"
	},
	planPriceTextCheckBoxContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 10
	},
	planCardCheckBox: {
		height: 20,
		width: 20,
		borderRadius: 10
	},
	checkBoxUnchecked: {
		borderWidth: 1,
		borderColor: "lightgrey"
	},
	checkBoxChecked: {
		backgroundColor: "#5F9CE3",
		alignItems: "center",
		justifyContent: "center"
	},
	plansCardDescriptionTextContainer: {
		flexDirection: "column"
	},
	plansCardDescriptionTextWrapper: {
		flexDirection: "row",
		alignItems: "center",
		gap: 5
	},
	plansCardDescriptionText: {
		fontSize: 17.5,
		fontFamily: "Genos-Light",
		lineHeight: 20,
		color: "#333333",
		opacity: 0.6
	},
	acceptPolicyCheckboxContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 10,
		padding: 5,
		backgroundColor: "white",
		borderRadius: 5,
		alignSelf: "center",
		marginVertical: 10
	},
	acceptPolicyCheckbox: {
		height: 20,
		width: 20,
		borderRadius: 5
	},
	acceptPolicyCheckboxTextWrapper: {
		flexDirection: "row",
		alignItems: "center",
		gap: 5
	},
	acceptPolicyCheckboxText: {
		fontSize: 15,
		fontFamily: "Genos-Light",
		color: "gray",
		lineHeight: 17.5
	},
	acceptPolicyCheckboxTextBlue: {
		color: "#2B99FF"
	},
	publishNowButton: {
		height: 30,
		paddingHorizontal: 12.5,
		borderRadius: 15,
		backgroundColor: "white",
		alignSelf: "center",
		justifyContent: "center"
	},
	publishNowButtonText: {
		fontSize: 20,
		fontFamily: "Genos-Regular",
		color: "#333333",
		lineHeight: 25
	}
})
