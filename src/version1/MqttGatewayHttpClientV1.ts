import { ConfigParams } from 'pip-services-commons-node';
import { IReferences } from 'pip-services-commons-node';
import { CommandableHttpClient } from 'pip-services-rpc-node';

import { CommandValueV1 } from './CommandValueV1';
import { IMqttGatewayClientV1 } from './IMqttGatewayClientV1';

export class MqttGatewayHttpClientV1 extends CommandableHttpClient implements IMqttGatewayClientV1 {       
    
    constructor(config?: any) {
        super('v1/mqttgateway');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }

    public sendCommands(correlationId: string, orgId: string, deviceId: string,
        values: CommandValueV1[], timestamp: number,
        callback?: (err: any, result: boolean) => void) {
        this.callCommand(
            'send_commands',
            correlationId,
            {
                org_id: orgId,
                device_id: deviceId,
                commands: values,
                timestamp: timestamp
            }, 
            (err, result) => {
                callback(err, result ? result.result : null);
            }
        );
    }

    public broadcastCommands(correlationId: string, orgId: string,
        values: CommandValueV1[], timestamp: number,
        callback?: (err: any, result: boolean) => void) {
        this.callCommand(
            'broadcast_commands',
            correlationId,
            {
                org_id: orgId,
                commands: values,
                timestamp: timestamp
            }, 
            (err, result) => {
                callback(err, result ? result.result : null);
            }
        );
    }

    public sendSignal(correlationId: string, orgId: string, deviceId: string,
        signal: number, timestamp: number,
        callback?: (err: any, result: boolean) => void) {
        this.callCommand(
            'send_signal',
            correlationId,
            {
                org_id: orgId,
                device_id: deviceId,
                signal: signal,
                timestamp: timestamp
            }, 
            (err, result) => {
                callback(err, result ? result.result : null);
            }
        );
    }

    public broadcastSignal(correlationId: string, orgId: string,
        signal: number, timestamp: number,
        callback?: (err: any, result: boolean) => void) {
        this.callCommand(
            'broadcast_signal',
            correlationId,
            {
                org_id: orgId,
                signal: signal,
                timestamp: timestamp
            }, 
            (err, result) => {
                callback(err, result ? result.result : null);
            }
        );
    }

    public pingGateway(correlationId: string, orgId: string, gatewayId: string,
        callback?: (err: any) => void) {
        this.callCommand(
            'ping_gateway',
            correlationId,
            {
                org_id: orgId,
                gateway_id: gatewayId
            }, 
            (err, result) => {
                callback(err);
            }
        );
    }
            
    public pingDevice(correlationId: string, orgId: string, deviceId: string,
        callback?: (err: any) => void) {
        this.callCommand(
            'ping_device',
            correlationId,
            {
                org_id: orgId,
                device_id: deviceId
            }, 
            (err, result) => {
                callback(err);
            }
        );
    }

    public requestStatistics(correlationId: string, orgId: string, gatewayId: string,
        callback?: (err: any) => void) {
        this.callCommand(
            'request_statistics',
            correlationId,
            {
                org_id: orgId,
                gateway_id: gatewayId
            }, 
            (err, result) => {
                callback(err);
            }
        );
    }
    
}
