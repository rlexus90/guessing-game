class GuessingGame {
	constructor() {
		this.guessNumber = 0;
		this.range = [];
	}

	setRange(min, max) {
		for (let i = min; i <= max; i++) {
			this.range.push(i);
		}
	}

	guess() {
		this.guessNumber = Math.ceil(
			(this.range[0] + this.range[this.range.length - 1]) / 2);
		return this.guessNumber;
	}

	lower() {
		let index = this.range.indexOf(this.guessNumber);
		this.range = this.range.slice(0, index+1);
	}
	greater() {
		let index = this.range.indexOf(this.guessNumber);
		this.range = this.range.slice(index );
	}
}

module.exports = GuessingGame;
