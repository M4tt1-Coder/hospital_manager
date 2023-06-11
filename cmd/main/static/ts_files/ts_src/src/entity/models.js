"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Illness = exports.Patient = void 0;
var typeorm_1 = require("typeorm");
var Patient = /** @class */ (function () {
    function Patient() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Patient.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], Patient.prototype, "created_at");
    __decorate([
        (0, typeorm_1.Column)()
    ], Patient.prototype, "updated_at");
    __decorate([
        (0, typeorm_1.Column)()
    ], Patient.prototype, "deleted_at");
    __decorate([
        (0, typeorm_1.Column)()
    ], Patient.prototype, "name");
    __decorate([
        (0, typeorm_1.Column)()
    ], Patient.prototype, "age");
    __decorate([
        (0, typeorm_1.Column)()
    ], Patient.prototype, "roomnumber");
    __decorate([
        (0, typeorm_1.Column)()
    ], Patient.prototype, "illness");
    Patient = __decorate([
        (0, typeorm_1.Entity)()
    ], Patient);
    return Patient;
}());
exports.Patient = Patient;
var Illness = /** @class */ (function () {
    function Illness() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Illness.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], Illness.prototype, "created_at");
    __decorate([
        (0, typeorm_1.Column)()
    ], Illness.prototype, "updated_at");
    __decorate([
        (0, typeorm_1.Column)()
    ], Illness.prototype, "deleted_at");
    __decorate([
        (0, typeorm_1.Column)()
    ], Illness.prototype, "name");
    __decorate([
        (0, typeorm_1.Column)()
    ], Illness.prototype, "kind");
    __decorate([
        (0, typeorm_1.Column)()
    ], Illness.prototype, "can_be_healed");
    Illness = __decorate([
        (0, typeorm_1.Entity)()
    ], Illness);
    return Illness;
}());
exports.Illness = Illness;
