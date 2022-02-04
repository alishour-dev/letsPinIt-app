import Modal from "@components/modal"
import { useRef, useState } from "react"
import Header from "@components/header"
import Notes from "@components/notes"
import MainBtn from "@components/mainBtn"

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
			<MainBtn setShowModal={setShowModal} />
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
