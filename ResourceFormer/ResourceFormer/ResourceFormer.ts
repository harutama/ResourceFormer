interface IValidation {

    validation(errors: Array<ValidationError>);

}

class ValidationError {

}

class DeploymentTemplate implements IValidation {

    private $schema: string = "http://schema.management.azure.com/schemas/2014-04-01-preview/deploymentTemplate.json#";

    private contentVersion: string;

    private location: string;

    private tags: Object;

    private parameters: Parameter;

    private variables: Object;

    private resources: Array<Resource>;

    private outputs: Object;

    validation(errors: Array<ValidationError>) {
        if (!this.contentVersion) {
            var err: ValidationError = new ValidationError();
            //messages
            errors.push(err);
        } else if (!this.contentVersion.match("(^[0-9]+\\.[0-9]+\\.[0-9]+\\.[0-9]+$)")) {
            var err: ValidationError = new ValidationError();
            //messages
            errors.push(err);
        }


    }
}

class Parameter {

    private name: string;

    private type: string;

    private defaultValue: string;

    private allowedValues: Array<string>;

    constructor(name: string, type: string, defaultValue?:string, allowedValues?:Array<string>) {
        this.name = name;
        this.type = type;
        this.defaultValue = defaultValue;
        this.allowedValues = allowedValues;
    }

}

class Resource {

}