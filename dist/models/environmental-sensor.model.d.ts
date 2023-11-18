/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { BaseSensorDocument, SensorData } from './sensor.model';
export declare class EnvironmentalSensorDocument extends BaseSensorDocument {
    data: EnvironmentalSensorData[];
}
export interface EnvironmentalSensorData extends SensorData {
    noise_level: number;
    air_quality: string;
}
export declare const EnvironmentalSensorModel: import("mongoose").Schema<EnvironmentalSensorDocument, import("mongoose").Model<EnvironmentalSensorDocument, any, any, any, import("mongoose").Document<unknown, any, EnvironmentalSensorDocument> & EnvironmentalSensorDocument & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, EnvironmentalSensorDocument, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<EnvironmentalSensorDocument>> & import("mongoose").FlatRecord<EnvironmentalSensorDocument> & {
    _id: import("mongoose").Types.ObjectId;
}>;
