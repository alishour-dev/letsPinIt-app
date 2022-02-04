import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { generateId } from "@utils/generateId"
import TextArea from "./TextArea"
import { IoClose } from "react-icons/io5"
import { BsCheck2Circle } from "react-icons/bs"
import { BsEyedropper } from "react-icons/bs"

const Modal = ({
	titleRef,
	contentRef,
	colorRef,
	idRef,
	editClicked,
	setEditClicked,
	setShowModal,
	notes,
	setNotes,
}) => {
	const [appMounted, setAppMounted] = useState(false)
	const modalRef = useRef()

	useEffect(() => {
		setAppMounted(true)
	}, [appMounted])

	const handleClose = (e) => {
		if (e.target.classList.contains("modal-backdrop")) {
			handleCancel()
		}
	}

	const handleCancel = () => {
		modalRef.current.classList.add("dissolve")

		setTimeout(() => {
			editClicked && setEditClicked(false)
			setShowModal(false)
		}, 300)
	}

	const submitHandler = (e) => {
		e.preventDefault()

		const finalNote = {
			title: titleRef.current.value,
			content: contentRef.current.value,
			color: colorRef.current.value,
			id: editClicked ? String(idRef.current.value) : generateId(),
		}

		if (editClicked) {
			const oldExcept = notes.filter((item) => item.id !== String(idRef.current.value))
			setNotes([...oldExcept, finalNote])
			localStorage.setItem("notes", JSON.stringify([...oldExcept, finalNote]))
		} else {
			setNotes([...notes, finalNote])
			localStorage.setItem("notes", JSON.stringify([...notes, finalNote]))
		}

		modalRef.current.classList.add("dissolve")

		setTimeout(() => {
			editClicked && setEditClicked(false)
			setShowModal(false)
		}, 300)
	}

	const colorTxt = editClicked
		? "Update your pinned note's color!"
		: "Pick a color for your pinned note!"

	return appMounted
		? createPortal(
				<div className='modal-backdrop' onClick={handleClose} ref={modalRef}>
					<form onSubmit={submitHandler}>
						<button className='close-btn' onClick={handleCancel} type='button'>
							<IoClose className='icon' />
						</button>
						<div className='inputs'>
							<input
								type='text'
								ref={titleRef}
								placeholder='Add a title'
								autoComplete='false'
								spellCheck='false'
								required
							/>
							<TextArea contentRef={contentRef} />
						</div>
						<div className='color-row'>
							<h1>
								<BsEyedropper className='icon' /> {colorTxt}
							</h1>
							<div className='picker-wrapper'>
								<input type='color' ref={colorRef} defaultValue='#f57a7a' />
							</div>
						</div>
						<input type='text' ref={idRef} style={{ display: "none" }} />
						<button className='main-btn' type='submit'>
							<h1>{editClicked ? "Update" : "Add"}</h1>
							<BsCheck2Circle className='icon' />
						</button>
					</form>
				</div>,
				document.getElementById("portal")
		  )
		: null
}

export default Modal
