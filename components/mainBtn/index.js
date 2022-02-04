import Image from "next/image"
import Img from "@public/pen.png"
import { IoIosArrowBack } from "react-icons/io"

export default function MainBtn({ setShowModal }) {
	return (
		<div className='main-btn-wrapper'>
			<button className='slide-in-btn'>
				<IoIosArrowBack className='icon' />
			</button>
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
		</div>
	)
}
