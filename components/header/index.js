import Logo from "@components/assets/Logo"
import { useState, useEffect, useRef } from "react"

export default function index() {
	const [theme, setTheme] = useState("light")
	const checked = useRef(null)

	useEffect(() => {
		setTheme(
			localStorage.getItem("theme")
				? localStorage.getItem("theme")
				: localStorage.setItem("theme", theme)
		)

		if (theme === "light") {
			checked.current.checked = false
		} else {
			checked.current.checked = true
		}

		document.documentElement.setAttribute("data-theme", theme)
	}, [theme])

	const saveTheme = (theme) => {
		setTheme(theme)
		localStorage.setItem("theme", theme)
		document.documentElement.setAttribute("data-theme", theme)
	}

	const switcher = () => {
		if (theme === "light") {
			saveTheme("dark")
		} else {
			saveTheme("light")
		}
		document.querySelector("body").style.transition = "background 10ms ease-in"
	}
	return (
		<header>
			<Logo />
			<label className='switcher-btn' onChange={switcher}>
				<input type='checkbox' ref={checked} />
				<span className='slider'></span>
			</label>
		</header>
	)
}
