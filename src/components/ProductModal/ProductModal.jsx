import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import './_productModal.scss';

const ProductModal = () => {
	return (
		<div className="product-modal-wrapper">
			<div className="product-modal">
				<div className="product-modal-title">
					<h3>Домашние сырные палочки</h3>
					<FontAwesomeIcon icon={faTimes}/>
				</div>

				<div className="product-modal-short-recipe">
					<div className="short-recipe-item"><span>Что то</span></div>
					<div className="short-recipe-item"><span>Что то</span></div>
					<div className="short-recipe-item"><span>Что то</span></div>
					<div className="short-recipe-item"><span>Что то</span></div>
				</div>

				<div className="product-modal-steps">
					<div className="modal-step-item">
						<span>1 шаг</span>
					</div>
					<div className="modal-step-item">
						<span>2 шаг</span>
					</div>
					<div className="modal-step-item">
						<span>3 шаг</span>
					</div>
					<div className="modal-step-item">
						<span>4 шаг</span>
					</div>
					<div className="modal-step-item">
						<span>5 шаг</span>
					</div>
					<div className="modal-step-item">
						<span>6 шаг</span>
					</div>
				</div>
			</div>
		</div>
	)
};

export default ProductModal;