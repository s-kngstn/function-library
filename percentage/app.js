function percentage(from, to) {
let diff = ((to - from) / from) * 100;
let label = diff > 0 ? 'greater' : 'less';
return `${to} is ${diff.toFixed(2)}% ${label} then ${from}.`
}

let calc = percentage(10, 5);

console.log(calc);