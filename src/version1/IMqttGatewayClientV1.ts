import { CommandValueV1 } from './CommandValueV1';
import { Command } from 'pip-services3-commons-node';

export interface IMqttGatewayClientV1 {
    sendCommands(correlationId: string, orgId: string, deviceId: string,
        values: CommandValueV1[], timestamp: number,
        callback?: (err: any, result: boolean) => void);

    broadcastCommands(correlationId: string, orgId: string,
        values: CommandValueV1[], timestamp: number,
        callback?: (err: any, result: boolean) => void);

    sendSignal(correlationId: string, orgId: string, deviceId: string,
        signal: number, timestamp: number,
        callback?: (err: any, result: boolean) => void);

    broadcastSignal(correlationId: string, orgId: string,
        signal: number, timestamp: number,
        callback?: (err: any, result: boolean) => void);

    pingGateway(correlationId: string, orgId: string, gatewayId: string,
        callback?: (err: any) => void);
            
    pingDevice(correlationId: string, orgId: string, deviceId: string,
        callback?: (err: any) => void);

    requestStatistics(correlationId: string, orgId: string, gatewayId: string,
        callback?: (err: any) => void);
}
