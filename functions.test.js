const functions = require('./functions');

test("returnTwo() should return 2", () => 
{
    expect(functions.returnTwo() ).toEqual(2);
});

test("greeting(name) should return Hello, name", () =>
{
    expect(functions.greeting('James')).toEqual("Hello, James.");
    expect(functions.greeting('Jill')).toEqual("Hello, Jill.");
});

describe("Math functions:", () => 
{
    test("add() should return sum of two parameters", () => 
    {
        expect(functions.add(1, 2)).toEqual(3);
        expect(functions.add(5, 9)).toEqual(14);
    });

    test("subtract() should return difference of num1 - num2", () =>
    {
        expect(functions.subtract(5, 3)).toBe(2);
        expect(functions.subtract(110, 7)).toBe(103);
    });

    test("multiply() should return product of num1 and num2", () =>
    {
        expect(functions.multiply(10, 3)).toBe(30);
        expect(functions.multiply(1, 3)).toBe(3);
    });

    test("divide() should return num1 / num2", () => 
    {
        let flag = true;
        let result = functions.divide(10, 2);
        let result2 = functions.divide(50, 2);
        if (result !== 5 || result2 !== 25)
        {
            flag = false;
        }
        expect(flag).toBe(true);
        // expect(result).toEqual(5);
        // expect(result2).toEqual(25);
    });
});