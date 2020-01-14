"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _ = require('lodash');
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_aws_node_1 = require("pip-services3-aws-node");
class MqttGatewayLambdaClientV1 extends pip_services3_aws_node_1.CommandableLambdaClient {
    constructor(config) {
        super('mqttgateway');
        if (config != null)
            this.configure(pip_services3_commons_node_1.ConfigParams.fromValue(config));
    }
    sendCommands(correlationId, orgId, deviceId, values, timestamp, callback) {
        this.callCommand('send_commands', correlationId, {
            org_id: orgId,
            device_id: deviceId,
            commands: values,
            timestamp: timestamp
        }, (err, result) => {
            callback(err, result ? result.result : null);
        });
    }
    broadcastCommands(correlationId, orgId, values, timestamp, callback) {
        this.callCommand('broadcast_commands', correlationId, {
            org_id: orgId,
            commands: values,
            timestamp: timestamp
        }, (err, result) => {
            callback(err, result ? result.result : null);
        });
    }
    sendSignal(correlationId, orgId, deviceId, signal, timestamp, callback) {
        this.callCommand('send_signal', correlationId, {
            org_id: orgId,
            device_id: deviceId,
            signal: signal,
            timestamp: timestamp
        }, (err, result) => {
            callback(err, result ? result.result : null);
        });
    }
    broadcastSignal(correlationId, orgId, signal, timestamp, callback) {
        this.callCommand('broadcast_signal', correlationId, {
            org_id: orgId,
            signal: signal,
            timestamp: timestamp
        }, (err, result) => {
            callback(err, result ? result.result : null);
        });
    }
    pingGateway(correlationId, orgId, gatewayId, callback) {
        this.callCommand('ping_gateway', correlationId, {
            org_id: orgId,
            gateway_id: gatewayId
        }, (err, result) => {
            callback(err);
        });
    }
    pingDevice(correlationId, orgId, deviceId, callback) {
        this.callCommand('ping_device', correlationId, {
            org_id: orgId,
            device_id: deviceId
        }, (err, result) => {
            callback(err);
        });
    }
    requestStatistics(correlationId, orgId, gatewayId, callback) {
        this.callCommand('request_statistics', correlationId, {
            org_id: orgId,
            gateway_id: gatewayId
        }, (err, result) => {
            callback(err);
        });
    }
}
exports.MqttGatewayLambdaClientV1 = MqttGatewayLambdaClientV1;
//# sourceMappingURL=MqttGatewayLambdaClientV1.js.map