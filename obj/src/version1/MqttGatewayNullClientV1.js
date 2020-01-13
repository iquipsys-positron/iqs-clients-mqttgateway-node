"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MqttGatewayNullClientV1 {
    sendCommands(correlationId, orgId, deviceId, values, timestamp, callback) {
        if (callback)
            callback(null, true);
    }
    broadcastCommands(correlationId, orgId, values, timestamp, callback) {
        if (callback)
            callback(null, true);
    }
    sendSignal(correlationId, orgId, deviceId, signal, timestamp, callback) {
        if (callback)
            callback(null, true);
    }
    broadcastSignal(correlationId, orgId, signal, timestamp, callback) {
        if (callback)
            callback(null, true);
    }
    pingGateway(correlationId, orgId, gatewayId, callback) {
        if (callback)
            callback(null);
    }
    pingDevice(correlationId, orgId, deviceId, callback) {
        if (callback)
            callback(null);
    }
    requestStatistics(correlationId, orgId, gatewayId, callback) {
        if (callback)
            callback(null);
    }
}
exports.MqttGatewayNullClientV1 = MqttGatewayNullClientV1;
//# sourceMappingURL=MqttGatewayNullClientV1.js.map