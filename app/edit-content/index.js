import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { Image } from "expo-image"
import { LinearGradient } from "expo-linear-gradient"
import { FontAwesome5, Fontisto, Feather } from "@expo/vector-icons"

export default function Page() {
	return (
		<View style={styles.container}>
			<LinearGradient
				style={styles.headerContainer}
				colors={["rgba(0,0,0,1)", "rgba(0,0,0,0.85)"]}
			>
				<TouchableOpacity style={styles.headerActionButton}>
					<FontAwesome5
						name="chevron-left"
						size={22.5}
						color="#1C274C"
					/>
				</TouchableOpacity>
				<View style={styles.resetButtonsContainer}>
					<TouchableOpacity style={styles.headerActionButton}>
						<Fontisto
							name="arrow-return-left"
							size={22.5}
							color="#1C274C"
						/>
					</TouchableOpacity>
					<TouchableOpacity style={styles.headerActionButton}>
						<Fontisto
							name="arrow-return-right"
							size={22.5}
							color="#1C274C"
						/>
					</TouchableOpacity>
				</View>
				<TouchableOpacity style={styles.headerActionButton}>
					<Feather name="eye" size={22.5} color="#1C274C" />
				</TouchableOpacity>
			</LinearGradient>
			<Image
				source={require("../../assets/images/bg-image2.png")}
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
	headerContainer: {
		height: 55,
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingHorizontal: 20
	},
	headerActionButton: {
		height: 37.5,
		width: 37.5,
		borderRadius: 20,
		backgroundColor: "gray",
		alignItems: "center",
		justifyContent: "center"
	},
	resetButtonsContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 25
	},
	backgroundImage: {
		flex: 1
	}
})
