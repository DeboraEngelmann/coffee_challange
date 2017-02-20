//Responsável por definir as mensagens de erro e implementar validações personalizadas
export class ValidationService {
    static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
        let config = {
            'required': 'Ops! Esse campo é obrigatório.',
            'minlength': `O nome deve conter pelo menos ${validatorValue.requiredLength} letras!`
        };
        return config[validatorName];
    }
}
