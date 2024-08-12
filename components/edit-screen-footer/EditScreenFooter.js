import { View, ScrollView, StyleSheet } from "react-native"
import { usePathname } from "expo-router"
import PropTypes from "prop-types"
import EditOptionCard from "../edit-option-card/EditOptionCard"

export default function EditScreenFooter({
	options,
	setOpenModal,
	setSelectedOption
}) {
	const pathname = usePathname()

	return (
		<View style={styles.footerContainer}>
			{pathname === "/edit-ad" ? (
				<View style={styles.horizontallyCenteredContainer}>
					{options?.map((item, key) => {
						return (
							<EditOptionCard
								image={item?.image}
								title={item?.title}
								color="gray"
								onPress={() => {
									setSelectedOption(item)
									setOpenModal(true)
								}}
								key={key}
							/>
						)
					})}
				</View>
			) : (
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
									color="gray"
									onPress={() => {
										setSelectedOption(item)
										setOpenModal(true)
									}}
									key={key}
								/>
							)
						})}
					</View>
				</ScrollView>
			)}
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
		alignItems: "center",
		gap: 15,
		paddingHorizontal: 15
	},
	horizontallyCenteredContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 10,
		marginTop: 15,
		marginBottom: 25,
		marginHorizontal: "auto"
	}
})

EditScreenFooter.propTypes = {
	options: PropTypes.array.isRequired,
	setOpenModal: PropTypes.func.isRequired,
	setSelectedOption: PropTypes.func.isRequired
}
