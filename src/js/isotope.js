/*eslint-disable*/

import utils from './utils';
/*-----------------------------------------------
|                     Isotope
-----------------------------------------------*/

const isotopeFilter = () => {
	const Selector = {
		ISOTOPE_ITEM: '.isotope-item',
		DATA_ISOTOPE: '[data-isotope]',
		DATA_FILTER: '[data-filter]',
		DATA_FILER_NAV: '[data-bs-nav]'
	};

	if (window.Isotope) {
		const masonryItems = document.querySelectorAll(Selector.DATA_ISOTOPE);
		masonryItems.length &&
			masonryItems.forEach(masonryItem => {
				window.imagesLoaded(masonryItem, () => {
					masonryItem.querySelectorAll(Selector.ISOTOPE_ITEM).forEach(item => {
						// eslint-disable-next-line
						item.style.visibility = 'visible';
					});

					const defaultOptions = {
						itemSelector: Selector.ISOTOPE_ITEM,
						layoutMode: 'packery'
					};
					const isotope = new window.Isotope(masonryItem, defaultOptions);

					//--------- filter -----------------
					let filtersElem = document.querySelectorAll('[data-bs-nav]');

					filtersElem.forEach(element => {
						element.addEventListener('click', function (event) {
							let filterValue = event.target.getAttribute('data-filter');

							isotope.arrange({ filter: filterValue });
						});
					});

					let dropDownEl = document.querySelectorAll('.dropdown-item');
					dropDownEl.forEach(element => {
						element.addEventListener('click', function (event) {
							let filterValue = event.target.getAttribute('data-filter');

							isotope.arrange({ filter: filterValue });
						});
					});

					//---------- filter end ------------

					return isotope;
				});
			});
	}
};

export default isotopeFilter;
