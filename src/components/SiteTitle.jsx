import React from 'react';

const SiteTitle = ({ title }) => (
	<div
		className="container"
		style={{ textAlign: 'center', padding: '40px 0px' }}
	>
		<h1 className="title site-title">{title}</h1>
	</div>
);

export default SiteTitle;
