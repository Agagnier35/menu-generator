/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { deserialize, deserializeArray, plainToClass, serialize } from 'class-transformer';

export class JsonSerializer {
    mapToObject<T>(r: string, type?: new () => T): T {
        return type ? this.deserializeToObject(r, type) : r === 'true' || r === 'false' ? JSON.parse(r) : r;
    }

    mapToArray<T>(r: string, type?: new () => T): T {
        return type ? this.deserializeToArray(r, type) : JSON.parse(r);
    }

    deserializeToObject<T>(json: any, type: new () => T): T {
        return deserialize(type, json, { groups: ['api'] });
    }

    deserializeToArray<T>(json: any, type: new () => T): T[] {
        return deserializeArray(type, json, { groups: ['api'] });
    }

    mapToJson<T>(object: T | T[], type?: new () => T): any {
        if (typeof object === 'string') {
            return object;
        }
        if (type) {
            const classObject = plainToClass(type, object, { groups: ['api'] });
            return serialize(classObject, { groups: ['api'] });
        } else {
            return object instanceof Array ? JSON.stringify(object) : object;
        }
    }
}
