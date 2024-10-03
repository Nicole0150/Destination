const Plane = require('../../classes/Plane');

let plane = new Plane ("BA", "London", "Paris")

describe ("Plane", () => {
    it("has a company", () => {
        expect(plane.company).toBe("BA")
    })
    it("has an origin", () => {
        expect(plane.origin).toBe("London")
    })
    it("has a destination", () => {
        expect(plane.destination).toBe("Paris")
    })
    it("has an empty passangers array", () => {
        expect(plane.getPassengers()).toEqual([])
    })
    it("can add passangers", () => {
        expect(() => {
            let passenger = "p1"
            plane.addPassengers(passenger)
            plane.getPassengers().toEqual([passenger])
    })
    })
})