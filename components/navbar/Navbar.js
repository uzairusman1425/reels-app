import { View, TouchableOpacity, StyleSheet } from "react-native"
import { Image } from "expo-image"

export default function Navbar() {
	return (
		<View style={styles.headerContainer}>
			<View style={styles.navListContainer}>
				<TouchableOpacity>
					<Image
						source={require("../../assets/icons/icon-1.png")}
						style={styles.navIcon}
						contentFit="contain"
					/>
				</TouchableOpacity>
				<TouchableOpacity>
					<Image
						source={require("../../assets/icons/icon-2.png")}
						style={styles.navIcon}
						contentFit="contain"
					/>
				</TouchableOpacity>
				<TouchableOpacity>
					<Image
						source={require("../../assets/icons/icon-3.png")}
						style={styles.navIcon}
						contentFit="contain"
					/>
				</TouchableOpacity>
				<TouchableOpacity>
					<Image
						source={require("../../assets/icons/icon-4.png")}
						style={styles.navIcon}
						contentFit="contain"
					/>
				</TouchableOpacity>
				<TouchableOpacity>
					<Image
						source={require("../../assets/icons/icon-5.png")}
						style={styles.navIcon}
						contentFit="contain"
					/>
				</TouchableOpacity>
			</View>
			<View style={styles.verticalSeparator} />
			<View style={styles.profileImageContainer}>
				<Image
					source={require("../../assets/images/profile.png")}
					style={styles.profileImage}
					contentFit="cover"
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	headerContainer: {
		height: 40,
		width: "100%",
		backgroundColor: "white",
		flexDirection: "row",
		alignItems: "center"
	},
	navListContainer: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around"
	},
	navIcon: {
		height: 25,
		width: 25
	},
	verticalSeparator: {
		height: "100%",
		width: 1,
		backgroundColor: "lightgrey"
	},
	profileImageContainer: {
		height: "100%",
		width: 50,
		alignItems: "center",
		justifyContent: "center"
	},
	profileImage: {
		height: 30,
		width: 30,
		borderRadius: 15,
		overflow: "hidden"
	}
})
