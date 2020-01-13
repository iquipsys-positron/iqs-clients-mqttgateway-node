import { IReferences } from 'pip-services-commons-node';
import { Descriptor } from 'pip-services-commons-node';

import { CommandValueV1 } from './CommandValueV1';
import { IMqttGatewayClientV1 } from './IMqttGatewayClientV1';

export class MqttGatewayNullClientV1 implements IMqttGatewayClientV1 {
            
    public sendCommands(correlationId: string, orgId: string, deviceId: string,
        values: CommandValueV1[], timestamp: number,
        callback?: (err: any, result: boolean) => void) {
        if (callback) callback(null, true);
    }

    public broadcastCommands(correlationId: string, orgId: string,
        values: CommandValueV1[], timestamp: number,
        callback?: (err: any, result: boolean) => void) {
        if (callback) callback(null, true);
    }

    public sendSignal(correlationId: string, orgId: string, deviceId: string,
        signal: number, timestamp: number,
        callback?: (err: any, result: boolean) => void) {
        if (callback) callback(null, true);
    }

    public broadcastSignal(correlationId: string, orgId: string,
        signal: number, timestamp: number,
        callback?: (err: any, result: boolean) => void) {
        if (callback) callback(null, true);
    }

    public pingGateway(correlationId: string, orgId: string, gatewayId: string,
        callback?: (err: any) => void) {
        if (callback) callback(null);
    }
            
    public pingDevice(correlationId: string, orgId: string, deviceId: string,
        callback?: (err: any) => void) {
        if (callback) callback(null);
    }

    public requestStatistics(correlationId: string, orgId: string, gatewayId: string,
        callback?: (err: any) => void) {
        if (callback) callback(null);
    }
    
}