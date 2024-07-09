const switchType = () => {
	const wrapper = document.getElementById("input-wrapper");
	const pwd = document.getElementById("password");
	const txt = document.getElementById("text");

	if (wrapper.dataset.type === "password") {
		txt.value = pwd.value;
		wrapper.dataset.type = "text";

		return;
	}

	wrapper.dataset.type = "password";
};

const checkPwdStrength = () => {
	const container = document.getElementById("input-con");
	const pointer = document.getElementById("hand-wrapper");
	const pwd = document.getElementById("password");
	const value = pwd.value;

	if (value === "") {
		container.dataset.strength = "";
		pointer.style = "--score: 0;";

		return;
	}
	if (value.length < 8) {
		container.dataset.strength = "red";
		pointer.style = `--score: ${value.length / 7};`;

		return;
	}

	const lengthScore = value.length > 12 ? 2 : (value.length * 2) / 13;
	const uppercaseScore = /[A-Z]/.test(value) ? 2 : 0;
	const lowercaseScore = /[a-z]/.test(value) ? 2 : 0;
	const numberScore = /\d/.test(value) ? 2 : 0;
	const symbolScore = /\W/.test(value) ? 2 : 0;
	const sequenceScore = !/(.)\1{2}/.test(value) ? 2 : 0;
	const totalScore =
		(lengthScore +
			uppercaseScore +
			lowercaseScore +
			numberScore +
			symbolScore +
			sequenceScore) /
		3;

	pointer.style = `--score: ${totalScore};`;

	if (totalScore > 3) {
		container.dataset.strength = "green";

		return;
	}
	if (totalScore > 2) {
		container.dataset.strength = "yellow";
		return;
	}
	if (totalScore > 1) {
		container.dataset.strength = "orange";
		return;
	}
	if (totalScore > 0) {
		container.dataset.strength = "red";
		return;
	}

	container.dataset.strength = "";
};
