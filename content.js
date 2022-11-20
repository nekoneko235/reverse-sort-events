(() => {
	const select = document.getElementById("q_event_event_type_id_eq");

	const options = [...select.querySelectorAll("option")].reverse();

	while (select.firstChild) {
		select.removeChild(select.firstChild);
	}

	options.forEach((e, i) => {
		if (i === options.length - 1) {
			select.prepend(e);
		} else {
			select.appendChild(e);
		}
	});
})();
