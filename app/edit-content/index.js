import { useState } from "react"
import { View, StyleSheet } from "react-native"
import { Image } from "expo-image"
import EditScreenHeader from "../../components/edit-screen-header/EditScreenHeader"
import EditScreenFooter from "../../components/edit-screen-footer/EditScreenFooter"
import EditContentModal from "../../components/edit-content-modal/EditContentModal"

export default function Page() {
	const [openModal, setOpenModal] = useState(false)
	const [selectedOption, setSelectedOption] = useState()

	const options = [
		{
			id: 1,
			image: require("../../assets/icons/media.png"),
			title: "Media",
			icon: require("../../assets/icons/media-sm.png")
		},
		{
			id: 2,
			image: require("../../assets/icons/music.png"),
			title: "Music",
			icon: require("../../assets/icons/music-sm.png")
		},
		{
			id: 3,
			image: require("../../assets/icons/text.png"),
			title: "Text",
			icon: require("../../assets/icons/text.png")
		},
		{
			id: 4,
			image: require("../../assets/icons/effect.png"),
			title: "Effect",
			icon: require("../../assets/icons/effect-sm.png")
		},
		{
			id: 5,
			image: require("../../assets/icons/sticker.png"),
			title: "Sticker",
			icon: require("../../assets/icons/sticker-sm.png")
		},
		{
			id: 6,
			image: require("../../assets/icons/backside.png"),
			title: "Backside",
			icon: require("../../assets/icons/backside-sm.png")
		}
	]

	return (
		<View style={styles.container}>
			<EditScreenHeader />
			<Image
				source={require("../../assets/images/bg-image2.png")}
				style={styles.backgroundImage}
				contentFit="cover"
			/>
			<EditScreenFooter
				options={options}
				setOpenModal={setOpenModal}
				setSelectedOption={setSelectedOption}
			/>
			<EditContentModal
				openModal={openModal}
				setOpenModal={setOpenModal}
				options={options}
				selectedOption={selectedOption}
				setSelectedOption={setSelectedOption}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		backgroundColor: "black"
	},
	backgroundImage: {
		flex: 1,
		opacity: 0.75
	}
})
