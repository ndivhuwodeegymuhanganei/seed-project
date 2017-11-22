import { Error } from './error.model';
import { EventEmitter } from "@angular/core";
var ErrorService = /** @class */ (function () {
    function ErrorService() {
        this.errorOccurred = new EventEmitter();
    }
    ErrorService.prototype.handleError = function (error) {
        var errorData = new Error(error.title, error.error.message);
        this.errorOccurred.emit(errorData);
    };
    return ErrorService;
}());
export { ErrorService };
