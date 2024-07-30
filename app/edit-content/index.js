import { View, StyleSheet } from "react-native"
import { Image } from "expo-image"
import EditScreenHeader from "../../components/edit-screen-header/EditScreenHeader"
import EditScreenFooter from "../../components/edit-screen-footer/EditScreenFooter"

export default function Page() {
	return (
		<View style={styles.container}>
			<EditScreenHeader />
			<Image
				source={require("../../assets/images/bg-image2.png")}
				style={styles.backgroundImage}
				contentFit="cover"
			/>
			<EditScreenFooter />
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
