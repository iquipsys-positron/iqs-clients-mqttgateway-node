let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { IMqttGatewayClientV1 } from '../../src/version1/IMqttGatewayClientV1';

export class MqttGatewayClientFixtureV1 {
    private _client: IMqttGatewayClientV1;
    
    constructor(client: IMqttGatewayClientV1) {
        this._client = client;
    }
        
    public testSignaling(done) {

        async.series([
        // Send a signal to a single device
            (callback) => {
                this._client.sendSignal(
                    null,
                    '1', '123', 2, null,
                    (err, result) => {
                        assert.isNull(err);

                        assert.isFalse(result);

                        callback();
                    }
                );
            },
        // Broadcast a signal to all organization devices
            (callback) => {
                this._client.broadcastSignal(
                    null,
                    '1', 2, null,
                    (err, result) => {
                        assert.isNull(err);

                        assert.isFalse(result);

                        callback();
                    }
                );
            }
        ], done);
    }

    public testCommanding(done) {

        async.series([
        // Send a command to a single device
            (callback) => {
                this._client.sendCommands(
                    null,
                    '1', '123', [{ id: 1, val: 2 }], null,
                    (err, result) => {
                        assert.isNull(err);

                        assert.isFalse(result);

                        callback();
                    }
                );
            },
        // Broadcast a command to all organization devices
            (callback) => {
                this._client.broadcastCommands(
                    null,
                    '1', [{ id: 1, val: 2 }], null,
                    (err, result) => {
                        assert.isNull(err);

                        assert.isFalse(result);

                        callback();
                    }
                );
            }
        ], done);
    }

}
