// import _ from 'lodash';

export const API_CONFIGS = {
    API_VERSION: 'v1',
    BASE_URI: 'https://api.wefit.vn',
    PAGINATION: 20,
    REQUEST_METHODS: {
        DELETE: 'del',
        GET: 'get',
        POST: 'post',
        PUT: 'put',
    },
    RESPONSE_STATUSES: {
        BAD_GATEWAY: 502,
        BAD_REQUEST: 400,
        INTERNAL_SERVER_ERROR: 500,
        NOT_FOUND: 404,
        SERVICE_UNAVAILABLE: 503,
        SUCCESS: 200,
        UNAUTHORIZED: 401,
        UNPROCESSABLE_ENTITY: 422,
    },
};

// App-wide constants (to be used in both Redux & Components)
export const AXIOS_REQUEST_SUFFIXES = { ERROR: ':ERROR', SUCCESS: ':SUCCESS' };

export const DEFAULT_LANGUAGE = 'vi';
