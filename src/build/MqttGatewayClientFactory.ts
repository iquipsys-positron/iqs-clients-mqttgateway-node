import { Descriptor } from 'pip-services-commons-node';
import { Factory } from 'pip-services-components-node';

import { MqttGatewayNullClientV1 } from '../version1/MqttGatewayNullClientV1';
import { MqttGatewayDirectClientV1 } from '../version1/MqttGatewayDirectClientV1';
import { MqttGatewayHttpClientV1 } from '../version1/MqttGatewayHttpClientV1';
import { MqttGatewayLambdaClientV1 } from '../version1/MqttGatewayLambdaClientV1';

export class MqttGatewayClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('iqs-services-mqttgateway', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('iqs-services-mqttgateway', 'client', 'null', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('iqs-services-mqttgateway', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('iqs-services-mqttgateway', 'client', 'http', 'default', '1.0');
	public static LambdaClientV1Descriptor = new Descriptor('iqs-services-mqttgateway', 'client', 'lambda', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(MqttGatewayClientFactory.NullClientV1Descriptor, MqttGatewayNullClientV1);
		this.registerAsType(MqttGatewayClientFactory.DirectClientV1Descriptor, MqttGatewayDirectClientV1);
		this.registerAsType(MqttGatewayClientFactory.HttpClientV1Descriptor, MqttGatewayHttpClientV1);
		this.registerAsType(MqttGatewayClientFactory.LambdaClientV1Descriptor, MqttGatewayLambdaClientV1);
	}
	
}
