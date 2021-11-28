import React, { useRef } from 'react';
import product from '../../data-product.js'
import ProductModal from '../ProductModal/ProductModal.jsx';

import './_offer.scss';

const Offer = ({tagInput}) => {

	const titleComplitedRef = useRef();

	function openProductModal() {
		return <ProductModal/>
	}

	const products = product.map((item, i) => {
		const tagsProduct = item.tags,
				recipeProduct = item.recipe,
				stepsProduct = item.steps;

		const createTag = tagsProduct.map((item, i) => {
			return (
				<div className="product-tags_tag" key={i}>
					<span>{item}</span>
				</div>
			)
		})
		
		return (
			<div className="offer-empty-product" key={i}>
							<div className="empty-product-title">
								<h3>{item.name}</h3>
							</div>
							<div className="empty-product-img">
								<img src={item.img} alt={item.name} />
								{console.log(item.img)}
							</div>

							<div className="empty-product-tags">
								{createTag}
							</div>

							<div className="empty-product-button">
								<button onClick={openProductModal}>Смотреть рецепт</button>
							</div>
						</div>
		)
	})


	return (
		<div className="offer-wrapper">
			{tagInput.length === 0
			? 
			(<div className="offer-empty-wrap">
				<div className="offer-empty-title">
					<h3>Наши рецепты:</h3>
				</div>
				<div className="offer-empty-content">

						{products}

				</div>
			</div>)
			:
			(<div className="offer-complited-wrap">
				<div className="offer-complited-title">
					<h3 ref={titleComplitedRef}>Подбираем блюда для Вас...</h3>
				</div>
				<div className="offer-comlited-content">
					<span>Complited</span>
				</div>
			</div>)
		}
		</div>
	)
};

export default Offer;