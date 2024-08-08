import { View, TouchableOpacity, StyleSheet } from "react-native"
import { FlashList } from "@shopify/flash-list"

export default function ModalEffectSection() {
	return (
		<View style={styles.effectSection}>
			<FlashList
				data={new Array(12)}
				renderItem={() => <TouchableOpacity style={styles.effectBox} />}
				estimatedItemSize={50}
				numColumns={4}
				ItemSeparatorComponent={() => (
					<View style={styles.itemSeparatorLarge} />
				)}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
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
	itemSeparatorLarge: {
		height: 15
	}
})
