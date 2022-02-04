export const generateId = () => {
	let sample = () => {
		return Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1)
	}
	return (
		sample() +
		sample() +
		"-" +
		sample() +
		"-" +
		sample() +
		"-" +
		sample() +
		"-" +
		sample() +
		sample() +
		sample()
	)
}
