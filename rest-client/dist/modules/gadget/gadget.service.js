"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GadgetService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let GadgetService = class GadgetService {
    async makeHttpRequest(url) {
        try {
            const response = await axios_1.default.get('https://api.restful-api.dev/objects');
            return response.data;
        }
        catch (error) {
            console.error('Error making HTTP request:', error);
            throw error;
        }
    }
    async makeHttpRequestById(url) {
        try {
            const response = await axios_1.default.get(url);
            return response.data;
        }
        catch (error) {
            console.error('Error making HTTP request:', error);
            throw error;
        }
    }
    async makeHttpPostRequest(url, body) {
        try {
            const response = await axios_1.default.post(url, body);
            return response.data;
        }
        catch (error) {
            console.error('Error making HTTP POST request:', error);
            throw error;
        }
    }
};
exports.GadgetService = GadgetService;
exports.GadgetService = GadgetService = __decorate([
    (0, common_1.Injectable)()
], GadgetService);
//# sourceMappingURL=gadget.service.js.map