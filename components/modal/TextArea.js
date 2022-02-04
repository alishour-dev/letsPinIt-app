import { useState } from "react"

export default function TextArea({ contentRef }) {
	const [characters, setCharacters] = useState(0)
	// console.log(characters.length)

	const condition = characters?.length < 250 || characters?.length === undefined

	return (
		<div className='textarea-container'>
			<div className='txt-top'>
				{condition ? <p>Characters length:</p> : <p className='max'>Max ch reached!</p>}
				&nbsp;
				<p>{characters?.length || 0}/250</p>
			</div>
			<textarea
				name='content'
				cols='30'
				rows='8'
				ref={contentRef}
				onChange={(e) => setCharacters(e.target.value)}
				maxLength={250}
				placeholder='Add your note here!'
				autoComplete='false'
				spellCheck='false'
				required
			/>
		</div>
	)
}
