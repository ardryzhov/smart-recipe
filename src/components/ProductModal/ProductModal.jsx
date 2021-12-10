import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import './_productModal.scss';

const ProductModal = ({setIsVisible ,item, i}) => {

	const {recipe, steps} = item;
	const shortRecipe = recipe.map((item, idx) => {
		const key = Object.keys(item),
				value = Object.values(item);
				
		return (
			<div className="recipe-descr" key={idx}>
					<div className="recipe-descr-key">
						<span>{key}: </span>
					</div>
					<div className="recipe-descr-value">
						<span> {value}</span>
					</div>
			</div>
		)
	})

	const modalSteps = steps.map((step, idx) => {
		return (
					<div className="modal-step-item" key={idx}>
						<div className="step-item-title">
							<span>Шаг №{idx + 1}</span>
						</div>
						<div className="step-item-descr">
							<span>{step}</span>
						</div>
					</div>
				)
	})


	function closeProductModal(e, i) {
		const event = e.target.closest('.offer-empty-product');
		const modal = event.dataset.productid;
		if (+modal === i) {
			setIsVisible(false)
			event.children[4].classList.add('hide-modal');
			document.body.style.overflow = '';
		}
	}

	function modalWrapperCloseModal(e) {
		if (e.target.matches('.product-modal-wrapper')) {
			e.target.classList.add('hide-modal');
			document.body.style.overflow = '';
		}
	}


	return (
		<div className='product-modal-wrapper hide-modal' onClick={(e)=> modalWrapperCloseModal(e)} >
			<div className="product-modal">
				<div className="product-modal-title">
					<h3>{item.name}</h3>
					<FontAwesomeIcon icon={faTimes} onClick={(e) => closeProductModal(e, i)}/>
				</div>
				<div className="product-modal-short-recipe">
					<div className="short-recipe">
						<h4>Что потребуется для готовки:</h4>
					</div>
					<div className="short-descriptions">
						{shortRecipe}
					</div>
				</div>

				<div className="product-modal-steps">
					<div className="modal-steps-title">
						<h4>Следуйте нашим рекомендациям, что бы приготовить это чудесное блюдо:</h4>
					</div>
					<div className="modal-steps-wrap">
						{modalSteps}
					</div>
				</div>
			</div>
		</div>
	)
};

export default ProductModal;