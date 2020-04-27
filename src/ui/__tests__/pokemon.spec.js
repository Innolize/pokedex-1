import mostrarPokemon from "../pokemon.js"
import bulbasaur from "../../../cypress/fixtures/bulbasaur.json"

describe("Testea funcion mostrarPokemon", () => {
    document.body.innerHTML = `<div id="pokemon-contenedor">
    <div id="pokemon-imagen"></div>
    <div id="pokemon-nombre"></div>
    <div id="pokemon-id"></div>
    <div id="tipos"></div>
    <div id="movimientos"></div>
    <div id="habilidades"></div>
    <div id="ayuda"></div>
    <div id="total-pokemones">
    </div>`
    mostrarPokemon(bulbasaur)
    test("Comprueba mostrar imagen del pokemon", () => {

        expect(document.querySelector("#pokemon-imagen").getAttribute("src")).toEqual("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png")
    })
    test("Elimina texto ayuda", () => {
        expect(document.querySelector("#ayuda").textContent)
            .toBe("")
    })
    test("Comprueba nombre correcto de pokemon", () => {
        expect(document.querySelector("#pokemon-nombre").textContent)
            .toBe("bulbasaur")
    })

    test("Comprueba que muestre tipo correcto y se asigne clase correcta al span", () => {
        expect(document.querySelectorAll("#tipos span")[0].textContent)
            .toBe("poison")
        expect(document.querySelectorAll("#tipos span")[1].textContent)
            .toBe("grass")
        expect(document.querySelectorAll("#tipos span")[1].className)
            .toBe("badge grass type")
    })

    test("comprueba funcion mostrarHabilidades", () => {
        expect(document.querySelectorAll("#habilidades span")[0].textContent)
            .toBe("chlorophyll")
        expect(document.querySelectorAll("#habilidades span")[1].textContent)
            .toBe("overgrow")
        expect(document.querySelectorAll("#habilidades span")[1].className)
            .toBe("badge")
    })
    test("Testea cantidad de movimientos de mostrarMovimientos", () => {
        expect(document.querySelectorAll("#movimientos th").length)
            .toBe(78)
    })
})
