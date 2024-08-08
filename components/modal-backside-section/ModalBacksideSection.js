import { View, TouchableOpacity, StyleSheet } from "react-native"
import { FlashList } from "@shopify/flash-list"

export default function ModalBacksideSection() {
	return (
		<View style={styles.backsideSection}>
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
	backsideSection: {
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
