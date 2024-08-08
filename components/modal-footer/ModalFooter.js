import { View, ScrollView, StyleSheet } from "react-native"
import EditOptionCard from "../edit-option-card/EditOptionCard"
import PropTypes from "prop-types"

export default function ModalFooter({
	options,
	selectedOption,
	setSelectedOption,
	textEditingOptions,
	selectedTextEditingOption,
	setSelectedTextEditingOption,
	previousSelectedOption,
	setPreviousSelectedOption,
	setOpenModal
}) {
	return (
		<ScrollView
			horizontal
			style={styles.horizontalScrollArea}
			showsHorizontalScrollIndicator={false}
		>
			<View style={styles.scrollItemsContainer}>
				{selectedOption?.id === 3 && (
					<EditOptionCard
						image={require("../../assets/icons/back.svg")}
						title="Back"
						color="lightgrey"
						onPress={() => {
							if (previousSelectedOption) {
								setSelectedOption(previousSelectedOption)
							} else {
								setOpenModal(false)
							}
						}}
					/>
				)}
				{selectedOption?.id === 3
					? textEditingOptions?.map((item, key) => {
							return (
								<EditOptionCard
									image={item?.image}
									title={item?.name}
									color={
										selectedTextEditingOption?.id ===
										item?.id
											? "rgba(27, 196, 105, 0.5)"
											: "lightgrey"
									}
									onPress={() => {
										setSelectedTextEditingOption(item)
									}}
									key={key}
								/>
							)
					  })
					: options?.map((item, key) => {
							return (
								<EditOptionCard
									image={item?.image}
									title={item?.title}
									color={
										selectedOption?.id === item?.id
											? "rgba(27, 196, 105, 0.5)"
											: "lightgrey"
									}
									onPress={() => {
										setPreviousSelectedOption(
											selectedOption
										)
										setSelectedOption(item)
									}}
									key={key}
								/>
							)
					  })}
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	horizontalScrollArea: {
		maxHeight: 70,
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

ModalFooter.propTypes = {
	options: PropTypes.array.isRequired,
	selectedOption: PropTypes.object,
	setSelectedOption: PropTypes.func.isRequired,
	textEditingOptions: PropTypes.array.isRequired,
	selectedTextEditingOption: PropTypes.object.isRequired,
	setSelectedTextEditingOption: PropTypes.func.isRequired,
	previousSelectedOption: PropTypes.object,
	setPreviousSelectedOption: PropTypes.func.isRequired,
	setOpenModal: PropTypes.func.isRequired
}
