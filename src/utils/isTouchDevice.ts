export default function isTouchDevice() {
	// try {
	//     document.createEvent("TouchEvent");
	//     return true;
	// } catch (error) {
	//     return false;
	// }
	return "ontouchstart" in window || navigator.maxTouchPoints > 0;
}
