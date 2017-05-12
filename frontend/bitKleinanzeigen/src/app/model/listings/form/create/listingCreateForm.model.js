"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var listing_controller_1 = require("../../network/listing.controller");
var listing_reposetory_1 = require("../../listing.reposetory");
var router_1 = require("@angular/router");
var security_model_1 = require("../../../../security/security.model");
var ListingCreateForm = (function () {
    function ListingCreateForm(listingType, listingController, repo, router, securityModel) {
        this.listingType = listingType;
        this.listingController = listingController;
        this.repo = repo;
        this.router = router;
        this.securityModel = securityModel;
        this.form = new forms_1.FormGroup({});
        this.model = {};
    }
    ListingCreateForm.prototype.submit = function () {
        if (this.form.valid) {
        }
    };
    return ListingCreateForm;
}());
ListingCreateForm = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [String, listing_controller_1.ListingController,
        listing_reposetory_1.ListingReposetory,
        router_1.Router,
        security_model_1.SecurityModel])
], ListingCreateForm);
exports.ListingCreateForm = ListingCreateForm;
//# sourceMappingURL=listingCreateForm.model.js.map