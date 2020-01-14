"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
//import { IMqttGatewayController } from 'iqs-services-mqttgateway-node';
class MqttGatewayDirectClientV1 extends pip_services3_rpc_node_1.DirectClient {
    constructor() {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_node_1.Descriptor("iqs-services-mqttgateway", "controller", "*", "*", "*"));
    }
    sendCommands(correlationId, orgId, deviceId, values, timestamp, callback) {
        let timing = this.instrument(correlationId, 'mqttgateway.send_commands');
        this._controller.sendCommands(correlationId, orgId, deviceId, values, timestamp, (err, result) => {
            timing.endTiming();
            callback(err, result);
        });
    }
    broadcastCommands(correlationId, orgId, values, timestamp, callback) {
        let timing = this.instrument(correlationId, 'mqttgateway.breadcast_commands');
        this._controller.broadcastCommands(correlationId, orgId, values, timestamp, (err, result) => {
            timing.endTiming();
            callback(err, result);
        });
    }
    sendSignal(correlationId, orgId, deviceId, signal, timestamp, callback) {
        let timing = this.instrument(correlationId, 'mqttgateway.send_signal');
        this._controller.sendSignal(correlationId, orgId, deviceId, signal, timestamp, (err, result) => {
            timing.endTiming();
            callback(err, result);
        });
    }
    broadcastSignal(correlationId, orgId, signal, timestamp, callback) {
        let timing = this.instrument(correlationId, 'mqttgateway.breadcast_signal');
        this._controller.broadcastSignal(correlationId, orgId, signal, timestamp, (err, result) => {
            timing.endTiming();
            callback(err, result);
        });
    }
    pingGateway(correlationId, orgId, gatewayId, callback) {
        let timing = this.instrument(correlationId, 'mqttgateway.ping_gateway');
        this._controller.pingGateway(correlationId, orgId, gatewayId, (err) => {
            timing.endTiming();
            callback(err);
        });
    }
    pingDevice(correlationId, orgId, deviceId, callback) {
        let timing = this.instrument(correlationId, 'mqttgateway.ping_device');
        this._controller.pingDevice(correlationId, orgId, deviceId, (err) => {
            timing.endTiming();
            callback(err);
        });
    }
    requestStatistics(correlationId, orgId, gatewayId, callback) {
        let timing = this.instrument(correlationId, 'mqttgateway.request_statistics');
        this._controller.requestStatistics(correlationId, orgId, gatewayId, (err) => {
            timing.endTiming();
            callback(err);
        });
    }
}
exports.MqttGatewayDirectClientV1 = MqttGatewayDirectClientV1;
//# sourceMappingURL=MqttGatewayDirectClientV1.js.map