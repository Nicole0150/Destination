const Airport = require('../../classes/Airport');
const Plane = require('../../classes/Plane');

let airport = new Airport ("London Heathrow", "LHR")

describe ("Airport", () => {
    it("has a name", () => {
        expect(airport.name).toBe("London Heathrow")
    })
    it("has an airport code", () => {
        expect(airport.airportCode).toBe("LHR")
    })
    it("has an empty array of planes", () => {
        expect(airport.getPlanes()).toEqual([])
    })
    it("can add planes", () => {
        expect(() => {
            let plane = new Plane ("BA", "London", "Toronto")
            plane.addPlane(plane)
            plane.getPlane().toEqual([plane])
    })
    })
})