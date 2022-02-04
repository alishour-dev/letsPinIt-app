import Modal from "@components/modal"
import Image from "next/image"
import { useRef, useState } from "react"
import Img from "../public/pen.png"
import Header from "@components/header"
import Notes from "@components/notes"
import Head from "next/head"

export default function Home() {
	const titleRef = useRef(null)
	const contentRef = useRef(null)
	const colorRef = useRef(null)
	const idRef = useRef(null)

	const [notes, setNotes] = useState([])
	const [editClicked, setEditClicked] = useState(false)
	const [showModal, setShowModal] = useState(false)

	return (
		<div className='home-page'>
			<Header />
			<Notes
				notes={notes}
				setNotes={setNotes}
				setShowModal={setShowModal}
				setEditClicked={setEditClicked}
				titleRef={titleRef}
				contentRef={contentRef}
				colorRef={colorRef}
				idRef={idRef}
			/>
			<button onClick={() => setShowModal(true)} className='add-pin-btn'>
				<h1>Add Pin</h1>
				<div className='img-cont'>
					<Image
						src={Img}
						width={100}
						height={23.32}
						objectFit='cover'
						alt='my add a post pic'
						priority
					/>
				</div>
			</button>
			{showModal && (
				<Modal
					titleRef={titleRef}
					contentRef={contentRef}
					colorRef={colorRef}
					idRef={idRef}
					editClicked={editClicked}
					setEditClicked={setEditClicked}
					setShowModal={setShowModal}
					notes={notes}
					setNotes={setNotes}
				/>
			)}
		</div>
	)
}
