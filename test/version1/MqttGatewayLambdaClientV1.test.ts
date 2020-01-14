let process = require('process');

import { ConfigParams } from 'pip-services3-commons-node';

import { MqttGatewayClientFixtureV1 } from './MqttGatewayClientFixtureV1';
import { MqttGatewayLambdaClientV1 } from '../../src/version1/MqttGatewayLambdaClientV1';

suite('MqttGatewayLambdaClient', ()=> {
    let AWS_LAMDBA_ARN = process.env["AWS_LAMDBA_ARN"] || "";
    let AWS_ACCESS_ID = process.env["AWS_ACCESS_ID"] || "";
    let AWS_ACCESS_KEY = process.env["AWS_ACCESS_KEY"] || "";

    if (!AWS_LAMDBA_ARN || !AWS_ACCESS_ID || !AWS_ACCESS_KEY)
        return;

    let config = ConfigParams.fromTuples(
        "lambda.connection.protocol", "aws",
        "lambda.connection.arn", AWS_LAMDBA_ARN,
        "lambda.credential.access_id", AWS_ACCESS_ID,
        "lambda.credential.access_key", AWS_ACCESS_KEY,
        "lambda.options.connection_timeout", 30000
    );
    let lambdaConfig = config.getSection('lambda');

    // Skip if connection is not configured
    if (lambdaConfig.getAsNullableString("connection.protocol") != "aws")
        return;

    let client: MqttGatewayLambdaClientV1;
    let fixture: MqttGatewayClientFixtureV1;

    setup((done) => {
        client = new MqttGatewayLambdaClientV1();
        client.configure(lambdaConfig);

        fixture = new MqttGatewayClientFixtureV1(client);

        client.open(null, done);
    });

    teardown((done) => {
        client.close(null, done);
    });

    test('Signaling', (done) => {
        fixture.testSignaling(done);
    });

    test('Commanding', (done) => {
        fixture.testCommanding(done);
    });

});