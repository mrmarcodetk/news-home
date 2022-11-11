import React from 'react';
import "./NewsItem.css";

export interface NewsInterface {
	urlImage: string;
	numberNews: string;
	title: string;
	description: string;
}

const News: React.FC<NewsInterface> = ({ urlImage, numberNews, title, description }) => {
	return (
		<div className='newsItemContainer'>
			<figure className='newsImage'>
				<img src={urlImage} alt={urlImage} />
			</figure>
			<div className='newsItemContent'>
				<span className='newsItemNumberNews'>{numberNews}</span>
				<span className='newsItemTitle'>{title}</span>
				<p className='newsItemDescription'>{description}</p>
			</div>
		</div>
	)
};

export default News;
