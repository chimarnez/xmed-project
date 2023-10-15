const e = require("express");
const {
    findAll,
    findByEmail,
    findById,
    insert,
    update,
    deleteById,
} = require("../src/services/user"); // Importa las funciones de manipulación de datos correspondientes

describe("Users Test", () => {
    describe("Find All users", () => {
        it("should return all users", async () => {
            const users = await findAll();
            expect(users.length).toBeGreaterThanOrEqual(1);
            expect(users[0].dataValues.firstName).toBe("Doctor");
        });
    });
    describe("Find User by id", () => {
        it("should return a user", async () => {
            const user = await findById(1);
            expect(user.dataValues.firstName).toBe("Doctor");
        });
    });
    describe("Find User by email", () => {
        it("should return a user", async () => {
            const email = "Omar@gmail.com";
            const user = await findByEmail(email);
            expect(user.dataValues.email).toBe(email);
        });
    });
    describe("Delete User by id", () => {
        it("should delete a user", async () => {
            const id = 5;
            await deleteById(id);
            const user = await findById(id);
            expect(user).toBeNull();
        });
    });
    describe("Update User by id", () => {
        it("should update a user", async () => {
            const id = 1;
            const data = {
                firstName: "Doctor",
                lastName: "Simi",
            };
            await update(id, data);
            const user = await findById(id);
            expect(user.dataValues.lastName).toBe(data.lastName);
        });
    });
    describe("Insert User", () => {
        it("should insert a user", async () => {
            const data = {
                firstName: "Checo",
                lastName: "Perez",
                birthDate: "1990-10-28",
                gender: "M",
                phone: "44123121314",
                address: "Mexico",
                email: "checo@ghotmail.com",
                password: "+asaad34A",
            };
            const user = await insert(data);
            expect(user.dataValues.firstName).toBe(data.firstName);
        });
    });
});
