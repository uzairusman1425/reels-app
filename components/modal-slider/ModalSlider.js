import { useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import Animated, {
	useSharedValue,
	useAnimatedStyle,
	runOnJS
} from "react-native-reanimated"
import {
	gestureHandlerRootHOC,
	Gesture,
	GestureDetector
} from "react-native-gesture-handler"

const Slider = gestureHandlerRootHOC(() => {
	const [sliderValue, setSliderValue] = useState(0)

	const X = useSharedValue(0)

	const panGesture = Gesture?.Pan()
		?.onStart((e) => {
			X.value = e.x
			runOnJS(setSliderValue)(Math.round((X.value / 240) * 100))
		})
		?.onUpdate((e) => {
			X.value = Math.max(0, Math.min(e.x, 240))
			runOnJS(setSliderValue)(Math.round((X.value / 240) * 100))
		})

	const animatedStyles = {
		swipeable: useAnimatedStyle(() => {
			return {
				transform: [{ translateX: X.value }]
			}
		})
	}
	return (
		<GestureDetector gesture={panGesture}>
			<View style={styles.swipeContainer}>
				<Animated.View
					style={[styles.swipeable, animatedStyles.swipeable]}
				>
					<View style={styles.sliderValueContainer}>
						<Text style={styles.sliderValueText}>
							{sliderValue}
						</Text>
					</View>
				</Animated.View>
			</View>
		</GestureDetector>
	)
})

export default function ModalSlider() {
	return (
		<View style={styles.sliderBox}>
			<Slider />
		</View>
	)
}

const styles = StyleSheet.create({
	sliderBox: {
		height: 75,
		width: 275,
		backgroundColor: "lightgrey",
		borderRadius: 10,
		alignItems: "center"
	},
	swipeContainer: {
		height: 5,
		width: 250,
		borderRadius: 2.5,
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "center",
		marginTop: 45
	},
	swipeable: {
		height: 10,
		width: 10,
		borderRadius: 5,
		backgroundColor: "white",
		position: "absolute",
		left: 0,
		zIndex: 2,
		elevation: 5,
		shadowOffset: { width: 0, height: 2.5 },
		shadowOpacity: 0.5,
		shadowRadius: 3
	},
	sliderValueContainer: {
		position: "absolute",
		top: -30,
		left: -5,
		height: 20,
		width: 20,
		borderRadius: 10,
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "center"
	},
	sliderValueText: {
		fontSize: 7.5
	}
})
