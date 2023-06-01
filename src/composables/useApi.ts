import { useLoadingBar } from 'naive-ui';
import type { Nullable } from '~/utils/helper';
import type { FormExtraParams, LangParams, RequestConfig } from '~/utils/http/request';
import { getRequest, postForm, postRequest } from '~/utils/http/request';

type DefaultParams = Record<string, unknown> & LangParams;

export const useApis = () => {
    const loadingBar = useLoadingBar();

    return {
        getRequest: <T = DefaultParams, R = Record<string, any>>(
            url: string,
            data?: T | Nullable<T>,
            config?: Omit<RequestConfig, 'url' | 'method' | 'params'>,
        ) => {
            return getRequest<T, R>(url, data, {
                progressBar: loadingBar,
                ...config,
            });
        },
        postRequest: <T = DefaultParams, R = Record<string, any>>(
            url: string,
            data?: T | Nullable<T>,
            config?: Omit<RequestConfig, 'url' | 'method' | 'data'>,
        ) => {
            return postRequest<T, R>(url, data, {
                progressBar: loadingBar,
                ...config,
            });
        },
        postForm: <T = DefaultParams, R = Record<string, any>>(
            url: string,
            data?: T | Nullable<T>,
            config?: Omit<RequestConfig & FormExtraParams, 'url' | 'method' | 'data'>,
        ) => {
            return postForm<T, R>(url, data, {
                progressBar: loadingBar,
                ...config,
            });
        },
    };
};

// export { useResponseHandler } from '~/utils/http/handler';
