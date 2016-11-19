function recursivePrint(start, end, acc) {
	if (start > end) {
		return acc;
	}
	return recursivePrint(start + 1, end, acc + start);
}

function arraySum(arr) {
	return arr.reduce(function(prev, next) {
		return prev + next;
	});
}

function arrayMax(arr) {
	return arr.reduce(function(prev, next) {
		return (next > prev) ? next : prev;
	});
}

function arrayMin(arr) {
	return arr.reduce(function(prev, next) {
		return next < prev ? next : prev;
	});
}

String.prototype.trim = function() {
	return this.replace(/\s{1,}$|^\s{1,}/g, '');
}

export { recursivePrint, arraySum, arrayMax, arrayMin };