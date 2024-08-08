import { useState } from "react"
import { Modal, View, TouchableWithoutFeedback, StyleSheet } from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import PropTypes from "prop-types"
import ModalHeader from "../modal-header/ModalHeader"
import ModalMediaSection from "../modal-media-section/ModalMediaSection"
import ModalMusicSection from "../modal-music-section/ModalMusicSection"
import ModalFontSection from "../modal-font-section/ModalFontSection"
import ModalTextHighSpaceSection from "../modal-text-high-space-section/ModalTextHighSpaceSection"
import ModalTextSideSpaceSection from "../modal-text-side-space-section/ModalTextSideSpaceSection"
import ModalTextAlignmentSection from "../modal-text-alignment-section/ModalTextAlignmentSection"
import ModalTextSizeSection from "../modal-text-size-section/ModalTextSizeSection"
import ModalTextColorSection from "../modal-text-color-section/ModalTextColorSection"
import ModalTextBackgroundSection from "../modal-text-background-color-section/ModalTextBackgroundSection"
import ModalEffectSection from "../modal-effect-section/ModalEffectSection"
import ModalStickerSection from "../modal-sticker-section/ModalStickerSection"
import ModalBacksideSection from "../modal-backside-section/ModalBacksideSection"
import ModalFooter from "../modal-footer/ModalFooter"
export default function EditContentModal({
	openModal,
	setOpenModal,
	options,
	selectedOption,
	setSelectedOption,
	musicCategories,
	selectedMusicCategory,
	setSelectedMusicCategory,
	selectedSong,
	setSelectedSong,
	textEditingOptions,
	selectedTextEditingOption,
	setSelectedTextEditingOption,
	textAlignmentOptions,
	selectedTextAlignment,
	setSelectedTextAlignment,
	textColors,
	stickerCategories,
	selectedStickerCategory,
	setSelectedStickerCategory
}) {
	const [image, setImage] = useState(null)
	const [previousSelectedOption, setPreviousSelectedOption] = useState()

	return (
		<Modal
			animationType="slide"
			transparent
			visible={openModal}
			onRequestClose={() => {
				setOpenModal(false)
			}}
		>
			<GestureHandlerRootView style={styles.container}>
				<View style={styles.modalWrapper}>
					<TouchableWithoutFeedback
						onPress={() => {
							setOpenModal(false)
						}}
					>
						<View style={styles.modalEmptySpace} />
					</TouchableWithoutFeedback>
					<View
						style={[
							styles.modalContainer,
							{
								height:
									selectedOption?.id === 1
										? 465
										: selectedOption?.id === 3
										? selectedTextEditingOption?.id === 7
											? 350
											: 300
										: 415
							}
						]}
					>
						<ModalHeader
							selectedOption={selectedOption}
							selectedTextEditingOption={
								selectedTextEditingOption
							}
							setOpenModal={setOpenModal}
						/>
						<View style={styles.horizontalSeparator} />
						<View style={styles.modalBodyContainer}>
							{selectedOption?.id === 1 ? (
								<ModalMediaSection setImage={setImage} />
							) : selectedOption?.id === 2 ? (
								<ModalMusicSection
									musicCategories={musicCategories}
									selectedMusicCategory={
										selectedMusicCategory
									}
									setSelectedMusicCategory={
										setSelectedMusicCategory
									}
									selectedSong={selectedSong}
									setSelectedSong={setSelectedSong}
								/>
							) : selectedOption?.id === 3 ? (
								selectedTextEditingOption?.id === 1 ? (
									<ModalFontSection />
								) : selectedTextEditingOption?.id === 2 ? (
									<ModalTextHighSpaceSection />
								) : selectedTextEditingOption?.id === 3 ? (
									<ModalTextSideSpaceSection />
								) : selectedTextEditingOption?.id === 4 ? (
									<ModalTextAlignmentSection
										textAlignmentOptions={
											textAlignmentOptions
										}
										selectedTextAlignment={
											selectedTextAlignment
										}
										setSelectedTextAlignment={
											setSelectedTextAlignment
										}
									/>
								) : selectedTextEditingOption?.id === 5 ? (
									<ModalTextSizeSection />
								) : selectedTextEditingOption?.id === 6 ? (
									<ModalTextColorSection
										textColors={textColors}
									/>
								) : selectedTextEditingOption?.id === 7 ? (
									<ModalTextBackgroundSection
										textColors={textColors}
									/>
								) : null
							) : selectedOption?.id === 4 ? (
								<ModalEffectSection />
							) : selectedOption?.id === 5 ? (
								<ModalStickerSection
									stickerCategories={stickerCategories}
									selectedStickerCategory={
										selectedStickerCategory
									}
									setSelectedStickerCategory={
										setSelectedStickerCategory
									}
								/>
							) : selectedOption?.id === 6 ? (
								<ModalBacksideSection />
							) : null}
						</View>
						<ModalFooter
							options={options}
							selectedOption={selectedOption}
							setSelectedOption={setSelectedOption}
							textEditingOptions={textEditingOptions}
							selectedTextEditingOption={
								selectedTextEditingOption
							}
							setSelectedTextEditingOption={
								setSelectedTextEditingOption
							}
							previousSelectedOption={previousSelectedOption}
							setPreviousSelectedOption={
								setPreviousSelectedOption
							}
							setOpenModal={setOpenModal}
						/>
					</View>
				</View>
			</GestureHandlerRootView>
		</Modal>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	modalWrapper: {
		flex: 1,
		flexDirection: "column",
		backgroundColor: "rgba(0, 0, 0, 0.5)"
	},
	modalEmptySpace: {
		flex: 1,
		width: "100%"
	},
	modalContainer: {
		width: "100%",
		flexDirection: "column",
		alignItems: "center",
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,
		backgroundColor: "#F0F0F0"
	},
	horizontalSeparator: {
		height: 1,
		width: "100%",
		backgroundColor: "lightgrey"
	},
	modalBodyContainer: {
		flex: 1,
		width: "100%"
	}
})

EditContentModal.propTypes = {
	openModal: PropTypes.bool.isRequired,
	setOpenModal: PropTypes.func.isRequired,
	options: PropTypes.array.isRequired,
	selectedOption: PropTypes.object,
	setSelectedOption: PropTypes.func.isRequired,
	musicCategories: PropTypes.array.isRequired,
	selectedMusicCategory: PropTypes.object.isRequired,
	setSelectedMusicCategory: PropTypes.func.isRequired,
	selectedSong: PropTypes.object,
	setSelectedSong: PropTypes.func.isRequired,
	textEditingOptions: PropTypes.array.isRequired,
	selectedTextEditingOption: PropTypes.object,
	setSelectedTextEditingOption: PropTypes.func.isRequired,
	textAlignmentOptions: PropTypes.array.isRequired,
	selectedTextAlignment: PropTypes.object,
	setSelectedTextAlignment: PropTypes.func.isRequired,
	textColors: PropTypes.array.isRequired,
	stickerCategories: PropTypes.array.isRequired,
	selectedStickerCategory: PropTypes.object,
	setSelectedStickerCategory: PropTypes.func.isRequired
}
