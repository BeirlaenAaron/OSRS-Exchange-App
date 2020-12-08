let showData = queryResponse => {
	console.log(queryResponse);
	
	document.querySelector('.js-price').innerHTML = `${queryResponse.item.current.price} <span>coins</span>`;
	document.querySelector('.js-name').innerText = queryResponse.item.name;

	switch(queryResponse.item.today.trend) {
		case "positive":
			document.querySelector('.js-trendtoday').innerHTML = `<p style="color: greenyellow;">${queryResponse.item.today.price}</p><svg class="c-dashboard__trend-positive" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>`
			document.getElementById('current').style.borderColor = "greenyellow";
			break;

		case "negative":
			document.querySelector('.js-trendtoday').innerHTML = `<p style="color: red;">${queryResponse.item.today.price}</p><svg class="c-dashboard__trend-negative" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>`
			document.getElementById('current').style.borderColor = "red";
			break;

		case "neutral":
			document.querySelector('.js-trendtoday').innerHTML = `<p style="color: grey;">${queryResponse.item.today.price}</p><svg class="c-dashboard__trend-neutral" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>`
			document.getElementById('current').style.borderColor = "grey";
			break;
	}
	
	switch(queryResponse.item.day30.trend) {
		case "positive":
			document.querySelector('.js-trend30').innerHTML = `<p>${queryResponse.item.day30.change} <svg class="c-dashboard__trend-positive" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg></p>`
			break;

		case "negative":
			document.querySelector('.js-trend30').innerHTML = `<p>${queryResponse.item.day30.change} <svg class="c-dashboard__trend-negative" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg></p>`
			break;

		case "neutral":
			document.querySelector('.js-trend30').innerHTML = `<p>${queryResponse.item.day30.change} <svg class="c-dashboard__trend-neutral" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg></p>`
			break;
	}

	switch(queryResponse.item.day90.trend) {
		case "positive":
			document.querySelector('.js-trend90').innerHTML = `<p>${queryResponse.item.day90.change} <svg class="c-dashboard__trend-positive" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg></p>`
			break;

		case "negative":
			document.querySelector('.js-trend90').innerHTML = `<p>${queryResponse.item.day90.change} <svg class="c-dashboard__trend-negative" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg></p>`
			break;

		case "neutral":
			document.querySelector('.js-trend90').innerHTML = `<p>${queryResponse.item.day90.change} <svg class="c-dashboard__trend-neutral" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg></p>`
			break;
	}

	switch(queryResponse.item.day180.trend) {
		case "positive":
			document.querySelector('.js-trend180').innerHTML = `<p>${queryResponse.item.day180.change} <svg class="c-dashboard__trend-positive" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg></p>`
			break;

		case "negative":
			document.querySelector('.js-trend180').innerHTML = `<p>${queryResponse.item.day180.change} <svg class="c-dashboard__trend-negative" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg></p>`
			break;

		case "neutral":
			document.querySelector('.js-trend180').innerHTML = `<p>${queryResponse.item.day180.change} <svg class="c-dashboard__trend-neutral" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg></p>`
			break;
	}
}

let getAPI = async () => {
    const data = await fetch(`https://ancient-everglades-28312.herokuapp.com/http://services.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item=385`)
		.then((r) => r.json())
		.catch((err) => console.error('An error occured:', err));
	showData(data);
}

document.addEventListener('DOMContentLoaded', function() {
	// 1 We will query the API with longitude and latitude.
	getAPI();
});