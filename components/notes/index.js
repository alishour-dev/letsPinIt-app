import Pin from "@components/assets/Pin"
import { BsTrash, BsEyedropper } from "react-icons/bs"
import { BiEdit } from "react-icons/bi"

import { createRef, useEffect, useMemo } from "react"

export default function Notes({
	notes,
	setNotes,
	setShowModal,
	setEditClicked,
	titleRef,
	contentRef,
	colorRef,
	idRef,
}) {
	useEffect(() => {
		setNotes(
			localStorage.getItem("notes") ? JSON.parse(localStorage.getItem("notes")) : []
		)
	}, [])

	const itemsRef = useMemo(
		() =>
			Array(notes.length)
				.fill()
				.map(() => createRef()),
		[notes]
	)

	const handleDelete = (id, index) => {
		itemsRef[index].current.classList.add("disappear")

		setTimeout(() => {
			const notesKept = notes.filter((item) => item.id !== id)
			setNotes(notesKept)
			localStorage.setItem("notes", JSON.stringify(notesKept))
		}, 720)
	}

	const handleEditClicked = (id) => {
		setEditClicked(true)
		setShowModal(true)
		const noteToEdit = notes.filter((item) => item.id === id)

		setTimeout(() => {
			titleRef.current.value = noteToEdit[0].title
			contentRef.current.value = noteToEdit[0].content
			colorRef.current.value = noteToEdit[0].color
			idRef.current.value = noteToEdit[0].id
		}, 10)
	}

	if (notes.length === 0)
		return (
			<div className='empty-container'>
				<h1>No items available</h1>
			</div>
		)

	return (
		<div className='notes-container'>
			{notes?.map((item, index) => (
				<div
					ref={itemsRef[index]}
					className='note-card'
					key={item.id}
					style={{ animationDelay: `${index / 5}s`, background: `${item.color}` }}>
					<Pin index={index} />
					<div className='note-text'>
						<h1>{item.title}</h1>
						<p>{item.content}</p>
					</div>
					<div className='actions'>
						<button onClick={() => handleEditClicked(item.id)}>
							<BiEdit className='icon' />
						</button>
						<button onClick={() => handleDelete(item.id, index)}>
							<BsTrash className='icon' />
						</button>
					</div>
				</div>
			))}
		</div>
	)
}
