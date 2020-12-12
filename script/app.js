let drawChart = queryResponse => {
	var ctx = document.querySelector('.js-graph').getContext('2d');
	let values = Object.values(queryResponse.daily);
	let prices = values.slice(150, 180);

	let chart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ['29 days ago', '28 days ago', '27 days ago', '26 days ago', '25 days ago', '24 days ago', '23 days ago', '22 days ago', '21 days ago', '20 days ago', '19 days ago', '18 days ago', '17 days ago', '16 days ago', '15 days ago', '14 days ago', '13 days ago', '12 days ago', '11 days ago', '10 days ago', '9 days ago', '8 days ago', '7 days ago', '6 days ago', '5 days ago', '4 days ago', '3 days ago', '2 days ago', 'Yesterday', 'Today'],
			datasets: [{
				data: prices,
				backgroundColor: '#ffffff',
				borderColor: '#8cabe6',
				fill: false,
				lineTension: 0.4
			}],
		},
		options: {
			scales: {
				xAxes: [{
					ticks: {
						display: false
					},
					gridLines: {
						display: false
					},
					offset: true
				}],
				yAxes: [{
					gridLines: {
						color: '#303030'
					},
					ticks: {
						fontColor: '#ffffff',
						fontFamily: "'IBM Plex Sans', 'Helvetica Neue', 'Arial', sans-serif;"
					}
				}]
			},
			legend: {
				display: false
			}
		}
	})
}

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
			document.querySelector('.js-trendtoday').innerHTML = `<p style="color: red;">${queryResponse.item.today.price}</p><svg class="c-dashboard__trend-negative" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z"/></svg>`
			document.getElementById('current').style.borderColor = "red";
			break;

		case "neutral":
			document.querySelector('.js-trendtoday').innerHTML = `<p style="color: grey;">${queryResponse.item.today.price}</p><svg class="c-dashboard__trend-neutral" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M22 12l-4-4v3H3v2h15v3z"/></svg>`
			document.getElementById('current').style.borderColor = "grey";
			break;
	}
	
	switch(queryResponse.item.day30.trend) {
		case "positive":
			document.querySelector('.js-trend30').innerHTML = `<p>${queryResponse.item.day30.change} <svg class="c-dashboard__trend-positive" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg></p>`
			break;

		case "negative":
			document.querySelector('.js-trend30').innerHTML = `<p>${queryResponse.item.day30.change} <svg class="c-dashboard__trend-negative" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z"/></svg></p>`
			break;

		case "neutral":
			document.querySelector('.js-trend30').innerHTML = `<p>${queryResponse.item.day30.change} <svg class="c-dashboard__trend-neutral" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M22 12l-4-4v3H3v2h15v3z"/></svg></p>`
			break;
	}

	switch(queryResponse.item.day90.trend) {
		case "positive":
			document.querySelector('.js-trend90').innerHTML = `<p>${queryResponse.item.day90.change} <svg class="c-dashboard__trend-positive" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg></p>`
			break;

		case "negative":
			document.querySelector('.js-trend90').innerHTML = `<p>${queryResponse.item.day90.change} <svg class="c-dashboard__trend-negative" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z"/></svg></p>`
			break;

		case "neutral":
			document.querySelector('.js-trend90').innerHTML = `<p>${queryResponse.item.day90.change} <svg class="c-dashboard__trend-neutral" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M22 12l-4-4v3H3v2h15v3z"/></svg></p>`
			break;
	}

	switch(queryResponse.item.day180.trend) {
		case "positive":
			document.querySelector('.js-trend180').innerHTML = `<p>${queryResponse.item.day180.change} <svg class="c-dashboard__trend-positive" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg></p>`
			break;

		case "negative":
			document.querySelector('.js-trend180').innerHTML = `<p>${queryResponse.item.day180.change} <svg class="c-dashboard__trend-negative" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z"/></svg></p>`
			break;

		case "neutral":
			document.querySelector('.js-trend180').innerHTML = `<p>${queryResponse.item.day180.change} <svg class="c-dashboard__trend-neutral" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M22 12l-4-4v3H3v2h15v3z"/></svg></p>`
			break;
	}
}

let getAPI = async () => {
    const data = await fetch(`https://ancient-everglades-28312.herokuapp.com/http://services.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item=385`)
		.then((r) => r.json())
		.catch((err) => console.error('An error occured:', err));
	showData(data);
}

let getAPIgraph = async () => {
	const data = await fetch(`https://ancient-everglades-28312.herokuapp.com/https://services.runescape.com/m=itemdb_oldschool/api/graph/385.json`)
		.then((r) => r.json())
		.catch((err) => console.error('An error occured:', err));
	drawChart(data);
}

document.addEventListener('DOMContentLoaded', function() {
	// 1 We will query the API with longitude and latitude.
	getAPI();
	getAPIgraph();
});