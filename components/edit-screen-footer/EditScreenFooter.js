import { View, ScrollView, StyleSheet } from "react-native"
import EditOptionCard from "../edit-option-card/EditOptionCard"

export default function EditScreenFooter() {
	const options = [
		{
			image: require("../../assets/icons/media.png"),
			title: "Media"
		},
		{
			image: require("../../assets/icons/music.png"),
			title: "Music"
		},
		{
			image: require("../../assets/icons/text.png"),
			title: "Text"
		},
		{
			image: require("../../assets/icons/effect.png"),
			title: "Effect"
		},
		{
			image: require("../../assets/icons/sticker.png"),
			title: "Sticker"
		},
		{
			image: require("../../assets/icons/backside.png"),
			title: "Backside"
		}
	]

	return (
		<View style={styles.footerContainer}>
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
								key={key}
							/>
						)
					})}
				</View>
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	footerContainer: {
		width: "100%",
		backgroundColor: "#222222"
	},
	horizontalScrollArea: {
		width: "100%",
		marginTop: 15,
		marginBottom: 25
	},
	scrollItemsContainer: {
		flexDirection: "row",
		gap: 15,
		paddingHorizontal: 15
	}
})
