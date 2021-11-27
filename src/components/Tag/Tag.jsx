import React, { useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import './_tag.scss';

const Tag = ({tag, setTagInput, tagInput}) => {

	const tagRef = useRef();

	function removeInputTag(e) {
		const title = tagRef.current.textContent;
		const deleteTag = tagInput.filter(item => {
			if (item.title !== title) {
				return item;
			}
		})
		setTagInput([...deleteTag]);
	}

	return (
		<div className="tag-wrap">
			<span ref={tagRef}>{tag.title}</span>
			<FontAwesomeIcon icon={faTimes} className='tag-icon' onClick={(e) => removeInputTag(e)}/>
		</div>
	)
};

export default Tag;