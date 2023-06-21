import { Model, DataTypes, INTEGER } from "sequelize";
import { sequelize } from "../db.js";

export const Telefono = sequelize.define(
    "Telefono",
    {
        Id:  {type: DataTypes.INTEGER, primaryKey: true},
        Numero: { type: DataTypes.TEXT },
        Tipo: { type: DataTypes.INTEGER },
        Documento: { type: DataTypes.INTEGER },
    },
    {
        sequelize,
        modelName: "Telefono",
        timestamps: false,
    }
);

Telefono.prototype.toString = function() {
    return `${this.Numer} ${this.Tipo} ${this.Documento}`  
}
