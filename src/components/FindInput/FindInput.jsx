import React, { useRef } from 'react';
import Tag from '../Tag/Tag';

import './_findInput.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const FindInput = ({tagInput, setTagInput}) => {
	const inputRef = useRef();

	const tags = tagInput.map((tag, i) => {
		return (
			<Tag 
			tag={tag}
			setTagInput={setTagInput}
			tagInput={tagInput}/>
		)
	})

	function addToTagEnter(event) {
		const tags = [...tagInput];
		const currentTag = event.target.value;
		console.log(tagInput)
		if (event.code === 'Enter') {
			setTagInput([
				...tags,
				{title: currentTag}
			]);
			event.target.value = '';
		}
	}

	function addToTagIcon() {
		const tags = [...tagInput];
		const currentTag = inputRef.current.value;
		console.log(tagInput)
		setTagInput([
			...tags,
			{title: currentTag}
		]);
		inputRef.current.value = '';
	}

	return (
		<div className="input-wrap">
			<div className="input-title">
				<h3>Введите название продуктов которые у Вас есть.</h3>
			</div>

			<div className="input-field">
				<input 
				ref={inputRef}
				type="text"
				onKeyDown={(e) => addToTagEnter(e)}/>
				<FontAwesomeIcon 
				onClick={addToTagIcon}
				icon={faSearch} 
				className='input-search-icon'/>
			</div>

			<div className="input-tags-field">
				<div className="input-tag">
					<div className='input-tag-title'>Ключевые слова:</div>
					<div className="input-tag-wrap">
						{tags}
					</div>
				</div>
			</div>
		</div>
	);
};

export default FindInput;