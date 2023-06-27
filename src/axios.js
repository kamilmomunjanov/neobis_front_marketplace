import axios from "axios";


// const token = window.localStorage.getItem("token")
const instance = axios.create({
    baseURL:"http://68.183.79.205:8000/"
})

instance.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem("token")
    return config
})

export default instance;


// import {Navigate} from "react-router-dom";
//
// const isAuth = useSelector(selectIsAuth)
// const dispatch = useDispatch()
// const {register, handleSubmit, setError, formState:{errors, isValid}} = useForm({
//     defaultValues: {
//         email:"kamiljan@mail.ru",
//         password:"12345"
//     },
//     mode:"onChange"
// })
//
// const onSubmit = async (values) => {
//     const data = await dispatch(fetchUserData(values))
//     if ("token" in data.payload) {
//         window.localStorage.setItem("token", data.payload.token)
//     }else if(!data.payload){
//         return alert("Не удалось авторизоваться")
//     }
// }
//
// if (isAuth) {
//     return <Navigate to="/"/>
// }


// const [user, setUser] = useState({email:"",username:""})


// axios.post('http://68.183.79.205:8000/register/',  {
//         email: "kamilmommunaaaa@inbox.ru",
//         username: "Kamilaajanaaaa",
//     })
//     .then(res => console.log(res.data))
//     .catch(err => console.warn(err, "Ошибка"))