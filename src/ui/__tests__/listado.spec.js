import { actualizarTextoIndicePokemones, mostrarListadoPokemones } from "../listado.js";
import listaFixture from "../../../cypress/fixtures/listado-pagina-1.json"

test("Actualiza indice pokemon", () => {
    document.body.innerHTML = `<div id="indice" ></div>`
    actualizarTextoIndicePokemones("test")
    expect(document.querySelector(("#indice")).textContent)
        .toContain("test")
})

test("Muestra listado de pokemons", () => {
    document.body.innerHTML = `<div id="indice"></div>`
    mostrarListadoPokemones(listaFixture.results)
    expect(document.querySelectorAll(("a")).length)
        .toEqual(20)
})