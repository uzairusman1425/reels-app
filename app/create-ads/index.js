import { View, ScrollView, StyleSheet } from "react-native"
import GallerySectionHeader from "../../components/gallery-section-header/GallerySectionHeader"
import ContentCard from "../../components/content-card/ContentCard"

export default function Page() {
	const data = {
		business_ads: [
			{
				image: require("../../assets/images/bg-image.png"),
				isTrending: true
			},
			{
				image: require("../../assets/images/bg-image.png"),
				isTrending: true
			},
			{
				image: require("../../assets/images/bg-image.png"),
				isTrending: true
			}
		],
		business_cards: [
			{
				image: require("../../assets/images/bg-image.png"),
				isTrending: true
			},
			{
				image: require("../../assets/images/bg-image.png"),
				isTrending: true
			},
			{
				image: require("../../assets/images/bg-image.png"),
				isTrending: true
			}
		],
		services: [
			{
				image: require("../../assets/images/bg-image.png"),
				isTrending: true
			},
			{
				image: require("../../assets/images/bg-image.png"),
				isTrending: true
			},
			{
				image: require("../../assets/images/bg-image.png"),
				isTrending: true
			}
		],
		foods_and_drinks: [
			{
				image: require("../../assets/images/bg-image.png"),
				isTrending: true
			},
			{
				image: require("../../assets/images/bg-image.png"),
				isTrending: true
			},
			{
				image: require("../../assets/images/bg-image.png"),
				isTrending: true
			}
		],
		advertisement: [
			{
				image: require("../../assets/images/bg-image.png"),
				isTrending: true
			},
			{
				image: require("../../assets/images/bg-image.png"),
				isTrending: true
			},
			{
				image: require("../../assets/images/bg-image.png"),
				isTrending: true
			}
		]
	}

	return (
		<ScrollView>
			<View style={styles.container}>
				<GallerySectionHeader
					image={require("../../assets/icons/image.svg")}
					title="Business Ads"
				/>
				<View style={styles.itemListContainer}>
					{data?.business_ads?.map((item, key) => {
						return (
							<View style={styles.contentCardWrapper} key={key}>
								<ContentCard
									image={item?.image}
									isTrending={item?.isTrending}
								/>
							</View>
						)
					})}
				</View>
				<GallerySectionHeader
					image={require("../../assets/icons/image.svg")}
					title="Business Cards"
				/>
				<View style={styles.itemListContainer}>
					{data?.business_cards?.map((item, key) => {
						return (
							<View style={styles.contentCardWrapper} key={key}>
								<ContentCard
									image={item?.image}
									isTrending={item?.isTrending}
								/>
							</View>
						)
					})}
				</View>
				<GallerySectionHeader
					image={require("../../assets/icons/image.svg")}
					title="Services"
				/>
				<View style={styles.itemListContainer}>
					{data?.services?.map((item, key) => {
						return (
							<View style={styles.contentCardWrapper} key={key}>
								<ContentCard
									image={item?.image}
									isTrending={item?.isTrending}
								/>
							</View>
						)
					})}
				</View>
				<GallerySectionHeader
					image={require("../../assets/icons/image.svg")}
					title="Foods & Drinks"
				/>
				<View style={styles.itemListContainer}>
					{data?.foods_and_drinks?.map((item, key) => {
						return (
							<View style={styles.contentCardWrapper} key={key}>
								<ContentCard
									image={item?.image}
									isTrending={item?.isTrending}
								/>
							</View>
						)
					})}
				</View>
				<GallerySectionHeader
					image={require("../../assets/icons/image.svg")}
					title="Advertisement"
				/>
				<View style={styles.itemListContainer}>
					{data?.advertisement?.map((item, key) => {
						return (
							<View style={styles.contentCardWrapper} key={key}>
								<ContentCard
									image={item?.image}
									isTrending={item?.isTrending}
								/>
							</View>
						)
					})}
				</View>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "column",
		paddingHorizontal: 15,
		paddingBottom: 25
	},
	itemListContainer: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center"
	},
	contentCardWrapper: {
		flex: 3
	}
})
