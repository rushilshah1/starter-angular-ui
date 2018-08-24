import { Injectable } from '@angular/core';
import { JsonConvert, ValueCheckingMode } from 'json2typescript';


@Injectable()
export class CommonService {

    constructor() { }

    deserialize<T>(jsonObj: Object, type: any) {
        const jsonConvert: JsonConvert = new JsonConvert();
        jsonConvert.ignorePrimitiveChecks = false; // don"t allow assigning number to string etc.
        jsonConvert.valueCheckingMode = ValueCheckingMode.ALLOW_NULL; // allow null
        let deserializedObj: T;
        try {
            deserializedObj = jsonConvert.deserialize(jsonObj, type);
            return deserializedObj;
        } catch (e) {
            console.error(<Error>e);
            return e;
        }
    }
    // deserialize a json array object into an array of type T
    deserializeArray<T>(jsonArray: Object[], type: any) {
        const jsonConvert: JsonConvert = new JsonConvert();
        jsonConvert.ignorePrimitiveChecks = false; // don"t allow assigning number to string etc.
        jsonConvert.valueCheckingMode = ValueCheckingMode.ALLOW_NULL; // allow null
        let deserializedArray: Array<T>;
        try {        
            deserializedArray = jsonConvert.deserializeArray(jsonArray, type);
            return deserializedArray;
        } catch (e) {
            console.error(<Error>e);
            throw (e);
        }
    }

}
