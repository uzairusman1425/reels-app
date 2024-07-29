import {
	View,
	TouchableOpacity,
	ImageBackground,
	StyleSheet
} from "react-native"
import { useRouter } from "expo-router"
import { Image } from "expo-image"
import { LinearGradient } from "expo-linear-gradient"
import PropTypes from "prop-types"

export default function ContentCard({ image, isTrending, href }) {
	const router = useRouter()

	return (
		<TouchableOpacity
			style={styles.contentCard}
			onPress={() => {
				if (href?.length > 0) {
					router?.navigate(href)
				}
			}}
		>
			<ImageBackground
				source={image}
				style={styles.contentCardBackgroundImage}
				resizeMode="cover"
			>
				<LinearGradient
					style={styles.contentCardBackgroundGradient}
					colors={[
						"rgba(0,0,0,0.82)",
						"rgba(0,0,0,0.659)",
						"rgba(33,32,32,0.0001)"
					]}
				/>
				{isTrending && (
					<View style={styles.trendingMarker}>
						<Image
							source={require("../../assets/icons/trending.png")}
							style={styles.trendingMarkerIcon}
							contentFit="contain"
						/>
					</View>
				)}
			</ImageBackground>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	contentCard: {
		width: "95%",
		marginHorizontal: "auto"
	},
	contentCardBackgroundImage: {
		height: 185,
		width: "100%",
		borderRadius: 7.5,
		overflow: "hidden",
		position: "relative"
	},
	contentCardBackgroundGradient: {
		height: "20%",
		width: "100%"
	},
	trendingMarker: {
		height: 27.5,
		width: 27.5,
		borderRadius: 15,
		backgroundColor: "white",
		position: "absolute",
		bottom: 5,
		left: 5,
		alignItems: "center",
		justifyContent: "center"
	},
	trendingMarkerIcon: {
		height: 22.5,
		width: 22.5
	}
})

ContentCard.propTypes = {
	image: PropTypes.node.isRequired,
	isTrending: PropTypes.bool.isRequired,
	href: PropTypes.string
}
