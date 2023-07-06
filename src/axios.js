import axios from "axios";



const instance = axios.create({
    baseURL:"http://68.183.79.205:8000/",
})

instance.interceptors.request.use((config) => {
    config.headers.Authorization = "Bearer " + window.localStorage.getItem("tokenRefresh")
    config.headers.Authorization = "Bearer " + window.localStorage.getItem("token")
    return config
})

instance.interceptors.response.use(
    // в случае валидного accessToken ничего не делаем:
    (config) => {
        return config;
    },
    // в случае просроченного accessToken пытаемся его обновить:
    async (error) => {
        // предотвращаем зацикленный запрос, добавляя свойство _isRetry
        const originalRequest = {...error.config};
        originalRequest._isRetry = true;
        if (
            // проверим, что ошибка именно из-за невалидного accessToken
            error.response.status === 401 &&
            // проверим, что запрос не повторный
            error.config &&
            !error.config._isRetry
        ) {
            try {
                // запрос на обновление токенов
                const resp = await instance.post("token/refresh/",{
                    refresh: "Bearer " + window.localStorage.getItem("tokenRefresh")
                });
                // сохраняем новый accessToken в localStorage
                localStorage.setItem("token", resp.data.token.access);
                // переотправляем запрос с обновленным accessToken
                return instance.request(originalRequest);
            } catch (error) {
                console.log("AUTH ERROR");
            }
        }
        // на случай, если возникла другая ошибка (не связанная с авторизацией)
        // пробросим эту ошибку
        throw error;
    }
)



export default instance;


