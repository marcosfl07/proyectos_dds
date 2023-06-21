import { Model, DataTypes } from "sequelize";
import { sequelize } from "./db.js";

export const Persona = sequelize.define(
    "Persona",
    {
        documento: { type: DataTypes.INTEGER, primaryKey: true},
        nombre: { type: DataTypes.STRING },
        apellido: { type: DataTypes.STRING },
        edad: { type: DataTypes.INTEGER } 
    },
    {
        sequelize,
        modelName: "persona",
        timestamps: false,
    }
);

Persona.prototype.toString = function() {
    return `${this.nombre} ${this.apellido} ${this.edad}`  
}
