const Calculator = require("../Calculator");

const Calculator1 = new Calculator()

//assercoes simples
test('soma de dois numeros toBe', () => {
    expect(Calculator1.sum(4,5)).toBe(9);
})
test('soma de dois numeros toEqual', () => {
    expect(Calculator1.sum(4,5)).toEqual(9);//para objetos e arrays
})
test('soma de dois numeros toStrictEqual', () => {
    expect(Calculator1.sum(4,5)).toStrictEqual('9');
})

//falsys e truelys
test('nulo', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});
test('zero', () => {
    const z = 0;
    // expect.assertions(1)//limita o numero de asseções que devem ser retornada deste teste
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
});

//numeros
test('matches de numeros', ()=>{
    const value = 2 + 2
    expect(value).toBeGreaterThan(3)
    expect(value).toBeGreaterThanOrEqual(4)
    expect(value).toBeLessThan(8)
    expect(value).toBeLessThanOrEqual(4)

    expect(value).toBe(4)
    expect(value).toStrictEqual(4)
})

//float
test('numeros com pontos flutuantes', ()=>{
    const value = 0.333 + 0.444

    // expect(value).toBe(0.777) //nao documentação fla que isso iria dar errado mas deu certo
    expect(value).toBeCloseTo(0.777)
})

//strings
test('é uma string de data', ()=>{
    const dateString = '2000-12-12'

    expect(dateString).toMatch(/[0-9]{4}-[0-9]{2}-[0-9]{2}/)//usa-se regex
})

test('não é um string de telefone', ()=>{
    const telString = '(85)090909-09'

    expect(telString).not.toMatch(/[0-9]{4}-[0-9]{2}-[0-9]{2}/)//usa-se regex
})

//arrays
test('não possui maça na lista', ()=>{
    const fruitList = [
        'banana',
        'pera',
        'uva'
    ]

    expect(fruitList).not.toContain('maça')
})

//exeptions
function throwExeption() {
    throw Error('erro lancado para testes!');
}

test('teste de throw', () => {
    expect(throwExeption()).toThrow();
    expect(throwExeption()).toThrow(Error);

    // You can also use a string that must be contained in the error message or a regexp
    expect(throwExeption()).toThrow('erro lancado para testes');
    expect(throwExeption()).toThrow(/testes/);

    // Or you can match an exact error message using a regexp like below
    expect(throwExeption()).toThrow(/^erro lancado para testes$/); // Test fails
    expect(throwExeption()).toThrow(/^erro lancado para testes!$/); // Test pass
});

//async js // um teste não pode exeder 5 seg por teste
function fetchData() {
    return new Promise((resolve, reject)=>{

        setTimeout(()=>{
            resolve('retorno true')

        },3000)
    })
}

test('os dados são retornados corretamente', () => {
    return fetchData().then(data => {
        expect(data).toBe('retorno true');
    });
})

test('os dados retornam com async', async ()=>{
    const data = await fetchData()
    expect(data).toBe('retorno true')
})

test('os dados não são retornados', async ()=>{
    await expect(fetchData()).resolves.not.toBe('dados invalidos')
})