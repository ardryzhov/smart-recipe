import React, { useEffect, useRef } from 'react';

import './_findInput.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const FindInput = ({tagInput, setTagInput}) => {
	const inputRef = useRef();

	const tags = tagInput.map((tag, i) => {
		return (
			<div className="tag-wrap" key={i}>
				<span>{tag.title}</span>
				<FontAwesomeIcon icon={faTimes} className='tag-icon' onClick={(e) => removeInputTag(e)}/>
			</div>
		)
	})

	function removeInputTag(e) {
		const title = e.target.closest('.tag-wrap').firstChild.textContent;
		const deleteTag = tagInput.filter(item => {
			if (item.title !== title) {
				return item;
			}
		})
		setTagInput([...deleteTag]);
	}

	function validateWord(word) {
		const regex = /^([а-яА-ЯёЁ]+)$/i;
		return regex.test(word);
	}

	function checkTag(value) {
		if (tagInput.length === 0) {
			return value;
		}

		const valArray = value.toLowerCase().split('')
		const val = valArray.slice(0, 1).join('').toUpperCase() + valArray.slice(1, valArray.length).join('');

		const filt = tagInput.every(item => {
			return item.title !== val;
		});
		return filt;
	}

	function addToTagEnter(event) {
		const tags = [...tagInput];
		const val = event.target.value;
		if (event.code === 'Enter') {
			if (validateWord(val) && checkTag(val)) {
				const valArray = val.toLowerCase().split('')
				const currentTag = valArray.slice(0, 1).join('').toUpperCase() + valArray.slice(1, valArray.length).join('');
				setTagInput([
					...tags,
					{title: currentTag}
				]);
				event.target.value = '';
			} else {
				console.log(checkTag(val))
				return console.log('Можно вводить только русские буквы.')
			}
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
				onKeyDown={(e) => addToTagEnter(e)} placeholder='Например: Молоко, Хлеб и т.д.'/>
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