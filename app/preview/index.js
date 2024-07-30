import { View, StyleSheet } from "react-native"
import { Image } from "expo-image"
import PreviewScreenHeader from "../../components/preview-screen-header/PreviewScreenHeader"

export default function Page() {
	return (
		<View style={styles.container}>
			<PreviewScreenHeader />
			<Image
				source={require("../../assets/images/background-image.png")}
				style={styles.backgroundImage}
				contentFit="cover"
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column"
	},
	backgroundImage: {
		flex: 1
	}
})
