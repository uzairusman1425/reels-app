import { View, ScrollView, TouchableOpacity, StyleSheet } from "react-native"
import { FlashList } from "@shopify/flash-list"
import PropTypes from "prop-types"
import CategoryTab from "../category-tab/CategoryTab"

export default function ModalStickerSection({
	stickerCategories,
	selectedStickerCategory,
	setSelectedStickerCategory
}) {
	return (
		<View style={styles.stickerSection}>
			<ScrollView
				horizontal
				style={styles.tabsScrollArea}
				showsHorizontalScrollIndicator={false}
			>
				<View style={styles.tabsScrollContainer}>
					{stickerCategories?.map((item, key) => {
						return (
							<CategoryTab
								color={
									selectedStickerCategory?.id === item?.id
										? "white"
										: "rgba(0, 0, 0, 0.04)"
								}
								title={item?.title}
								image={require("../../assets/icons/sticker-icon.svg")}
								onPress={() => {
									setSelectedStickerCategory(item)
								}}
								key={key}
							/>
						)
					})}
				</View>
			</ScrollView>
			<View style={styles.stickerListContainer}>
				<FlashList
					data={new Array(8)}
					renderItem={() => (
						<TouchableOpacity style={styles.effectBox} />
					)}
					estimatedItemSize={50}
					numColumns={4}
					ItemSeparatorComponent={() => (
						<View style={styles.itemSeparatorLarge} />
					)}
					showsVerticalScrollIndicator={false}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
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

ModalStickerSection.propTypes = {
	stickerCategories: PropTypes.array.isRequired,
	selectedStickerCategory: PropTypes.object,
	setSelectedStickerCategory: PropTypes.func.isRequired
}
