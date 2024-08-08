import { View, StyleSheet } from "react-native"
import PropTypes from "prop-types"
import TextAlignmentCard from "../text-alignment-card/TextAlignmentCard"

export default function ModalTextAlignmentSection({
	textAlignmentOptions,
	selectedTextAlignment,
	setSelectedTextAlignment
}) {
	return (
		<View style={styles.sectionContainer}>
			{textAlignmentOptions?.map((item, key) => {
				return (
					<TextAlignmentCard
						color={
							selectedTextAlignment?.id === item?.id
								? "rgba(27, 196, 105, 0.5)"
								: "white"
						}
						image={item?.image}
						title={item?.title}
						onPress={() => {
							setSelectedTextAlignment(item)
						}}
						key={key}
					/>
				)
			})}
		</View>
	)
}

const styles = StyleSheet.create({
	sectionContainer: {
		flex: 1,
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-evenly"
	}
})

ModalTextAlignmentSection.propTypes = {
	textAlignmentOptions: PropTypes.array.isRequired,
	selectedTextAlignment: PropTypes.object.isRequired,
	setSelectedTextAlignment: PropTypes.func.isRequired
}
