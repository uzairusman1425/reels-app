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

	const textEditingOptions = [
		{
			id: 1,
			image: require("../../assets/icons/font.svg"),
			title: "Font",
			name: "Font",
			icon: require("../../assets/icons/font.svg")
		},
		{
			id: 2,
			image: require("../../assets/icons/high.svg"),
			title: "High Space",
			name: "High",
			icon: require("../../assets/icons/high.svg")
		},
		{
			id: 3,
			image: require("../../assets/icons/space.svg"),
			title: "Side Space",
			name: "Space",
			icon: require("../../assets/icons/space.svg")
		},
		{
			id: 4,
			image: require("../../assets/icons/right-align.svg"),
			title: "Text Alignment",
			name: "Lining",
			icon: require("../../assets/icons/right-align.svg")
		},
		{
			id: 5,
			image: require("../../assets/icons/size.svg"),
			title: "Text Size",
			name: "Size",
			icon: require("../../assets/icons/size.svg")
		},
		{
			id: 6,
			image: require("../../assets/icons/colors.svg"),
			title: "Select Colors",
			name: "Color",
			icon: require("../../assets/icons/colors.svg")
		},
		{
			id: 7,
			image: require("../../assets/icons/text-backside.svg"),
			title: "Text Background",
			name: "Backside",
			icon: require("../../assets/icons/text-backside.svg")
		}
	]

	const textAlignmentOptions = [
		{
			id: 1,
			title: "Right Side",
			image: require("../../assets/icons/right-align.svg")
		},
		{
			id: 2,
			title: "Left Side",
			image: require("../../assets/icons/left-align.svg")
		},
		{
			id: 3,
			title: "Center",
			image: require("../../assets/icons/center-align.svg")
		},
		{
			id: 4,
			title: "Upside",
			image: require("../../assets/icons/top-align.svg")
		}
	]

	const textColors = [
		"#1C274C",
		"#000000",
		"#1BC469",
		"#333333",
		"#5F9CE3",
		"#D0D0D0",
		"#FC4B5D",
		"#C5180D"
	]

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

	const stickerCategories = [
		{
			id: 1,
			title: "Sticker"
		},
		{
			id: 2,
			title: "GIFs"
		},
		{
			id: 3,
			title: "Emojis"
		},
		{
			id: 4,
			title: "Label"
		},
		{
			id: 5,
			title: "Images"
		},
		{
			id: 6,
			title: "Icons"
		}
	]

	const [openModal, setOpenModal] = useState(false)
	const [selectedOption, setSelectedOption] = useState()
	const [selectedMusicCategory, setSelectedMusicCategory] = useState(
		musicCategories[0]
	)
	const [selectedSong, setSelectedSong] = useState(null)
	const [selectedTextEditingOption, setSelectedTextEditingOption] = useState(
		textEditingOptions[0]
	)
	const [selectedTextAlignment, setSelectedTextAlignment] = useState(
		textAlignmentOptions[0]
	)
	const [selectedStickerCategory, setSelectedStickerCategory] = useState(
		stickerCategories[0]
	)

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
				textEditingOptions={textEditingOptions}
				selectedTextEditingOption={selectedTextEditingOption}
				setSelectedTextEditingOption={setSelectedTextEditingOption}
				textAlignmentOptions={textAlignmentOptions}
				selectedTextAlignment={selectedTextAlignment}
				setSelectedTextAlignment={setSelectedTextAlignment}
				textColors={textColors}
				stickerCategories={stickerCategories}
				selectedStickerCategory={selectedStickerCategory}
				setSelectedStickerCategory={setSelectedStickerCategory}
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
