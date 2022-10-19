import { sum, substract } from "./modules/sum-substract.js";
import * as Operation from './modules/multipli-divide.js';
function main() {
    const num1 = 20;
    const num2 = 5;
    const sumResult = Operation.multiply(num1, num2);
    console.log(sumResult);   
}
main();