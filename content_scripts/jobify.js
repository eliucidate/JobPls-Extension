function handleMenu(request, sender, sendResponse) {
	pickService();
	browser.runtime.onMessage.removeListener(handleMenu);
}

/*
Remove every node under document.body
*/
function leverFill() {
	var por = false;
	var gettingItem = browser.storage.local.get();
	gettingItem.then((res) => {
		res = res[0];
		var divs = document.getElementsByClassName("application-field");
		for (var i = 0; i < divs.length; i++) {
			var field = divs[i].getElementsByTagName("input");
			var name = getType(field[0].name);
			console.log(name);
			switch(name){
				case "fullname":
					field[0].value = res.fullname;
					break
				case "email":
					field[0].value = res.email;
					break
				case "phone":
					field[0].value = res.phone;
					break
				case "comp":
					field[0].value = res.company;
					break
				case "lin":
					field[0].value = res.linkedin;
					break
				case "twi":
					field[0].value = res.twitter;
					break
				case "por":
					por = true;
					field[0].value = res.personal;
					break
				case "git":
					por = true;
					field[0].value = res.github;
					break
				case "other":
					if (por){break;}
					else{
						field[0].value = res.personal;
					}
				default:
					break
			}
		}
	})
}

function iframeRef( frameRef ) {
    return frameRef.contentWindow
        ? frameRef.contentWindow.document
        : frameRef.contentDocument
}


function greenhouseFill() {
	var por = false;
	var gettingItem = browser.storage.local.get();
	gettingItem.then((res) => {
		res = res[0];
		console.log(window.frames['grnhse_iframe'])
		var divs = inside.getElementsByClassName("field");
		for (var i = 0; i < divs.length; i++) {
			var field = divs[i].getElementsByTagName("input");
			var name = getType(field[0].id);
			switch(name){
				case "fullname":
					field[0].value = res.fullname;
					break
				case "email":
					field[0].value = res.email;
					break
				case "phone":
					field[0].value = res.phone;
					break
				case "comp":
					field[0].value = res.company;
					break
				case "lin":
					field[0].value = res.linkedin;
					break
				case "twi":
					field[0].value = res.twitter;
					break
				case "por":
					por = true;
					field[0].value = res.personal;
					break
				case "git":
					por = true;
					field[0].value = res.github;
					break
				case "other":
					if (por){break;}
					else{
						field[0].value = res.personal;
					}
				default:
					break
			}
		}
	})
}

function onError(error) {
  console.log(`Error: ${error}`);
}

function getType(name) {
	var lowname = name.toLowerCase();
	if (lowname.includes("name")){
		if (lowname.includes("first")){
			return "fname";
		}
		else if (lowname.includes("last")){
			return "lname";
		}
		return "fullname";
	}
	else if (lowname.includes("email")){
		return "email";
	}
	else if (lowname.includes("phone")){
		return "phone";
	}
	else if (lowname.includes("org")){
		return "comp";
	}
	else if (lowname.includes("linkedin")){
		return "lin";
	}
	else if (lowname.includes("twitter")){
		return "twi";
	}
	else if (lowname.includes("port")){
		return "por";
	}
	else if (lowname.includes("git")){
		return "git";
	}
	else if (lowname.includes("other")){
		return "other";
	}
	return "";
}

function pickService() {
	var source = document.getElementsByTagName('html')[0].innerHTML;
	if (source.includes("lever")){
		leverFill();
	}
	else if (source.includes("greenhouse")){
		console.log("greenhouse");
		greenhouseFill();
	}
	else if (source.includes("jobvite")){
		console.log("not quite ready");
	}
  /*Figure out which application type it is*/
}


browser.runtime.onMessage.addListener(handleMenu);
