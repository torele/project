"use strict";

let num = 10;

for (let i = 0; i < num; i++) {
    if (i%2 == 1) {
        //break;
        continue;
    }

    console.log(i);
}