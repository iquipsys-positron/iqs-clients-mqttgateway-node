import { CommandableLambdaClient } from 'pip-services3-aws-node';
import { CommandValueV1 } from './CommandValueV1';
import { IMqttGatewayClientV1 } from './IMqttGatewayClientV1';
export declare class MqttGatewayLambdaClientV1 extends CommandableLambdaClient implements IMqttGatewayClientV1 {
    constructor(config?: any);
    sendCommands(correlationId: string, orgId: string, deviceId: string, values: CommandValueV1[], timestamp: number, callback?: (err: any, result: boolean) => void): void;
    broadcastCommands(correlationId: string, orgId: string, values: CommandValueV1[], timestamp: number, callback?: (err: any, result: boolean) => void): void;
    sendSignal(correlationId: string, orgId: string, deviceId: string, signal: number, timestamp: number, callback?: (err: any, result: boolean) => void): void;
    broadcastSignal(correlationId: string, orgId: string, signal: number, timestamp: number, callback?: (err: any, result: boolean) => void): void;
    pingGateway(correlationId: string, orgId: string, gatewayId: string, callback?: (err: any) => void): void;
    pingDevice(correlationId: string, orgId: string, deviceId: string, callback?: (err: any) => void): void;
    requestStatistics(correlationId: string, orgId: string, gatewayId: string, callback?: (err: any) => void): void;
}
