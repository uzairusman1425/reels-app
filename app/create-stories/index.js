import { View, ScrollView, StyleSheet } from "react-native"
import { FlashList } from "@shopify/flash-list"
import GallerySectionHeader from "../../components/gallery-section-header/GallerySectionHeader"
import ContentCard from "../../components/content-card/ContentCard"

export default function Page() {
	const data = [
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
		},
		{
			image: require("../../assets/images/bg-image.png"),
			isTrending: false
		},
		{
			image: require("../../assets/images/bg-image.png"),
			isTrending: false
		},
		{
			image: require("../../assets/images/bg-image.png"),
			isTrending: false
		},
		{
			image: require("../../assets/images/bg-image.png"),
			isTrending: false
		},
		{
			image: require("../../assets/images/bg-image.png"),
			isTrending: false
		},
		{
			image: require("../../assets/images/bg-image.png"),
			isTrending: false
		},
		{
			image: require("../../assets/images/bg-image.png"),
			isTrending: false
		},
		{
			image: require("../../assets/images/bg-image.png"),
			isTrending: false
		},
		{
			image: require("../../assets/images/bg-image.png"),
			isTrending: false
		}
	]

	return (
		<View style={styles.container}>
			<GallerySectionHeader
				image={require("../../assets/icons/create-stories.svg")}
				title="Create Stories"
			/>
			<FlashList
				data={data}
				renderItem={({ item }) => (
					<ContentCard
						image={item?.image}
						isTrending={item?.isTrending}
						href="/edit-content"
					/>
				)}
				estimatedItemSize={200}
				numColumns={3}
				ItemSeparatorComponent={() => (
					<View style={styles.itemSeparator} />
				)}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		paddingHorizontal: 15
	},
	itemSeparator: {
		height: 10
	}
})
