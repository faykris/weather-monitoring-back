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
/// <reference types="mongoose/types/inferschematype" />
import { Document } from 'mongoose';
export interface SensorData {
    timestamp: string;
}
export declare class BaseSensorDocument extends Document {
    sensor_id: number;
    sensor_name: string;
    data: SensorData[];
}
export declare const BaseSensorModel: import("mongoose").Schema<BaseSensorDocument, import("mongoose").Model<BaseSensorDocument, any, any, any, Document<unknown, any, BaseSensorDocument> & BaseSensorDocument & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, BaseSensorDocument, Document<unknown, {}, import("mongoose").FlatRecord<BaseSensorDocument>> & import("mongoose").FlatRecord<BaseSensorDocument> & {
    _id: import("mongoose").Types.ObjectId;
}>;
