"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_components_node_1 = require("pip-services3-components-node");
const MqttGatewayNullClientV1_1 = require("../version1/MqttGatewayNullClientV1");
const MqttGatewayDirectClientV1_1 = require("../version1/MqttGatewayDirectClientV1");
const MqttGatewayHttpClientV1_1 = require("../version1/MqttGatewayHttpClientV1");
const MqttGatewayLambdaClientV1_1 = require("../version1/MqttGatewayLambdaClientV1");
class MqttGatewayClientFactory extends pip_services3_components_node_1.Factory {
    constructor() {
        super();
        this.registerAsType(MqttGatewayClientFactory.NullClientV1Descriptor, MqttGatewayNullClientV1_1.MqttGatewayNullClientV1);
        this.registerAsType(MqttGatewayClientFactory.DirectClientV1Descriptor, MqttGatewayDirectClientV1_1.MqttGatewayDirectClientV1);
        this.registerAsType(MqttGatewayClientFactory.HttpClientV1Descriptor, MqttGatewayHttpClientV1_1.MqttGatewayHttpClientV1);
        this.registerAsType(MqttGatewayClientFactory.LambdaClientV1Descriptor, MqttGatewayLambdaClientV1_1.MqttGatewayLambdaClientV1);
    }
}
exports.MqttGatewayClientFactory = MqttGatewayClientFactory;
MqttGatewayClientFactory.Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-mqttgateway', 'factory', 'default', 'default', '1.0');
MqttGatewayClientFactory.NullClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-mqttgateway', 'client', 'null', 'default', '1.0');
MqttGatewayClientFactory.DirectClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-mqttgateway', 'client', 'direct', 'default', '1.0');
MqttGatewayClientFactory.HttpClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-mqttgateway', 'client', 'http', 'default', '1.0');
MqttGatewayClientFactory.LambdaClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-mqttgateway', 'client', 'lambda', 'default', '1.0');
//# sourceMappingURL=MqttGatewayClientFactory.js.map