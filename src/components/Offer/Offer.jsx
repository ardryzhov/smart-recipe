import React from 'react';
import Loader from "react-loader-spinner";
import product from '../../data-product.js'
import ProductModal from '../ProductModal/ProductModal.jsx';

import './_offer.scss';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Offer = ({setIsVisible, tagInput}) => {

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

	const tagsProduct = product.map(item => {
		return item.tags;
	})



	const tagsArrInput = []

	const tagVal = tagInput.map(el => {	
		return tagsArrInput.push(String(Object.values(el)));
	})


	const suitableProd = tagsProduct.filter(item => {
		const i = item.length === tagsArrInput.length && item.sort().every((val, index) => { 
			return val === tagsArrInput.sort()[index]
		});

		return i;
	})



	const selectedProducts = suitableProd.map(val => {
		const relevantData = product.map((item, i) => {
			if (item.tags === val) {
				let productName = item.name,
					 productTags = item.tags,
					 productImg = item.img;

					const createTag = productTags.map((el, idx) => {
						return (
							<div className="product-tags_tag" key={idx}>
								<span>{el}</span>
							</div>
						)
					})

					return (
						<div data-productid={i} className="offer-empty-product" key={i}>
							<div className="empty-product-title">
								<h3>{productName}</h3>
							</div>
							<div className="empty-product-img">
								<img src={productImg} alt={productName} />
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
			}
		})

		return relevantData
	})

	const almostRightRes = []

	const i = tagsProduct.filter(item => {
		let leng = tagsArrInput.length <= 1 ? 1 : tagsArrInput.length;

		let frst = tagsArrInput.slice(0, Math.floor(leng/2));
		let scnd = tagsArrInput.slice(Math.floor(leng/2), leng);

		if (almostRightRes.includes(item) && tagsArrInput.length <= 1) return; 

		if ((frst.every(el=>item.includes(el)) && scnd.some(el=>item.includes(el))) || (frst.some(el=>item.includes(el)) && scnd.every(el=>item.includes(el)))) {
			almostRightRes.push(item)
		}
	})	


	const almostRight = almostRightRes.map(val => {
		const relevantData = product.map((item, i) => {
			if (item.tags === val) {
				let productName = item.name,
					 productTags = item.tags,
					 productImg = item.img;

				const createTag = productTags.map((item, i) => {
					return (
						<div className="product-tags_tag" key={i}>
							<span>{item}</span>
						</div>
					)
				})

				return (
					<div data-productid={i} className="offer-empty-product" key={i}>
							<div className="empty-product-title">
								<h3>{productName}</h3>
							</div>
							<div className="empty-product-img">
								<img src={productImg} alt={productName} />
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
			}
		}) 

		return relevantData
	})


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
			(
				<>
				<div className="offer-selected-wrap">
					<div className="offer-selected-title">
						<h3>Вот что наш повар-бот подобрал для Вас:</h3>
					</div>
					<div className="offer-selected-content">
						{selectedProducts.length === 0 ? (
								<Loader
								type="TailSpin"
								color="#FFFFFF"
								height={400}
								width={320}/>
							
						) : 
							<>
							{selectedProducts}
							</>
						}
					</div>
				</div>
					
				<div className="offer-almost-wrap">
					<div className="offer-almost-title">
						<h3>Ваших ингридиентов почти хватает на:</h3>
					</div>
						{almostRight.length === 0 ? (
						<div className="spinner">
						<Loader
						type="TailSpin"
						color="#FFFFFF"
						height={400}
						width={320}/>
					</div>
						 
					) : (
						<div className="offer-almost-content">
							{almostRight}
						</div>
					)}

				</div>
				</>
			)
		}
		</div>
	)
};

export default Offer;
