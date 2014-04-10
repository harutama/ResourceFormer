var ValidationError = (function () {
    function ValidationError() {
    }
    return ValidationError;
})();

var DeploymentTemplate = (function () {
    function DeploymentTemplate() {
        this.$schema = "http://schema.management.azure.com/schemas/2014-04-01-preview/deploymentTemplate.json#";
    }
    DeploymentTemplate.prototype.validation = function (errors) {
        if (!this.contentVersion) {
            var err = new ValidationError();

            //messages
            errors.push(err);
        } else if (!this.contentVersion.match("(^[0-9]+\\.[0-9]+\\.[0-9]+\\.[0-9]+$)")) {
            var err = new ValidationError();

            //messages
            errors.push(err);
        }
    };
    return DeploymentTemplate;
})();

var Parameter = (function () {
    function Parameter(name, type, defaultValue, allowedValues) {
        this.name = name;
        this.type = type;
        this.defaultValue = defaultValue;
        this.allowedValues = allowedValues;
    }
    return Parameter;
})();

var Resource = (function () {
    function Resource() {
    }
    return Resource;
})();
//# sourceMappingURL=ResourceFormer.js.map
