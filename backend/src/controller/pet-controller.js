"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePet = exports.update = exports.create = exports.getPetById = exports.getAll = void 0;
var http_status_1 = require("http-status");
var pet_service_1 = require("../service/pet-service");
function getAll(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var pets, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, pet_service_1.default.getAll()];
                case 1:
                    pets = _a.sent();
                    return [2 /*return*/, res.status(http_status_1.default.OK).send(pets)];
                case 2:
                    error_1 = _a.sent();
                    next(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getAll = getAll;
function getPetById(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var petId, pet, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    petId = +req.params.id;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, pet_service_1.default.getPetById(petId)];
                case 2:
                    pet = _a.sent();
                    return [2 /*return*/, res.status(http_status_1.default.OK).send(pet)];
                case 3:
                    error_2 = _a.sent();
                    next(error_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.getPetById = getPetById;
function create(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, name, race, sex, image, city, state, species, size, weight, error_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, name = _a.name, race = _a.race, sex = _a.sex, image = _a.image, city = _a.city, state = _a.state, species = _a.species, size = _a.size, weight = _a.weight;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, pet_service_1.default.create(name, race, sex, image, city, state, species, size, weight)];
                case 2:
                    _b.sent();
                    return [2 /*return*/, res.sendStatus(http_status_1.default.CREATED)];
                case 3:
                    error_3 = _b.sent();
                    next(error_3);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.create = create;
function update(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var petId, _a, isAdopted, userId, error_4;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    petId = +req.params.petId;
                    _a = req.body, isAdopted = _a.isAdopted, userId = _a.userId;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, pet_service_1.default.update(petId, isAdopted, userId)];
                case 2:
                    _b.sent();
                    return [2 /*return*/, res.sendStatus(http_status_1.default.OK)];
                case 3:
                    error_4 = _b.sent();
                    next(error_4);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.update = update;
function deletePet(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var petId, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    petId = +req.params.petId;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, pet_service_1.default.deletePet(petId)];
                case 2:
                    _a.sent();
                    return [2 /*return*/, res.sendStatus(http_status_1.default.OK)];
                case 3:
                    error_5 = _a.sent();
                    next(error_5);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.deletePet = deletePet;
