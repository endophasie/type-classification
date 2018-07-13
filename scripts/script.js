'use strict';

var $type = document.querySelectorAll('.js-type');

$type.forEach(function(item) {
	item.addEventListener('click', function(e) {
		var target = e.target;
		var $elem = target.getAttribute('href');
		var $info = document.querySelectorAll('.js-info');

		$info.forEach(function(itemInfo) {
			itemInfo.classList.remove('is-show');
		});

		document.querySelector($elem).classList.add('is-show');
	});
});
