const Person = require('./Person');

test('1983 should be millenial', () =>
{
    // arrange
    let personObj = new Person(1983);

    // act
    let result = personObj.isMillenial();

    // assert
    expect(result).toBeTruthy();
});

test('1980 should not be millenial', () =>
{
    let personObj = new Person(1980);
    let result = personObj.isMillenial();
    expect(result).toBeFalsy();
})