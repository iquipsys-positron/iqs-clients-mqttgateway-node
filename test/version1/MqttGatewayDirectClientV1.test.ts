let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services-commons-node';
import { ConfigParams } from 'pip-services-commons-node';
import { References } from 'pip-services-commons-node';
import { ConsoleLogger } from 'pip-services-components-node';

import { OrganizationsMemoryClientV1 } from 'pip-clients-organizations-node';
import { GatewaysMemoryClientV1 } from 'iqs-clients-gateways-node';
import { DeviceTypeV1 } from 'iqs-clients-devices-node';
import { DevicesMemoryClientV1 } from 'iqs-clients-devices-node';
import { StateUpdatesNullClientV1 } from 'iqs-clients-stateupdates-node';
import { BeaconsNullClientV1 } from 'pip-clients-beacons-node';

import { MqttGatewayConnector } from 'iqs-services-mqttgateway-node'
import { MqttGatewayController } from 'iqs-services-mqttgateway-node';

import { IMqttGatewayClientV1 } from '../../src/version1/IMqttGatewayClientV1';
import { MqttGatewayDirectClientV1 } from '../../src/version1/MqttGatewayDirectClientV1';
import { MqttGatewayClientFixtureV1 } from './MqttGatewayClientFixtureV1';

suite('MqttGatewayDirectClientV1', ()=> {
    let client: MqttGatewayDirectClientV1;
    let fixture: MqttGatewayClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let connector = new MqttGatewayConnector();
        let controller = new MqttGatewayController();

        let organizationsClient = new OrganizationsMemoryClientV1();
        
        let gatewaysClient = new GatewaysMemoryClientV1();

        let devicesClient = new DevicesMemoryClientV1();
        devicesClient.createDevice(
            null, 
            { id: '123', org_id: '1', status: 'active', type: DeviceTypeV1.IoTDevice, udi: '123' }, 
            (err, device) => {}
        );
                
        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-organizations', 'client', 'memory', 'default', '1.0'), organizationsClient,
            new Descriptor('iqs-services-gateways', 'client', 'memory', 'default', '1.0'), gatewaysClient,
            new Descriptor('iqs-services-devices', 'client', 'memory', 'default', '1.0'), devicesClient,
            new Descriptor('iqs-services-stateupdates', 'client', 'null', 'default', '1.0'), new StateUpdatesNullClientV1(),
            new Descriptor('pip-services-beacons', 'client', 'null', 'default', '1.0'), new BeaconsNullClientV1(),
            new Descriptor('iqs-services-mqttgateway', 'connector', 'simple', 'default', '1.0'), connector,
            new Descriptor('iqs-services-mqttgateway', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new MqttGatewayDirectClientV1();
        client.setReferences(references);

        fixture = new MqttGatewayClientFixtureV1(client);

        client.open(null, done);
    });
    
    suiteTeardown((done) => {
        client.close(null, done);
    });

    test('Signaling', (done) => {
        fixture.testSignaling(done);
    });

    test('Commanding', (done) => {
        fixture.testCommanding(done);
    });

});
