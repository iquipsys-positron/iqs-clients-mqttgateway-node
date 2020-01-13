import { IReferences } from 'pip-services-commons-node';
import { Descriptor } from 'pip-services-commons-node';
import { DirectClient } from 'pip-services-rpc-node';

import { CommandValueV1 } from './CommandValueV1';
import { IMqttGatewayClientV1 } from './IMqttGatewayClientV1';
//import { IMqttGatewayController } from 'iqs-services-mqttgateway-node';

export class MqttGatewayDirectClientV1 extends DirectClient<any> implements IMqttGatewayClientV1 {
            
    public constructor() {
        super();
        this._dependencyResolver.put('controller', new Descriptor("iqs-services-mqttgateway", "controller", "*", "*", "*"))
    }

    public sendCommands(correlationId: string, orgId: string, deviceId: string,
        values: CommandValueV1[], timestamp: number,
        callback?: (err: any, result: boolean) => void) {
        let timing = this.instrument(correlationId, 'mqttgateway.send_commands');
        this._controller.sendCommands(correlationId, orgId, deviceId, values, timestamp, (err, result) => {
            timing.endTiming();
            callback(err, result);
        });
    }

    public broadcastCommands(correlationId: string, orgId: string,
        values: CommandValueV1[], timestamp: number,
        callback?: (err: any, result: boolean) => void) {
        let timing = this.instrument(correlationId, 'mqttgateway.breadcast_commands');
        this._controller.broadcastCommands(correlationId, orgId, values, timestamp, (err, result) => {
            timing.endTiming();
            callback(err, result);
        });
    }

    public sendSignal(correlationId: string, orgId: string, deviceId: string,
        signal: number, timestamp: number,
        callback?: (err: any, result: boolean) => void) {
        let timing = this.instrument(correlationId, 'mqttgateway.send_signal');
        this._controller.sendSignal(correlationId, orgId, deviceId, signal, timestamp, (err, result) => {
            timing.endTiming();
            callback(err, result);
        });
    }

    public broadcastSignal(correlationId: string, orgId: string,
        signal: number, timestamp: number,
        callback?: (err: any, result: boolean) => void) {
        let timing = this.instrument(correlationId, 'mqttgateway.breadcast_signal');
        this._controller.broadcastSignal(correlationId, orgId, signal, timestamp, (err, result) => {
            timing.endTiming();
            callback(err, result);
        });
    }

    public pingGateway(correlationId: string, orgId: string, gatewayId: string,
        callback?: (err: any) => void) {
        let timing = this.instrument(correlationId, 'mqttgateway.ping_gateway');
        this._controller.pingGateway(correlationId, orgId, gatewayId, (err) => {
            timing.endTiming();
            callback(err);
        });
    }
            
    public pingDevice(correlationId: string, orgId: string, deviceId: string,
        callback?: (err: any) => void) {
        let timing = this.instrument(correlationId, 'mqttgateway.ping_device');
        this._controller.pingDevice(correlationId, orgId, deviceId, (err) => {
            timing.endTiming();
            callback(err);
        });
    }

    public requestStatistics(correlationId: string, orgId: string, gatewayId: string,
        callback?: (err: any) => void) {
        let timing = this.instrument(correlationId, 'mqttgateway.request_statistics');
        this._controller.requestStatistics(correlationId, orgId, gatewayId, (err) => {
            timing.endTiming();
            callback(err);
        });
    }
    
}