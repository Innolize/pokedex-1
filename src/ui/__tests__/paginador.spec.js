import mostrarPaginador, { crearItemPaginador } from "../paginador.js"

describe("Testea crearItemPaginador", () => {

    document.body.innerHTML = `<div id="test"></div>`
    const nuevoItem = crearItemPaginador("test", "www.google.com")
    document.querySelector("#test").appendChild(nuevoItem)

    test("Comprueba que elemento li creado contenga a", () => {
        expect(document.querySelector(("li")).innerHTML)
            .toContain("a")
    })
    test("Comprueba URL correcto de item", () => {
        expect(document.querySelector("a").getAttribute("href"))
            .toBe("www.google.com")
    })
    test("Comprueba dataset de elemento a creado", () => {
        expect(document.querySelector("a").dataset.pagina)
            .toBe("test")
    })
})
describe("Testea mostrarPaginador", () => {
    const mockCallback = jest.fn(() => { })

    test("Testea elementos creados en mostrarPaginador", () => {
        document.body.innerHTML = `<div id="paginador"></div>`
        mostrarPaginador(200, 2, "siguiente", "anterior", mockCallback)
        expect(document.querySelectorAll("a").length)
            .toEqual(12)
        expect()
        // serian 10 indices + 2 (siguiente/anterior)
    });

    test("Verifica la asignacion de disable al boton anterior", () => {
        document.body.innerHTML = `<div id="paginador"></div>`
        mostrarPaginador(200, 2, null, null, mockCallback)
        expect(document.querySelector("li").className)
            .toContain("disabled");
    })
    test("Verifica clase activa en paginaActual", () => {
        document.body.innerHTML = `<div id="paginador"></div>`
        mostrarPaginador(200, 2, null, null, mockCallback)
        expect(document.querySelectorAll("li")[2].className)
            .toContain("active");
        // 0 seria anterior y luego verifico el segundo item si es activo
    })
    test("Testea que mockCallback sea llamada solo 1 vez", () => {
        document.body.innerHTML = `<div id="paginador"></div>`
        mostrarPaginador(200, 2, "siguiente", "anterior", mockCallback)
        let itemClickeado = document.querySelector("#paginador a")
        itemClickeado.click()
        expect(mockCallback).toBeCalledTimes(1)
    })
    test("Testea que mockCallback sea llamada solo 1 vez", () => {
        document.body.innerHTML = `<div id="paginador"></div>`
        mostrarPaginador(200, 2, "siguiente", "anterior", mockCallback)
        let itemClickeado = document.querySelector("#paginador a")
        itemClickeado.click()
        expect(mockCallback).toBeCalledWith("anterior")
    })

})