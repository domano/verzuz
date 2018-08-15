/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const tournament = $root.tournament = (() => {

    /**
     * Namespace tournament.
     * @exports tournament
     * @namespace
     */
    const tournament = {};

    tournament.Match = (function() {

        /**
         * Properties of a Match.
         * @memberof tournament
         * @interface IMatch
         * @property {number|null} [id] Match id
         * @property {tournament.IPairing|null} [pairing] Match pairing
         * @property {tournament.IResult|null} [result] Match result
         */

        /**
         * Constructs a new Match.
         * @memberof tournament
         * @classdesc Represents a Match.
         * @implements IMatch
         * @constructor
         * @param {tournament.IMatch=} [properties] Properties to set
         */
        function Match(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Match id.
         * @member {number} id
         * @memberof tournament.Match
         * @instance
         */
        Match.prototype.id = 0;

        /**
         * Match pairing.
         * @member {tournament.IPairing|null|undefined} pairing
         * @memberof tournament.Match
         * @instance
         */
        Match.prototype.pairing = null;

        /**
         * Match result.
         * @member {tournament.IResult|null|undefined} result
         * @memberof tournament.Match
         * @instance
         */
        Match.prototype.result = null;

        /**
         * Creates a new Match instance using the specified properties.
         * @function create
         * @memberof tournament.Match
         * @static
         * @param {tournament.IMatch=} [properties] Properties to set
         * @returns {tournament.Match} Match instance
         */
        Match.create = function create(properties) {
            return new Match(properties);
        };

        /**
         * Encodes the specified Match message. Does not implicitly {@link tournament.Match.verify|verify} messages.
         * @function encode
         * @memberof tournament.Match
         * @static
         * @param {tournament.IMatch} message Match message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Match.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.pairing != null && message.hasOwnProperty("pairing"))
                $root.tournament.Pairing.encode(message.pairing, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.result != null && message.hasOwnProperty("result"))
                $root.tournament.Result.encode(message.result, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Match message, length delimited. Does not implicitly {@link tournament.Match.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tournament.Match
         * @static
         * @param {tournament.IMatch} message Match message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Match.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Match message from the specified reader or buffer.
         * @function decode
         * @memberof tournament.Match
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tournament.Match} Match
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Match.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.tournament.Match();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
                    message.pairing = $root.tournament.Pairing.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.result = $root.tournament.Result.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Match message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tournament.Match
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tournament.Match} Match
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Match.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Match message.
         * @function verify
         * @memberof tournament.Match
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Match.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.pairing != null && message.hasOwnProperty("pairing")) {
                let error = $root.tournament.Pairing.verify(message.pairing);
                if (error)
                    return "pairing." + error;
            }
            if (message.result != null && message.hasOwnProperty("result")) {
                let error = $root.tournament.Result.verify(message.result);
                if (error)
                    return "result." + error;
            }
            return null;
        };

        /**
         * Creates a Match message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tournament.Match
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tournament.Match} Match
         */
        Match.fromObject = function fromObject(object) {
            if (object instanceof $root.tournament.Match)
                return object;
            let message = new $root.tournament.Match();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.pairing != null) {
                if (typeof object.pairing !== "object")
                    throw TypeError(".tournament.Match.pairing: object expected");
                message.pairing = $root.tournament.Pairing.fromObject(object.pairing);
            }
            if (object.result != null) {
                if (typeof object.result !== "object")
                    throw TypeError(".tournament.Match.result: object expected");
                message.result = $root.tournament.Result.fromObject(object.result);
            }
            return message;
        };

        /**
         * Creates a plain object from a Match message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tournament.Match
         * @static
         * @param {tournament.Match} message Match
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Match.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = 0;
                object.pairing = null;
                object.result = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.pairing != null && message.hasOwnProperty("pairing"))
                object.pairing = $root.tournament.Pairing.toObject(message.pairing, options);
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = $root.tournament.Result.toObject(message.result, options);
            return object;
        };

        /**
         * Converts this Match to JSON.
         * @function toJSON
         * @memberof tournament.Match
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Match.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Match;
    })();

    tournament.Result = (function() {

        /**
         * Properties of a Result.
         * @memberof tournament
         * @interface IResult
         * @property {tournament.Result.ResultType|null} [resultType] Result resultType
         * @property {Array.<tournament.Result.ISingleResult>|null} [results] Result results
         */

        /**
         * Constructs a new Result.
         * @memberof tournament
         * @classdesc Represents a Result.
         * @implements IResult
         * @constructor
         * @param {tournament.IResult=} [properties] Properties to set
         */
        function Result(properties) {
            this.results = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Result resultType.
         * @member {tournament.Result.ResultType} resultType
         * @memberof tournament.Result
         * @instance
         */
        Result.prototype.resultType = 0;

        /**
         * Result results.
         * @member {Array.<tournament.Result.ISingleResult>} results
         * @memberof tournament.Result
         * @instance
         */
        Result.prototype.results = $util.emptyArray;

        /**
         * Creates a new Result instance using the specified properties.
         * @function create
         * @memberof tournament.Result
         * @static
         * @param {tournament.IResult=} [properties] Properties to set
         * @returns {tournament.Result} Result instance
         */
        Result.create = function create(properties) {
            return new Result(properties);
        };

        /**
         * Encodes the specified Result message. Does not implicitly {@link tournament.Result.verify|verify} messages.
         * @function encode
         * @memberof tournament.Result
         * @static
         * @param {tournament.IResult} message Result message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Result.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.resultType != null && message.hasOwnProperty("resultType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.resultType);
            if (message.results != null && message.results.length)
                for (let i = 0; i < message.results.length; ++i)
                    $root.tournament.Result.SingleResult.encode(message.results[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Result message, length delimited. Does not implicitly {@link tournament.Result.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tournament.Result
         * @static
         * @param {tournament.IResult} message Result message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Result.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Result message from the specified reader or buffer.
         * @function decode
         * @memberof tournament.Result
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tournament.Result} Result
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Result.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.tournament.Result();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.resultType = reader.int32();
                    break;
                case 2:
                    if (!(message.results && message.results.length))
                        message.results = [];
                    message.results.push($root.tournament.Result.SingleResult.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Result message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tournament.Result
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tournament.Result} Result
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Result.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Result message.
         * @function verify
         * @memberof tournament.Result
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Result.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.resultType != null && message.hasOwnProperty("resultType"))
                switch (message.resultType) {
                default:
                    return "resultType: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.results != null && message.hasOwnProperty("results")) {
                if (!Array.isArray(message.results))
                    return "results: array expected";
                for (let i = 0; i < message.results.length; ++i) {
                    let error = $root.tournament.Result.SingleResult.verify(message.results[i]);
                    if (error)
                        return "results." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Result message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tournament.Result
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tournament.Result} Result
         */
        Result.fromObject = function fromObject(object) {
            if (object instanceof $root.tournament.Result)
                return object;
            let message = new $root.tournament.Result();
            switch (object.resultType) {
            case "BINARY":
            case 0:
                message.resultType = 0;
                break;
            case "POINTS":
            case 1:
                message.resultType = 1;
                break;
            }
            if (object.results) {
                if (!Array.isArray(object.results))
                    throw TypeError(".tournament.Result.results: array expected");
                message.results = [];
                for (let i = 0; i < object.results.length; ++i) {
                    if (typeof object.results[i] !== "object")
                        throw TypeError(".tournament.Result.results: object expected");
                    message.results[i] = $root.tournament.Result.SingleResult.fromObject(object.results[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Result message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tournament.Result
         * @static
         * @param {tournament.Result} message Result
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Result.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.results = [];
            if (options.defaults)
                object.resultType = options.enums === String ? "BINARY" : 0;
            if (message.resultType != null && message.hasOwnProperty("resultType"))
                object.resultType = options.enums === String ? $root.tournament.Result.ResultType[message.resultType] : message.resultType;
            if (message.results && message.results.length) {
                object.results = [];
                for (let j = 0; j < message.results.length; ++j)
                    object.results[j] = $root.tournament.Result.SingleResult.toObject(message.results[j], options);
            }
            return object;
        };

        /**
         * Converts this Result to JSON.
         * @function toJSON
         * @memberof tournament.Result
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Result.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * ResultType enum.
         * @name tournament.Result.ResultType
         * @enum {string}
         * @property {number} BINARY=0 BINARY value
         * @property {number} POINTS=1 POINTS value
         */
        Result.ResultType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "BINARY"] = 0;
            values[valuesById[1] = "POINTS"] = 1;
            return values;
        })();

        Result.SingleResult = (function() {

            /**
             * Properties of a SingleResult.
             * @memberof tournament.Result
             * @interface ISingleResult
             * @property {tournament.ITeam|null} [team] SingleResult team
             * @property {number|null} [result] SingleResult result
             */

            /**
             * Constructs a new SingleResult.
             * @memberof tournament.Result
             * @classdesc Represents a SingleResult.
             * @implements ISingleResult
             * @constructor
             * @param {tournament.Result.ISingleResult=} [properties] Properties to set
             */
            function SingleResult(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SingleResult team.
             * @member {tournament.ITeam|null|undefined} team
             * @memberof tournament.Result.SingleResult
             * @instance
             */
            SingleResult.prototype.team = null;

            /**
             * SingleResult result.
             * @member {number} result
             * @memberof tournament.Result.SingleResult
             * @instance
             */
            SingleResult.prototype.result = 0;

            /**
             * Creates a new SingleResult instance using the specified properties.
             * @function create
             * @memberof tournament.Result.SingleResult
             * @static
             * @param {tournament.Result.ISingleResult=} [properties] Properties to set
             * @returns {tournament.Result.SingleResult} SingleResult instance
             */
            SingleResult.create = function create(properties) {
                return new SingleResult(properties);
            };

            /**
             * Encodes the specified SingleResult message. Does not implicitly {@link tournament.Result.SingleResult.verify|verify} messages.
             * @function encode
             * @memberof tournament.Result.SingleResult
             * @static
             * @param {tournament.Result.ISingleResult} message SingleResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SingleResult.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.team != null && message.hasOwnProperty("team"))
                    $root.tournament.Team.encode(message.team, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.result != null && message.hasOwnProperty("result"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.result);
                return writer;
            };

            /**
             * Encodes the specified SingleResult message, length delimited. Does not implicitly {@link tournament.Result.SingleResult.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tournament.Result.SingleResult
             * @static
             * @param {tournament.Result.ISingleResult} message SingleResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SingleResult.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SingleResult message from the specified reader or buffer.
             * @function decode
             * @memberof tournament.Result.SingleResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tournament.Result.SingleResult} SingleResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SingleResult.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.tournament.Result.SingleResult();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.team = $root.tournament.Team.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.result = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SingleResult message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tournament.Result.SingleResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tournament.Result.SingleResult} SingleResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SingleResult.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SingleResult message.
             * @function verify
             * @memberof tournament.Result.SingleResult
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SingleResult.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.team != null && message.hasOwnProperty("team")) {
                    let error = $root.tournament.Team.verify(message.team);
                    if (error)
                        return "team." + error;
                }
                if (message.result != null && message.hasOwnProperty("result"))
                    if (!$util.isInteger(message.result))
                        return "result: integer expected";
                return null;
            };

            /**
             * Creates a SingleResult message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tournament.Result.SingleResult
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tournament.Result.SingleResult} SingleResult
             */
            SingleResult.fromObject = function fromObject(object) {
                if (object instanceof $root.tournament.Result.SingleResult)
                    return object;
                let message = new $root.tournament.Result.SingleResult();
                if (object.team != null) {
                    if (typeof object.team !== "object")
                        throw TypeError(".tournament.Result.SingleResult.team: object expected");
                    message.team = $root.tournament.Team.fromObject(object.team);
                }
                if (object.result != null)
                    message.result = object.result | 0;
                return message;
            };

            /**
             * Creates a plain object from a SingleResult message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tournament.Result.SingleResult
             * @static
             * @param {tournament.Result.SingleResult} message SingleResult
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SingleResult.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.team = null;
                    object.result = 0;
                }
                if (message.team != null && message.hasOwnProperty("team"))
                    object.team = $root.tournament.Team.toObject(message.team, options);
                if (message.result != null && message.hasOwnProperty("result"))
                    object.result = message.result;
                return object;
            };

            /**
             * Converts this SingleResult to JSON.
             * @function toJSON
             * @memberof tournament.Result.SingleResult
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SingleResult.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return SingleResult;
        })();

        return Result;
    })();

    tournament.Pairing = (function() {

        /**
         * Properties of a Pairing.
         * @memberof tournament
         * @interface IPairing
         * @property {number|null} [id] Pairing id
         * @property {Array.<tournament.ITeam>|null} [teams] Pairing teams
         */

        /**
         * Constructs a new Pairing.
         * @memberof tournament
         * @classdesc Represents a Pairing.
         * @implements IPairing
         * @constructor
         * @param {tournament.IPairing=} [properties] Properties to set
         */
        function Pairing(properties) {
            this.teams = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Pairing id.
         * @member {number} id
         * @memberof tournament.Pairing
         * @instance
         */
        Pairing.prototype.id = 0;

        /**
         * Pairing teams.
         * @member {Array.<tournament.ITeam>} teams
         * @memberof tournament.Pairing
         * @instance
         */
        Pairing.prototype.teams = $util.emptyArray;

        /**
         * Creates a new Pairing instance using the specified properties.
         * @function create
         * @memberof tournament.Pairing
         * @static
         * @param {tournament.IPairing=} [properties] Properties to set
         * @returns {tournament.Pairing} Pairing instance
         */
        Pairing.create = function create(properties) {
            return new Pairing(properties);
        };

        /**
         * Encodes the specified Pairing message. Does not implicitly {@link tournament.Pairing.verify|verify} messages.
         * @function encode
         * @memberof tournament.Pairing
         * @static
         * @param {tournament.IPairing} message Pairing message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Pairing.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.teams != null && message.teams.length)
                for (let i = 0; i < message.teams.length; ++i)
                    $root.tournament.Team.encode(message.teams[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Pairing message, length delimited. Does not implicitly {@link tournament.Pairing.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tournament.Pairing
         * @static
         * @param {tournament.IPairing} message Pairing message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Pairing.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Pairing message from the specified reader or buffer.
         * @function decode
         * @memberof tournament.Pairing
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tournament.Pairing} Pairing
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Pairing.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.tournament.Pairing();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
                    if (!(message.teams && message.teams.length))
                        message.teams = [];
                    message.teams.push($root.tournament.Team.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Pairing message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tournament.Pairing
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tournament.Pairing} Pairing
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Pairing.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Pairing message.
         * @function verify
         * @memberof tournament.Pairing
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Pairing.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.teams != null && message.hasOwnProperty("teams")) {
                if (!Array.isArray(message.teams))
                    return "teams: array expected";
                for (let i = 0; i < message.teams.length; ++i) {
                    let error = $root.tournament.Team.verify(message.teams[i]);
                    if (error)
                        return "teams." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Pairing message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tournament.Pairing
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tournament.Pairing} Pairing
         */
        Pairing.fromObject = function fromObject(object) {
            if (object instanceof $root.tournament.Pairing)
                return object;
            let message = new $root.tournament.Pairing();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.teams) {
                if (!Array.isArray(object.teams))
                    throw TypeError(".tournament.Pairing.teams: array expected");
                message.teams = [];
                for (let i = 0; i < object.teams.length; ++i) {
                    if (typeof object.teams[i] !== "object")
                        throw TypeError(".tournament.Pairing.teams: object expected");
                    message.teams[i] = $root.tournament.Team.fromObject(object.teams[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Pairing message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tournament.Pairing
         * @static
         * @param {tournament.Pairing} message Pairing
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Pairing.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.teams = [];
            if (options.defaults)
                object.id = 0;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.teams && message.teams.length) {
                object.teams = [];
                for (let j = 0; j < message.teams.length; ++j)
                    object.teams[j] = $root.tournament.Team.toObject(message.teams[j], options);
            }
            return object;
        };

        /**
         * Converts this Pairing to JSON.
         * @function toJSON
         * @memberof tournament.Pairing
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Pairing.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Pairing;
    })();

    tournament.Team = (function() {

        /**
         * Properties of a Team.
         * @memberof tournament
         * @interface ITeam
         * @property {Array.<tournament.IParticipant>|null} [participants] Team participants
         */

        /**
         * Constructs a new Team.
         * @memberof tournament
         * @classdesc Represents a Team.
         * @implements ITeam
         * @constructor
         * @param {tournament.ITeam=} [properties] Properties to set
         */
        function Team(properties) {
            this.participants = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Team participants.
         * @member {Array.<tournament.IParticipant>} participants
         * @memberof tournament.Team
         * @instance
         */
        Team.prototype.participants = $util.emptyArray;

        /**
         * Creates a new Team instance using the specified properties.
         * @function create
         * @memberof tournament.Team
         * @static
         * @param {tournament.ITeam=} [properties] Properties to set
         * @returns {tournament.Team} Team instance
         */
        Team.create = function create(properties) {
            return new Team(properties);
        };

        /**
         * Encodes the specified Team message. Does not implicitly {@link tournament.Team.verify|verify} messages.
         * @function encode
         * @memberof tournament.Team
         * @static
         * @param {tournament.ITeam} message Team message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Team.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.participants != null && message.participants.length)
                for (let i = 0; i < message.participants.length; ++i)
                    $root.tournament.Participant.encode(message.participants[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Team message, length delimited. Does not implicitly {@link tournament.Team.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tournament.Team
         * @static
         * @param {tournament.ITeam} message Team message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Team.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Team message from the specified reader or buffer.
         * @function decode
         * @memberof tournament.Team
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tournament.Team} Team
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Team.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.tournament.Team();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.participants && message.participants.length))
                        message.participants = [];
                    message.participants.push($root.tournament.Participant.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Team message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tournament.Team
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tournament.Team} Team
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Team.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Team message.
         * @function verify
         * @memberof tournament.Team
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Team.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.participants != null && message.hasOwnProperty("participants")) {
                if (!Array.isArray(message.participants))
                    return "participants: array expected";
                for (let i = 0; i < message.participants.length; ++i) {
                    let error = $root.tournament.Participant.verify(message.participants[i]);
                    if (error)
                        return "participants." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Team message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tournament.Team
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tournament.Team} Team
         */
        Team.fromObject = function fromObject(object) {
            if (object instanceof $root.tournament.Team)
                return object;
            let message = new $root.tournament.Team();
            if (object.participants) {
                if (!Array.isArray(object.participants))
                    throw TypeError(".tournament.Team.participants: array expected");
                message.participants = [];
                for (let i = 0; i < object.participants.length; ++i) {
                    if (typeof object.participants[i] !== "object")
                        throw TypeError(".tournament.Team.participants: object expected");
                    message.participants[i] = $root.tournament.Participant.fromObject(object.participants[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Team message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tournament.Team
         * @static
         * @param {tournament.Team} message Team
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Team.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.participants = [];
            if (message.participants && message.participants.length) {
                object.participants = [];
                for (let j = 0; j < message.participants.length; ++j)
                    object.participants[j] = $root.tournament.Participant.toObject(message.participants[j], options);
            }
            return object;
        };

        /**
         * Converts this Team to JSON.
         * @function toJSON
         * @memberof tournament.Team
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Team.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Team;
    })();

    tournament.Participant = (function() {

        /**
         * Properties of a Participant.
         * @memberof tournament
         * @interface IParticipant
         * @property {number|null} [id] Participant id
         * @property {string|null} [name] Participant name
         */

        /**
         * Constructs a new Participant.
         * @memberof tournament
         * @classdesc Represents a Participant.
         * @implements IParticipant
         * @constructor
         * @param {tournament.IParticipant=} [properties] Properties to set
         */
        function Participant(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Participant id.
         * @member {number} id
         * @memberof tournament.Participant
         * @instance
         */
        Participant.prototype.id = 0;

        /**
         * Participant name.
         * @member {string} name
         * @memberof tournament.Participant
         * @instance
         */
        Participant.prototype.name = "";

        /**
         * Creates a new Participant instance using the specified properties.
         * @function create
         * @memberof tournament.Participant
         * @static
         * @param {tournament.IParticipant=} [properties] Properties to set
         * @returns {tournament.Participant} Participant instance
         */
        Participant.create = function create(properties) {
            return new Participant(properties);
        };

        /**
         * Encodes the specified Participant message. Does not implicitly {@link tournament.Participant.verify|verify} messages.
         * @function encode
         * @memberof tournament.Participant
         * @static
         * @param {tournament.IParticipant} message Participant message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Participant.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified Participant message, length delimited. Does not implicitly {@link tournament.Participant.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tournament.Participant
         * @static
         * @param {tournament.IParticipant} message Participant message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Participant.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Participant message from the specified reader or buffer.
         * @function decode
         * @memberof tournament.Participant
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tournament.Participant} Participant
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Participant.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.tournament.Participant();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Participant message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tournament.Participant
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tournament.Participant} Participant
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Participant.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Participant message.
         * @function verify
         * @memberof tournament.Participant
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Participant.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates a Participant message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tournament.Participant
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tournament.Participant} Participant
         */
        Participant.fromObject = function fromObject(object) {
            if (object instanceof $root.tournament.Participant)
                return object;
            let message = new $root.tournament.Participant();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a Participant message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tournament.Participant
         * @static
         * @param {tournament.Participant} message Participant
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Participant.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = 0;
                object.name = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this Participant to JSON.
         * @function toJSON
         * @memberof tournament.Participant
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Participant.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Participant;
    })();

    tournament.Round = (function() {

        /**
         * Properties of a Round.
         * @memberof tournament
         * @interface IRound
         * @property {number|null} [id] Round id
         * @property {Array.<tournament.IMatch>|null} [matches] Round matches
         */

        /**
         * Constructs a new Round.
         * @memberof tournament
         * @classdesc Represents a Round.
         * @implements IRound
         * @constructor
         * @param {tournament.IRound=} [properties] Properties to set
         */
        function Round(properties) {
            this.matches = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Round id.
         * @member {number} id
         * @memberof tournament.Round
         * @instance
         */
        Round.prototype.id = 0;

        /**
         * Round matches.
         * @member {Array.<tournament.IMatch>} matches
         * @memberof tournament.Round
         * @instance
         */
        Round.prototype.matches = $util.emptyArray;

        /**
         * Creates a new Round instance using the specified properties.
         * @function create
         * @memberof tournament.Round
         * @static
         * @param {tournament.IRound=} [properties] Properties to set
         * @returns {tournament.Round} Round instance
         */
        Round.create = function create(properties) {
            return new Round(properties);
        };

        /**
         * Encodes the specified Round message. Does not implicitly {@link tournament.Round.verify|verify} messages.
         * @function encode
         * @memberof tournament.Round
         * @static
         * @param {tournament.IRound} message Round message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Round.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.matches != null && message.matches.length)
                for (let i = 0; i < message.matches.length; ++i)
                    $root.tournament.Match.encode(message.matches[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Round message, length delimited. Does not implicitly {@link tournament.Round.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tournament.Round
         * @static
         * @param {tournament.IRound} message Round message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Round.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Round message from the specified reader or buffer.
         * @function decode
         * @memberof tournament.Round
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tournament.Round} Round
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Round.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.tournament.Round();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
                    if (!(message.matches && message.matches.length))
                        message.matches = [];
                    message.matches.push($root.tournament.Match.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Round message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tournament.Round
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tournament.Round} Round
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Round.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Round message.
         * @function verify
         * @memberof tournament.Round
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Round.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.matches != null && message.hasOwnProperty("matches")) {
                if (!Array.isArray(message.matches))
                    return "matches: array expected";
                for (let i = 0; i < message.matches.length; ++i) {
                    let error = $root.tournament.Match.verify(message.matches[i]);
                    if (error)
                        return "matches." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Round message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tournament.Round
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tournament.Round} Round
         */
        Round.fromObject = function fromObject(object) {
            if (object instanceof $root.tournament.Round)
                return object;
            let message = new $root.tournament.Round();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.matches) {
                if (!Array.isArray(object.matches))
                    throw TypeError(".tournament.Round.matches: array expected");
                message.matches = [];
                for (let i = 0; i < object.matches.length; ++i) {
                    if (typeof object.matches[i] !== "object")
                        throw TypeError(".tournament.Round.matches: object expected");
                    message.matches[i] = $root.tournament.Match.fromObject(object.matches[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Round message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tournament.Round
         * @static
         * @param {tournament.Round} message Round
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Round.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.matches = [];
            if (options.defaults)
                object.id = 0;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.matches && message.matches.length) {
                object.matches = [];
                for (let j = 0; j < message.matches.length; ++j)
                    object.matches[j] = $root.tournament.Match.toObject(message.matches[j], options);
            }
            return object;
        };

        /**
         * Converts this Round to JSON.
         * @function toJSON
         * @memberof tournament.Round
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Round.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Round;
    })();

    tournament.Tournament = (function() {

        /**
         * Properties of a Tournament.
         * @memberof tournament
         * @interface ITournament
         * @property {number|null} [id] Tournament id
         * @property {Array.<tournament.IRound>|null} [rounds] Tournament rounds
         * @property {Array.<tournament.IParticipant>|null} [participants] Tournament participants
         * @property {Array.<tournament.IParticipant>|null} [totalParticipants] Tournament totalParticipants
         */

        /**
         * Constructs a new Tournament.
         * @memberof tournament
         * @classdesc Represents a Tournament.
         * @implements ITournament
         * @constructor
         * @param {tournament.ITournament=} [properties] Properties to set
         */
        function Tournament(properties) {
            this.rounds = [];
            this.participants = [];
            this.totalParticipants = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Tournament id.
         * @member {number} id
         * @memberof tournament.Tournament
         * @instance
         */
        Tournament.prototype.id = 0;

        /**
         * Tournament rounds.
         * @member {Array.<tournament.IRound>} rounds
         * @memberof tournament.Tournament
         * @instance
         */
        Tournament.prototype.rounds = $util.emptyArray;

        /**
         * Tournament participants.
         * @member {Array.<tournament.IParticipant>} participants
         * @memberof tournament.Tournament
         * @instance
         */
        Tournament.prototype.participants = $util.emptyArray;

        /**
         * Tournament totalParticipants.
         * @member {Array.<tournament.IParticipant>} totalParticipants
         * @memberof tournament.Tournament
         * @instance
         */
        Tournament.prototype.totalParticipants = $util.emptyArray;

        /**
         * Creates a new Tournament instance using the specified properties.
         * @function create
         * @memberof tournament.Tournament
         * @static
         * @param {tournament.ITournament=} [properties] Properties to set
         * @returns {tournament.Tournament} Tournament instance
         */
        Tournament.create = function create(properties) {
            return new Tournament(properties);
        };

        /**
         * Encodes the specified Tournament message. Does not implicitly {@link tournament.Tournament.verify|verify} messages.
         * @function encode
         * @memberof tournament.Tournament
         * @static
         * @param {tournament.ITournament} message Tournament message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Tournament.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.rounds != null && message.rounds.length)
                for (let i = 0; i < message.rounds.length; ++i)
                    $root.tournament.Round.encode(message.rounds[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.participants != null && message.participants.length)
                for (let i = 0; i < message.participants.length; ++i)
                    $root.tournament.Participant.encode(message.participants[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.totalParticipants != null && message.totalParticipants.length)
                for (let i = 0; i < message.totalParticipants.length; ++i)
                    $root.tournament.Participant.encode(message.totalParticipants[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Tournament message, length delimited. Does not implicitly {@link tournament.Tournament.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tournament.Tournament
         * @static
         * @param {tournament.ITournament} message Tournament message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Tournament.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Tournament message from the specified reader or buffer.
         * @function decode
         * @memberof tournament.Tournament
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tournament.Tournament} Tournament
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Tournament.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.tournament.Tournament();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
                    if (!(message.rounds && message.rounds.length))
                        message.rounds = [];
                    message.rounds.push($root.tournament.Round.decode(reader, reader.uint32()));
                    break;
                case 3:
                    if (!(message.participants && message.participants.length))
                        message.participants = [];
                    message.participants.push($root.tournament.Participant.decode(reader, reader.uint32()));
                    break;
                case 4:
                    if (!(message.totalParticipants && message.totalParticipants.length))
                        message.totalParticipants = [];
                    message.totalParticipants.push($root.tournament.Participant.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Tournament message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tournament.Tournament
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tournament.Tournament} Tournament
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Tournament.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Tournament message.
         * @function verify
         * @memberof tournament.Tournament
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Tournament.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.rounds != null && message.hasOwnProperty("rounds")) {
                if (!Array.isArray(message.rounds))
                    return "rounds: array expected";
                for (let i = 0; i < message.rounds.length; ++i) {
                    let error = $root.tournament.Round.verify(message.rounds[i]);
                    if (error)
                        return "rounds." + error;
                }
            }
            if (message.participants != null && message.hasOwnProperty("participants")) {
                if (!Array.isArray(message.participants))
                    return "participants: array expected";
                for (let i = 0; i < message.participants.length; ++i) {
                    let error = $root.tournament.Participant.verify(message.participants[i]);
                    if (error)
                        return "participants." + error;
                }
            }
            if (message.totalParticipants != null && message.hasOwnProperty("totalParticipants")) {
                if (!Array.isArray(message.totalParticipants))
                    return "totalParticipants: array expected";
                for (let i = 0; i < message.totalParticipants.length; ++i) {
                    let error = $root.tournament.Participant.verify(message.totalParticipants[i]);
                    if (error)
                        return "totalParticipants." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Tournament message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tournament.Tournament
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tournament.Tournament} Tournament
         */
        Tournament.fromObject = function fromObject(object) {
            if (object instanceof $root.tournament.Tournament)
                return object;
            let message = new $root.tournament.Tournament();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.rounds) {
                if (!Array.isArray(object.rounds))
                    throw TypeError(".tournament.Tournament.rounds: array expected");
                message.rounds = [];
                for (let i = 0; i < object.rounds.length; ++i) {
                    if (typeof object.rounds[i] !== "object")
                        throw TypeError(".tournament.Tournament.rounds: object expected");
                    message.rounds[i] = $root.tournament.Round.fromObject(object.rounds[i]);
                }
            }
            if (object.participants) {
                if (!Array.isArray(object.participants))
                    throw TypeError(".tournament.Tournament.participants: array expected");
                message.participants = [];
                for (let i = 0; i < object.participants.length; ++i) {
                    if (typeof object.participants[i] !== "object")
                        throw TypeError(".tournament.Tournament.participants: object expected");
                    message.participants[i] = $root.tournament.Participant.fromObject(object.participants[i]);
                }
            }
            if (object.totalParticipants) {
                if (!Array.isArray(object.totalParticipants))
                    throw TypeError(".tournament.Tournament.totalParticipants: array expected");
                message.totalParticipants = [];
                for (let i = 0; i < object.totalParticipants.length; ++i) {
                    if (typeof object.totalParticipants[i] !== "object")
                        throw TypeError(".tournament.Tournament.totalParticipants: object expected");
                    message.totalParticipants[i] = $root.tournament.Participant.fromObject(object.totalParticipants[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Tournament message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tournament.Tournament
         * @static
         * @param {tournament.Tournament} message Tournament
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Tournament.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.rounds = [];
                object.participants = [];
                object.totalParticipants = [];
            }
            if (options.defaults)
                object.id = 0;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.rounds && message.rounds.length) {
                object.rounds = [];
                for (let j = 0; j < message.rounds.length; ++j)
                    object.rounds[j] = $root.tournament.Round.toObject(message.rounds[j], options);
            }
            if (message.participants && message.participants.length) {
                object.participants = [];
                for (let j = 0; j < message.participants.length; ++j)
                    object.participants[j] = $root.tournament.Participant.toObject(message.participants[j], options);
            }
            if (message.totalParticipants && message.totalParticipants.length) {
                object.totalParticipants = [];
                for (let j = 0; j < message.totalParticipants.length; ++j)
                    object.totalParticipants[j] = $root.tournament.Participant.toObject(message.totalParticipants[j], options);
            }
            return object;
        };

        /**
         * Converts this Tournament to JSON.
         * @function toJSON
         * @memberof tournament.Tournament
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Tournament.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Tournament;
    })();

    tournament.TournamentService = (function() {

        /**
         * Constructs a new TournamentService service.
         * @memberof tournament
         * @classdesc Represents a TournamentService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function TournamentService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (TournamentService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = TournamentService;

        /**
         * Creates new TournamentService service using the specified rpc implementation.
         * @function create
         * @memberof tournament.TournamentService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {TournamentService} RPC service. Useful where requests and/or responses are streamed.
         */
        TournamentService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link tournament.TournamentService#getTournament}.
         * @memberof tournament.TournamentService
         * @typedef GetTournamentCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {tournament.Tournament} [response] Tournament
         */

        /**
         * Calls GetTournament.
         * @function getTournament
         * @memberof tournament.TournamentService
         * @instance
         * @param {tournament.ITournamentRequest} request TournamentRequest message or plain object
         * @param {tournament.TournamentService.GetTournamentCallback} callback Node-style callback called with the error, if any, and Tournament
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(TournamentService.prototype.getTournament = function getTournament(request, callback) {
            return this.rpcCall(getTournament, $root.tournament.TournamentRequest, $root.tournament.Tournament, request, callback);
        }, "name", { value: "GetTournament" });

        /**
         * Calls GetTournament.
         * @function getTournament
         * @memberof tournament.TournamentService
         * @instance
         * @param {tournament.ITournamentRequest} request TournamentRequest message or plain object
         * @returns {Promise<tournament.Tournament>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link tournament.TournamentService#addParticipant}.
         * @memberof tournament.TournamentService
         * @typedef AddParticipantCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {tournament.AddParticipantResponse} [response] AddParticipantResponse
         */

        /**
         * Calls AddParticipant.
         * @function addParticipant
         * @memberof tournament.TournamentService
         * @instance
         * @param {tournament.IParticipant} request Participant message or plain object
         * @param {tournament.TournamentService.AddParticipantCallback} callback Node-style callback called with the error, if any, and AddParticipantResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(TournamentService.prototype.addParticipant = function addParticipant(request, callback) {
            return this.rpcCall(addParticipant, $root.tournament.Participant, $root.tournament.AddParticipantResponse, request, callback);
        }, "name", { value: "AddParticipant" });

        /**
         * Calls AddParticipant.
         * @function addParticipant
         * @memberof tournament.TournamentService
         * @instance
         * @param {tournament.IParticipant} request Participant message or plain object
         * @returns {Promise<tournament.AddParticipantResponse>} Promise
         * @variation 2
         */

        return TournamentService;
    })();

    tournament.TournamentRequest = (function() {

        /**
         * Properties of a TournamentRequest.
         * @memberof tournament
         * @interface ITournamentRequest
         * @property {number|null} [id] TournamentRequest id
         */

        /**
         * Constructs a new TournamentRequest.
         * @memberof tournament
         * @classdesc Represents a TournamentRequest.
         * @implements ITournamentRequest
         * @constructor
         * @param {tournament.ITournamentRequest=} [properties] Properties to set
         */
        function TournamentRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TournamentRequest id.
         * @member {number} id
         * @memberof tournament.TournamentRequest
         * @instance
         */
        TournamentRequest.prototype.id = 0;

        /**
         * Creates a new TournamentRequest instance using the specified properties.
         * @function create
         * @memberof tournament.TournamentRequest
         * @static
         * @param {tournament.ITournamentRequest=} [properties] Properties to set
         * @returns {tournament.TournamentRequest} TournamentRequest instance
         */
        TournamentRequest.create = function create(properties) {
            return new TournamentRequest(properties);
        };

        /**
         * Encodes the specified TournamentRequest message. Does not implicitly {@link tournament.TournamentRequest.verify|verify} messages.
         * @function encode
         * @memberof tournament.TournamentRequest
         * @static
         * @param {tournament.ITournamentRequest} message TournamentRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TournamentRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            return writer;
        };

        /**
         * Encodes the specified TournamentRequest message, length delimited. Does not implicitly {@link tournament.TournamentRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tournament.TournamentRequest
         * @static
         * @param {tournament.ITournamentRequest} message TournamentRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TournamentRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TournamentRequest message from the specified reader or buffer.
         * @function decode
         * @memberof tournament.TournamentRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tournament.TournamentRequest} TournamentRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TournamentRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.tournament.TournamentRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TournamentRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tournament.TournamentRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tournament.TournamentRequest} TournamentRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TournamentRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TournamentRequest message.
         * @function verify
         * @memberof tournament.TournamentRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TournamentRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            return null;
        };

        /**
         * Creates a TournamentRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tournament.TournamentRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tournament.TournamentRequest} TournamentRequest
         */
        TournamentRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.tournament.TournamentRequest)
                return object;
            let message = new $root.tournament.TournamentRequest();
            if (object.id != null)
                message.id = object.id | 0;
            return message;
        };

        /**
         * Creates a plain object from a TournamentRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tournament.TournamentRequest
         * @static
         * @param {tournament.TournamentRequest} message TournamentRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TournamentRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.id = 0;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this TournamentRequest to JSON.
         * @function toJSON
         * @memberof tournament.TournamentRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TournamentRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TournamentRequest;
    })();

    tournament.AddParticipantRequest = (function() {

        /**
         * Properties of an AddParticipantRequest.
         * @memberof tournament
         * @interface IAddParticipantRequest
         * @property {number|null} [tournamentId] AddParticipantRequest tournamentId
         * @property {tournament.IParticipant|null} [participant] AddParticipantRequest participant
         */

        /**
         * Constructs a new AddParticipantRequest.
         * @memberof tournament
         * @classdesc Represents an AddParticipantRequest.
         * @implements IAddParticipantRequest
         * @constructor
         * @param {tournament.IAddParticipantRequest=} [properties] Properties to set
         */
        function AddParticipantRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AddParticipantRequest tournamentId.
         * @member {number} tournamentId
         * @memberof tournament.AddParticipantRequest
         * @instance
         */
        AddParticipantRequest.prototype.tournamentId = 0;

        /**
         * AddParticipantRequest participant.
         * @member {tournament.IParticipant|null|undefined} participant
         * @memberof tournament.AddParticipantRequest
         * @instance
         */
        AddParticipantRequest.prototype.participant = null;

        /**
         * Creates a new AddParticipantRequest instance using the specified properties.
         * @function create
         * @memberof tournament.AddParticipantRequest
         * @static
         * @param {tournament.IAddParticipantRequest=} [properties] Properties to set
         * @returns {tournament.AddParticipantRequest} AddParticipantRequest instance
         */
        AddParticipantRequest.create = function create(properties) {
            return new AddParticipantRequest(properties);
        };

        /**
         * Encodes the specified AddParticipantRequest message. Does not implicitly {@link tournament.AddParticipantRequest.verify|verify} messages.
         * @function encode
         * @memberof tournament.AddParticipantRequest
         * @static
         * @param {tournament.IAddParticipantRequest} message AddParticipantRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddParticipantRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tournamentId != null && message.hasOwnProperty("tournamentId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.tournamentId);
            if (message.participant != null && message.hasOwnProperty("participant"))
                $root.tournament.Participant.encode(message.participant, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AddParticipantRequest message, length delimited. Does not implicitly {@link tournament.AddParticipantRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tournament.AddParticipantRequest
         * @static
         * @param {tournament.IAddParticipantRequest} message AddParticipantRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddParticipantRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AddParticipantRequest message from the specified reader or buffer.
         * @function decode
         * @memberof tournament.AddParticipantRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tournament.AddParticipantRequest} AddParticipantRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddParticipantRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.tournament.AddParticipantRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.tournamentId = reader.int32();
                    break;
                case 2:
                    message.participant = $root.tournament.Participant.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AddParticipantRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tournament.AddParticipantRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tournament.AddParticipantRequest} AddParticipantRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddParticipantRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AddParticipantRequest message.
         * @function verify
         * @memberof tournament.AddParticipantRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AddParticipantRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tournamentId != null && message.hasOwnProperty("tournamentId"))
                if (!$util.isInteger(message.tournamentId))
                    return "tournamentId: integer expected";
            if (message.participant != null && message.hasOwnProperty("participant")) {
                let error = $root.tournament.Participant.verify(message.participant);
                if (error)
                    return "participant." + error;
            }
            return null;
        };

        /**
         * Creates an AddParticipantRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tournament.AddParticipantRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tournament.AddParticipantRequest} AddParticipantRequest
         */
        AddParticipantRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.tournament.AddParticipantRequest)
                return object;
            let message = new $root.tournament.AddParticipantRequest();
            if (object.tournamentId != null)
                message.tournamentId = object.tournamentId | 0;
            if (object.participant != null) {
                if (typeof object.participant !== "object")
                    throw TypeError(".tournament.AddParticipantRequest.participant: object expected");
                message.participant = $root.tournament.Participant.fromObject(object.participant);
            }
            return message;
        };

        /**
         * Creates a plain object from an AddParticipantRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tournament.AddParticipantRequest
         * @static
         * @param {tournament.AddParticipantRequest} message AddParticipantRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AddParticipantRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.tournamentId = 0;
                object.participant = null;
            }
            if (message.tournamentId != null && message.hasOwnProperty("tournamentId"))
                object.tournamentId = message.tournamentId;
            if (message.participant != null && message.hasOwnProperty("participant"))
                object.participant = $root.tournament.Participant.toObject(message.participant, options);
            return object;
        };

        /**
         * Converts this AddParticipantRequest to JSON.
         * @function toJSON
         * @memberof tournament.AddParticipantRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AddParticipantRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AddParticipantRequest;
    })();

    tournament.AddParticipantResponse = (function() {

        /**
         * Properties of an AddParticipantResponse.
         * @memberof tournament
         * @interface IAddParticipantResponse
         */

        /**
         * Constructs a new AddParticipantResponse.
         * @memberof tournament
         * @classdesc Represents an AddParticipantResponse.
         * @implements IAddParticipantResponse
         * @constructor
         * @param {tournament.IAddParticipantResponse=} [properties] Properties to set
         */
        function AddParticipantResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new AddParticipantResponse instance using the specified properties.
         * @function create
         * @memberof tournament.AddParticipantResponse
         * @static
         * @param {tournament.IAddParticipantResponse=} [properties] Properties to set
         * @returns {tournament.AddParticipantResponse} AddParticipantResponse instance
         */
        AddParticipantResponse.create = function create(properties) {
            return new AddParticipantResponse(properties);
        };

        /**
         * Encodes the specified AddParticipantResponse message. Does not implicitly {@link tournament.AddParticipantResponse.verify|verify} messages.
         * @function encode
         * @memberof tournament.AddParticipantResponse
         * @static
         * @param {tournament.IAddParticipantResponse} message AddParticipantResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddParticipantResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified AddParticipantResponse message, length delimited. Does not implicitly {@link tournament.AddParticipantResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tournament.AddParticipantResponse
         * @static
         * @param {tournament.IAddParticipantResponse} message AddParticipantResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddParticipantResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AddParticipantResponse message from the specified reader or buffer.
         * @function decode
         * @memberof tournament.AddParticipantResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tournament.AddParticipantResponse} AddParticipantResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddParticipantResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.tournament.AddParticipantResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AddParticipantResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tournament.AddParticipantResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tournament.AddParticipantResponse} AddParticipantResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddParticipantResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AddParticipantResponse message.
         * @function verify
         * @memberof tournament.AddParticipantResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AddParticipantResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an AddParticipantResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tournament.AddParticipantResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tournament.AddParticipantResponse} AddParticipantResponse
         */
        AddParticipantResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.tournament.AddParticipantResponse)
                return object;
            return new $root.tournament.AddParticipantResponse();
        };

        /**
         * Creates a plain object from an AddParticipantResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tournament.AddParticipantResponse
         * @static
         * @param {tournament.AddParticipantResponse} message AddParticipantResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AddParticipantResponse.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this AddParticipantResponse to JSON.
         * @function toJSON
         * @memberof tournament.AddParticipantResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AddParticipantResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AddParticipantResponse;
    })();

    return tournament;
})();

export { $root as default };
