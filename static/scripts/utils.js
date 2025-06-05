export function nFormatter(num, digits) {
    var si = [
      { value: 1, symbol: "" },
      { value: 1E3, symbol: "K" },
      { value: 1E6, symbol: "M" },
      { value: 1E9, symbol: "G" },
      { value: 1E12, symbol: "T" },
      { value: 1E15, symbol: "P" },
      { value: 1E18, symbol: "E" }
    ];
    var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var i;
    // for negative value is work
    for (i = si.length - 1; i > 0; i--) {
      if (Math.abs(num) >= si[i].value) {
        break;
      }
    }
    return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
}

function factorial(n) {
  if (n<0) {
    return undefined;
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n-1);
}

export function nCr(n, r) { 
    return (factorial(n))/factorial(r)*factorial(n-r); 
} 

export function addToCash(toAdd) {
  cash += toAdd;
  localStorage.setItem("cash",cash);
  document.getElementById("cash-span").innerText = "Cash: $" + nFormatter(cash,2);
}

export function getCash() {
  return cash;
}

export function setCash(value) {
  cash = value;
  localStorage.setItem("cash",cash);
  document.getElementById("cash-span").innerText = "Cash: $" + nFormatter(cash,2);
}