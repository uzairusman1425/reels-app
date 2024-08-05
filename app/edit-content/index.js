import { useState } from "react"
import { View, StyleSheet } from "react-native"
import { Image } from "expo-image"
import EditScreenHeader from "../../components/edit-screen-header/EditScreenHeader"
import EditScreenFooter from "../../components/edit-screen-footer/EditScreenFooter"
import EditContentModal from "../../components/edit-content-modal/EditContentModal"

export default function Page() {
	const options = [
		{
			id: 1,
			image: require("../../assets/icons/media.svg"),
			title: "Media",
			icon: require("../../assets/icons/media-sm.svg")
		},
		{
			id: 2,
			image: require("../../assets/icons/music.svg"),
			title: "Music",
			icon: require("../../assets/icons/music-sm.svg")
		},
		{
			id: 3,
			image: require("../../assets/icons/text.svg"),
			title: "Text",
			icon: require("../../assets/icons/text.svg")
		},
		{
			id: 4,
			image: require("../../assets/icons/effect.svg"),
			title: "Effect",
			icon: require("../../assets/icons/effect-sm.svg")
		},
		{
			id: 5,
			image: require("../../assets/icons/sticker.svg"),
			title: "Sticker",
			icon: require("../../assets/icons/sticker-sm.svg")
		},
		{
			id: 6,
			image: require("../../assets/icons/backside.svg"),
			title: "Backside",
			icon: require("../../assets/icons/backside-sm.svg")
		}
	]

	// const textEditingOptions = [
	// 	{
	// 		id: 1,
	// 		image: require("../../assets/icons/media.svg"),
	// 		title: "Font",
	// 		icon: require("../../assets/icons/media-sm.svg")
	// 	},
	// 	{
	// 		id: 2,
	// 		image: require("../../assets/icons/music.svg"),
	// 		title: "Music",
	// 		icon: require("../../assets/icons/music-sm.svg")
	// 	},
	// 	{
	// 		id: 3,
	// 		image: require("../../assets/icons/text.svg"),
	// 		title: "Text",
	// 		icon: require("../../assets/icons/text.svg")
	// 	},
	// 	{
	// 		id: 4,
	// 		image: require("../../assets/icons/effect.svg"),
	// 		title: "Effect",
	// 		icon: require("../../assets/icons/effect-sm.svg")
	// 	},
	// 	{
	// 		id: 5,
	// 		image: require("../../assets/icons/sticker.svg"),
	// 		title: "Sticker",
	// 		icon: require("../../assets/icons/sticker-sm.svg")
	// 	},
	// 	{
	// 		id: 6,
	// 		image: require("../../assets/icons/backside.svg"),
	// 		title: "Backside",
	// 		icon: require("../../assets/icons/backside-sm.svg")
	// 	}
	// ]

	const musicCategories = [
		{
			id: 1,
			title: "Pop",
			songs: [
				{
					id: 1,
					name: "Shevan Perwer",
					artist: "Hozanem",
					image: require("../../assets/images/song-cover-image.png")
				},
				{
					id: 2,
					name: "Shevan Perwer",
					artist: "Hozanem",
					image: require("../../assets/images/song-cover-image.png")
				}
			]
		},
		{
			id: 2,
			title: "Rock",
			songs: [
				{
					id: 3,
					name: "Shevan Perwer",
					artist: "Hozanem",
					image: require("../../assets/images/song-cover-image.png")
				},
				{
					id: 4,
					name: "Shevan Perwer",
					artist: "Hozanem",
					image: require("../../assets/images/song-cover-image.png")
				},
				{
					id: 5,
					name: "Shevan Perwer",
					artist: "Hozanem",
					image: require("../../assets/images/song-cover-image.png")
				}
			]
		},
		{
			id: 3,
			title: "Hip Hop",
			songs: [
				{
					id: 6,
					name: "Shevan Perwer",
					artist: "Hozanem",
					image: require("../../assets/images/song-cover-image.png")
				},
				{
					id: 7,
					name: "Shevan Perwer",
					artist: "Hozanem",
					image: require("../../assets/images/song-cover-image.png")
				}
			]
		},
		{
			id: 4,
			title: "Electronic",
			songs: [
				{
					id: 8,
					name: "Shevan Perwer",
					artist: "Hozanem",
					image: require("../../assets/images/song-cover-image.png")
				},
				{
					id: 9,
					name: "Shevan Perwer",
					artist: "Hozanem",
					image: require("../../assets/images/song-cover-image.png")
				},
				{
					id: 10,
					name: "Shevan Perwer",
					artist: "Hozanem",
					image: require("../../assets/images/song-cover-image.png")
				}
			]
		},
		{
			id: 5,
			title: "Country",
			songs: [
				{
					id: 11,
					name: "Shevan Perwer",
					artist: "Hozanem",
					image: require("../../assets/images/song-cover-image.png")
				},
				{
					id: 12,
					name: "Shevan Perwer",
					artist: "Hozanem",
					image: require("../../assets/images/song-cover-image.png")
				}
			]
		},
		{
			id: 6,
			title: "Jazz",
			songs: [
				{
					id: 13,
					name: "Shevan Perwer",
					artist: "Hozanem",
					image: require("../../assets/images/song-cover-image.png")
				},
				{
					id: 14,
					name: "Shevan Perwer",
					artist: "Hozanem",
					image: require("../../assets/images/song-cover-image.png")
				},
				{
					id: 15,
					name: "Shevan Perwer",
					artist: "Hozanem",
					image: require("../../assets/images/song-cover-image.png")
				}
			]
		},
		{
			id: 7,
			title: "Classical",
			songs: [
				{
					id: 16,
					name: "Shevan Perwer",
					artist: "Hozanem",
					image: require("../../assets/images/song-cover-image.png")
				},
				{
					id: 17,
					name: "Shevan Perwer",
					artist: "Hozanem",
					image: require("../../assets/images/song-cover-image.png")
				}
			]
		},
		{
			id: 8,
			title: "Folk",
			songs: [
				{
					id: 18,
					name: "Shevan Perwer",
					artist: "Hozanem",
					image: require("../../assets/images/song-cover-image.png")
				},
				{
					id: 19,
					name: "Shevan Perwer",
					artist: "Hozanem",
					image: require("../../assets/images/song-cover-image.png")
				},
				{
					id: 20,
					name: "Shevan Perwer",
					artist: "Hozanem",
					image: require("../../assets/images/song-cover-image.png")
				}
			]
		},
		{
			id: 9,
			title: "Reggae",
			songs: [
				{
					id: 21,
					name: "Shevan Perwer",
					artist: "Hozanem",
					image: require("../../assets/images/song-cover-image.png")
				},
				{
					id: 22,
					name: "Shevan Perwer",
					artist: "Hozanem",
					image: require("../../assets/images/song-cover-image.png")
				}
			]
		},
		{
			id: 10,
			title: "Metal",
			songs: [
				{
					id: 23,
					name: "Shevan Perwer",
					artist: "Hozanem",
					image: require("../../assets/images/song-cover-image.png")
				},
				{
					id: 24,
					name: "Shevan Perwer",
					artist: "Hozanem",
					image: require("../../assets/images/song-cover-image.png")
				},
				{
					id: 25,
					name: "Shevan Perwer",
					artist: "Hozanem",
					image: require("../../assets/images/song-cover-image.png")
				}
			]
		}
	]

	const [openModal, setOpenModal] = useState(false)
	const [selectedOption, setSelectedOption] = useState()
	const [selectedMusicCategory, setSelectedMusicCategory] = useState(
		musicCategories[0]
	)
	const [selectedSong, setSelectedSong] = useState(null)

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
				musicCategories={musicCategories}
				selectedMusicCategory={selectedMusicCategory}
				setSelectedMusicCategory={setSelectedMusicCategory}
				selectedSong={selectedSong}
				setSelectedSong={setSelectedSong}
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
