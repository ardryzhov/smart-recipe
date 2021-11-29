import React, { useRef } from 'react';
import product from '../../data-product.js'
import ProductModal from '../ProductModal/ProductModal.jsx';

import './_offer.scss';

const Offer = ({setIsVisible, tagInput}) => {

	const titleComplitedRef = useRef();

	function openProductModal(e, i) {
		const event = e.target.closest('.offer-empty-product');
		const modal = event.dataset.productid;
		if (+modal === i) {
			setIsVisible(true)
			event.children[4].classList.remove('hide-modal');
			document.body.style.overflow = 'hidden';
		}
	}

	const products = product.map((item, i) => {
		const tagsProduct = item.tags;

		const createTag = tagsProduct.map((item, i) => {
			return (
				<div className="product-tags_tag" key={i}>
					<span>{item}</span>
				</div>
			)
		})
		
		return (
			<div data-productid={i} className="offer-empty-product" key={i}>
							<div className="empty-product-title">
								<h3>{item.name}</h3>
							</div>
							<div className="empty-product-img">
								<img src={item.img} alt={item.name} />
							</div>

							<div className="empty-product-tags">
								{createTag}
							</div>

							<div className="empty-product-button">
								<button onClick={(e) => openProductModal(e, i)}>Смотреть рецепт</button>
							</div>
							<ProductModal 
							setIsVisible={setIsVisible}
							item={item}
							i={i}/>
						</div>
		)
	})

// Убрать вызов ProductModal из map'а. Каждому дать свой ПродуктМодал и вызывать по e.target
	return (
		<div className="offer-wrapper">
			{tagInput.length === 0
			? 
			(<>
			<div className="offer-empty-wrap">
					<div className="offer-empty-title">
						<h3>Наши рецепты:</h3>
					</div>
				<div className="offer-empty-content">

						{products}

				</div>
			</div>
			</>
			)
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