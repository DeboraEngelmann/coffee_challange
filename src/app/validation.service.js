"use strict";
//Responsável por definir as mensagens de erro e implementar validações personalizadas
var ValidationService = (function () {
    function ValidationService() {
    }
    ValidationService.getValidatorErrorMessage = function (validatorName, validatorValue) {
        var config = {
            'required': 'Ops! Esse campo é obrigatório.',
            'minlength': "O nome deve conter pelo menos " + validatorValue.requiredLength + " letras!"
        };
        return config[validatorName];
    };
    return ValidationService;
}());
exports.ValidationService = ValidationService;
//# sourceMappingURL=validation.service.js.map