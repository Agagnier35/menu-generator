/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios, { AxiosInstance } from 'axios';
import { ApiGateway, TypeOptions } from './apiGateway';
import { JsonSerializer } from './jsonSerializer';

export type HeaderType = 'application/json' | 'application/octet-stream' | 'application/vnd.ms-excel' | 'text/plain';
const DEV_URL = 'http://localhost:8080';
const API_SUFFIX = '/api';

export class AxiosApiGateway implements ApiGateway {
    private axios: AxiosInstance | undefined;

    constructor(private objectMapper: JsonSerializer) {}

    getAxios(): AxiosInstance {
        if (!this.axios) {
            this.axios = axios.create({
                baseURL:
                    window.location.hostname === 'localhost'
                        ? DEV_URL + API_SUFFIX
                        : window.location.hostname + API_SUFFIX,
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                withCredentials: true,
            });
        }
        return this.axios;
    }

    async head(url: string): Promise<void> {
        return this.getAxios().head(url);
    }

    async get<T>(url: string, options?: TypeOptions<undefined, T>): Promise<T> {
        return this.getAxios()
            .get<T>(url, {
                transformResponse: (data) => this.objectMapper.mapToObject(data, options?.outType),
            })
            .then((response) => response.data);
        //.catch((err) => this.processErrorBody(err));
    }

    async getArray<T>(url: string, options?: TypeOptions<undefined, T>): Promise<T[]> {
        return this.getAxios()
            .get<T[]>(url, {
                transformResponse: (data) =>
                    options ? this.objectMapper.mapToArray(data, options.outType) : JSON.parse(data),
            })
            .then((response) => response.data);
        //.catch((err) => this.processErrorBody(err));
    }

    async getBlobData(url: string, contentType?: HeaderType, acceptType?: HeaderType): Promise<any> {
        return this.getAxios()
            .get(url, {
                headers: {
                    'Content-Type': contentType ?? 'application/octet-stream',
                    Accept: acceptType ?? 'application/octet-stream',
                },
                responseType: 'blob',
            })
            .then((response) => response.data);
        //.catch((err) => this.processErrorBody(err));
    }

    async post<T, U>(url: string, data?: any, options?: TypeOptions<T, U>, contentType?: HeaderType): Promise<U> {
        return this.getAxios()
            .post<U>(url, data, {
                headers: {
                    'Content-Type': contentType ?? 'application/json',
                },
                transformRequest: (d) => this.objectMapper.mapToJson(d, options?.inType),
                transformResponse: (d) => this.objectMapper.mapToObject(d, options?.outType),
            })
            .then((response) => response.data);
        //.catch((err) => this.processErrorBody(err));
    }

    async postReturnArray<T, U>(
        url: string,
        data?: any,
        options?: TypeOptions<T, U>,
        contentType?: HeaderType,
    ): Promise<U[]> {
        return this.getAxios()
            .post<U[]>(url, data, {
                headers: {
                    'Content-Type': contentType ?? 'application/json',
                },
                transformRequest: (d) => this.objectMapper.mapToJson(d, options?.inType),
                transformResponse: (d) => this.objectMapper.mapToArray(d, options?.outType),
            })
            .then((response) => response.data);
        //.catch((err) => this.processErrorBody(err));
    }

    async put<T, U>(url: string, data?: any, options?: TypeOptions<T, U>): Promise<U> {
        return this.getAxios()
            .put<U>(url, data, {
                transformRequest: (d) => this.objectMapper.mapToJson(d, options?.inType),
                transformResponse: (d) => this.objectMapper.mapToObject(d, options?.outType),
            })
            .then((response) => response.data);
        //.catch((err) => this.processErrorBody(err));
    }

    async delete(url: string): Promise<void> {
        return this.getAxios()
            .delete(url)
            .then((response) => response.data);
        //.catch((err) => this.processErrorBody(err));
    }

    // private processErrorBody = async (err: any): Promise<any> => {
    //     let body: APIError;
    //     if (err.response?.request?.response) {
    //         const errResponse = err.response.request.response;
    //         const errObject = this.objectMapper.mapToObject(errResponse, APIError);
    //         body = errObject;
    //         err.body = body;
    //     } else if (err.isAxiosError) {
    //         body = APIError.build('APIError', [
    //             { message: err.message, extraInformation: 'Unable to contact the API' },
    //         ]);

    //         err.body = body;
    //     } else {
    //         body = APIError.build('UnexpectedUnknownError', [{ message: err.message, extraInformation: err.stack }]);
    //         err.body = body;
    //     }
    //     notifyErrors(body);
    //     return Promise.reject(body);
    // };
}
export default new AxiosApiGateway(new JsonSerializer());
