import { View, ScrollView, StyleSheet } from "react-native"
import PropTypes from "prop-types"
import CategoryTab from "../category-tab/CategoryTab"
import MusicTab from "../music-tab/MusicTab"

export default function ModalMusicSection({
	musicCategories,
	selectedMusicCategory,
	setSelectedMusicCategory,
	selectedSong,
	setSelectedSong
}) {
	return (
		<View style={styles.musicSection}>
			<ScrollView
				horizontal
				style={styles.tabsScrollArea}
				showsHorizontalScrollIndicator={false}
			>
				<View style={styles.tabsScrollContainer}>
					{musicCategories?.map((item, key) => {
						return (
							<CategoryTab
								color={
									selectedMusicCategory?.id === item?.id
										? "white"
										: "rgba(0, 0, 0, 0.04)"
								}
								title={item?.title}
								image={require("../../assets/icons/music-category.svg")}
								onPress={() => {
									setSelectedMusicCategory(item)
								}}
								key={key}
							/>
						)
					})}
				</View>
			</ScrollView>
			<ScrollView
				style={styles.songsScrollArea}
				showsVerticalScrollIndicator={false}
			>
				<View style={styles.songsScrollContainer}>
					{selectedMusicCategory?.songs?.map((item, key) => {
						return (
							<MusicTab
								id={item?.id}
								name={item?.name}
								image={item?.image}
								artist={item?.artist}
								color={
									selectedSong?.id === item?.id
										? "rgba(0, 0, 0, 0.04)"
										: "transparent"
								}
								selectedSong={selectedSong}
								onPress={() => {
									if (selectedSong?.id === item?.id) {
										setSelectedSong(null)
									} else {
										setSelectedSong(item)
									}
								}}
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
	songsScrollArea: {
		flex: 1,
		width: "100%"
	},
	songsScrollContainer: {
		flexDirection: "column",
		gap: 7.5,
		marginHorizontal: 15
	}
})

ModalMusicSection.propTypes = {
	musicCategories: PropTypes.array.isRequired,
	selectedMusicCategory: PropTypes.object,
	setSelectedMusicCategory: PropTypes.func.isRequired,
	selectedSong: PropTypes.object,
	setSelectedSong: PropTypes.func.isRequired
}
