// Print odds 1 - 20

for (let i = 1; i <=20; i++) {
    if (i % 2 == 1) {
        console.log(i)
    }
}

// Decreasing multiples of 3 100 down to 0

for (let i = 100; i>0; i=i-3) {
    console.log(i)
}

// print the sequence 4, 2.5, 1, -0.5, -2, -3.5

for (let i = 4; i>-4; i=i-1.5) {
    console.log(i)
}

// Sigma, write code that will add all of the values from 1-100 onto some variable sum. 5050 is final number

let sum = 0
for (let i = 1; i<=100; i++) {
    sum = sum + i
}
console.log(sum)

// write code that will multiple all values from 1-12 onto variable product, end with 479001600

let product = 1 
for (let i = 1; i<=12; i++) {
    product = product * i 
}
console.log(product)