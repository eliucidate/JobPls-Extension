function saveOptions(e) {
  browser.storage.local.set({
    fname: document.querySelector("#fname").value,
	mname: document.querySelector("#mname").value,
	lname: document.querySelector("#lname").value,
	fullname: document.querySelector("#name").value,
	email: document.querySelector("#email").value,
	phone: document.querySelector("#phone").value,
	company: document.querySelector("#comp").value,
	linkedin: document.querySelector("#lin").value,
	github: document.querySelector("#git").value,
	personal: document.querySelector("#por").value,
	twitter: document.querySelector("#twi").value
  });
  e.preventDefault();
}

function restoreOptions() {
  var gettingItem = browser.storage.local.get();
  gettingItem.then((res) => {
    document.querySelector("#fname").value = res.fname || 'Quentin';
	document.querySelector("#mname").value = res.mname || '';
	document.querySelector("#lname").value = res.lname || 'Coldwater';
	document.querySelector("#name").value = res.fullname || 'Quentin Coldwater';
	document.querySelector("#email").value = res.email || '';
	document.querySelector("#phone").value = res.phone || '';
	document.querySelector("#comp").value = res.company || '';
	document.querySelector("#lin").value = res.linkedin || '';
	document.querySelector("#git").value = res.github || '';
	document.querySelector("#por").value = res.personal || '';
	document.querySelector("#twi").value = res.twitter || '';
  });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
