import { createContext, useContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import API from "../API";
import reducer from "../reducers/DataReducer";
import {
  APPLICATIONS_DATA,
  LOADING_END,
  LOADING_START,
  LOGIN,
  NEWS_DATA,
  SERVICES_DATA,
  TABLES_DATA,
} from "../utils/constants";

const Data = createContext();

const initialState = {
  tables: [],
  news: [],
  services: [],
  applications: [],
  loading: true,
  auth: false,
  token: "",
};

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  // Fetch
  const fetchServices = async () => {
    loadingStart();
    await fetch(API.service.getServices)
      .then((e) => (e.ok ? e.json() : Error("Something went wrong")))
      .then((d) => dispatch({ type: SERVICES_DATA, payload: d }))
      .catch((e) => console.log(e));
    loadingEnd();
  };

  const fetchNews = async () => {
    loadingStart();
    await fetch(API.news.getNewsS)
      .then((e) => (e.ok ? e.json() : Error("Something went wrong")))
      .then((d) => dispatch({ type: NEWS_DATA, payload: d }))
      .catch((e) => console.log(e));
    loadingEnd();
  };

  const fetchTables = async () => {
    loadingStart();
    await fetch(API.table.getTables)
      .then((e) => (e.ok ? e.json() : Error("Something went wrong")))
      .then((d) => dispatch({ type: TABLES_DATA, payload: d }))
      .catch((e) => console.log(e));
    loadingEnd();
  };

  const fetchApplications = async () => {
    loadingStart();
    await fetch(API.contact.get, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${state.token}`,
      },
    })
      .then((e) => (e.ok ? e.json() : Error("Something went wrong")))
      .then((d) => dispatch({ type: APPLICATIONS_DATA, payload: d }))
      .catch((e) => console.log(e));
    loadingEnd();
  };

  // Create
  const addService = async (data) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTk1ODk1MjUsImlhdCI6MTY1OTU0NjMyNSwidXNlcl9pZCI6MX0.KOT0KPmWNCMjQ8WE190QT1uA4DpOST3iiXJWx5_3bkY");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("accept", "application/json");
    myHeaders.append("Access-Control-Allow-Origin", "*");
    myHeaders.append("Access-Control-Allow-Credentials", "true");
    myHeaders.append("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With");
    myHeaders.append("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT , DELETE ,PATCH, HEAD");

    
    var raw = JSON.stringify({
      "post_body": "data.body",
      "post_body_ru": "data.body_ru",
      "post_title": "data.title",
      "post_title_ru": "data.title_ru",
      "price": "data.price",
      "post_img_url": "https://timesofindia.indiatimes.com/thumb/msid-83989046,width-1200,height-900,resizemode-4/83989046.jpg"
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("http://3.6.89.145:8080/api/service/create", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    // loadingStart();
    // const raw = {
    //   post_body: data.body,
    //   post_body_ru: data.body_ru,
    //   post_title: data.title,
    //   post_title_ru: data.title_ru,
    //   price: data.price,
    //   post_img_url:
    //     "https://timesofindia.indiatimes.com/thumb/msid-83989046,width-1200,height-900,resizemode-4/83989046.jpg",
    // };
    // var myHeaders = new Headers();
    // myHeaders.append("Authorization", `Bearer ${state.token}`);
    // myHeaders.append("Content-Type", "application/json");

    // var requestOptions = {
    //   method: "POST",
    //   headers: myHeaders,
    //   body: raw,
    //   redirect: "follow",
    // };

    // fetch("http://api.norbekov.uz/api/service/create", requestOptions)
    //   .then((d) => {
    //     // fetchServices();
    //     navigate("/services");
    //   })
    //   .catch((e) => console.log(e));
  };
  const addNews = async (data) => {
    loadingStart();
    let post_id = null;
    await fetch(API.news.create, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${state.token}`,
      },
      body: JSON.stringify({
        post_body: data.body,
        post_body_ru: data.body_ru,
        post_title: data.title,
        post_title_ru: data.title_ru,
        post_img_url: "",
      }),
    })
      .then((d) => d.json())
      .then((d) => (post_id = d.data))
      .catch((e) => console.log(e));
    await ImgUploader(data.img, API.news.updateImage, post_id);
    fetchNews();
    navigate("/news");
  };
  const addTable = async (data) => {
    loadingStart();
    let post_id = null;
    await fetch(API.table.create, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${state.token}`,
      },
      body: JSON.stringify({
        post_body: data.body,
        post_body_ru: data.body_ru,
        post_title: data.title,
        post_title_ru: data.title_ru,
        price: data.price,
        duration: data.duration,
        post_img_url: "",
      }),
    })
      .then((response) => response.json())
      .then((response) => (post_id = response.data))
      .catch((e) => console.log(e));
    await ImgUploader(data.img, API.table.updateImage, post_id);
    fetchTables();
    navigate("/tables");
  };

  // PUT
  const updateNews = async (data) => {
    loadingStart();
    const data1 = {
      post_body: data.body,
      post_body_ru: data.body_ru,
      post_title: data.title,
      post_title_ru: data.title_ru,
      post_img_url: "",
    };
    const data2 = {
      post_body: data.body,
      post_body_ru: data.body_ru,
      post_title: data.title,
      post_title_ru: data.title_ru,
      post_img_url: "",
      post_img_path: data.imgPath,
    };
    await fetch(API.news.update + data.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${state.token}`,
      },
      body: JSON.stringify(data.img ? data1 : data2),
    }).catch((e) => console.log(e));
    if (data.img) {
      await ImgUploader(data.img, API.news.updateImage, data.id);
    }
    fetchNews();
    navigate("/news");
  };
  const updateService = async (data) => {
    loadingStart();
    const data1 = {
      post_body: data.body,
      post_body_ru: data.body_ru,
      post_title: data.title,
      post_title_ru: data.title_ru,
      price: data.price,
      post_date: data.post_date,
      post_img_url: "",
    };
    const data2 = {
      post_body: data.body,
      post_body_ru: data.body_ru,
      post_title: data.title,
      post_title_ru: data.title_ru,
      price: data.price,
      post_date: data.post_date,
      post_img_url: "",
      post_img_path: data.imgPath,
    };
    await fetch(API.service.update + data.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${state.token}`,
      },
      body: JSON.stringify(data.img ? data1 : data2),
    }).catch((e) => console.log(e));
    if (data.img) {
      await ImgUploader(data.img, API.service.updateImage, data.id);
    }
    navigate("/services");
    fetchServices();
  };
  const updateTable = async (data) => {
    loadingStart();
    const data1 = {
      post_body: data.body,
      post_body_ru: data.body_ru,
      post_title: data.title,
      post_title_ru: data.title_ru,
      price: data.price,
      post_date: data.post_date,
      date: data.date,
      duration: data.duration,
      format: data.format,
      post_img_url: "",
    };
    const data2 = {
      post_body: data.body,
      post_body_ru: data.body_ru,
      post_title: data.title,
      post_title_ru: data.title_ru,
      price: data.price,
      post_date: data.post_date,
      date: data.date,
      duration: data.duration,
      format: data.format,
      post_img_url: "",
      post_img_path: data.imgPath,
    };
    await fetch(API.table.update + data.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${state.token}`,
      },
      body: JSON.stringify(data.img ? data1 : data2),
    }).catch((e) => console.log(e));
    if (data.img) {
      await ImgUploader(data.img, API.table.updateImage, data.id);
    }
    fetchTables();
    navigate("/tables");
  };

  // Deletes
  const deleteNews = (id) => {
    loadingStart();
    fetch(API.news.delete + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${state.token}`,
      },
    })
      .then((e) => (e.ok ? e.json() : Error("Something went wrong")))
      .then((d) => {
        navigate("/news");
        fetchNews();
      })
      .catch((e) => console.log(e));
  };
  const deleteService = (id) => {
    loadingStart();
    fetch(API.service.delete + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${state.token}`,
      },
    })
      .then((e) => (e.ok ? e.json() : Error("Something went wrong")))
      .then((d) => {
        fetchServices();
        navigate("/services");
      })
      .catch((e) => console.log(e));
  };
  const deleteTable = (id) => {
    loadingStart();
    fetch(API.table.delete + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${state.token}`,
      },
    })
      .then((e) => console.log(e))
      .then((d) => {
        navigate("/tables");
        fetchTables();
      })
      .catch((e) => console.log(e));
  };

  // Helpers
  const ImgUploader = async (img, api, id) => {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${state.token}`);
    let formdata = new FormData();
    formdata.append("file", img);
    let requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };
    await fetch(api + id, requestOptions)
      .then((response) => response.json())
      .catch((error) => console.log("error", error));
  };

  // Ui helpers
  const loadingEnd = () => {
    dispatch({
      type: LOADING_END,
    });
  };
  const loadingStart = () => {
    dispatch({
      type: LOADING_START,
    });
  };

  const login = (u, p) => {
    loadingStart();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "text/plain");

    // var raw = `{\r\n    \"user_name\": \"${u}\",\r\n    \"password\": \"${p}\"\r\n}`;
    const raw = { user_name: u, password: p };

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(raw),
      redirect: "follow",
    };

    fetch("http://api.norbekov.uz/admin/login", requestOptions)
      .then((d) => (d.status === 200 ? d.json() : Error("Invalid Auth")))
      .then((data) => dispatch({ type: LOGIN, payload: data }))
      .catch((e) => console.log(e));

    // Customized data
    // const inf = {
    //   password: p.toString(),
    //   user_name: u.toString(),
    // };
    // // Request
    // fetch(API.admin.login, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(inf),
    // })
    //   // Cheking
    // .then((d) => (d.status === 200 ? d.json() : Error("Invalid Auth")))
    // .then((data) => dispatch({ type: LOGIN, payload: data }))
    // .catch((e) => console.log(e));
    loadingEnd();
  };

  useEffect(() => {
    const login = localStorage.getItem("auth");
    const login_exp = localStorage.getItem("auth_exp");
    if (+login_exp < new Date().getTime()) {
      localStorage.removeItem("auth");
      localStorage.removeItem("auth_exp");
    } else {
      dispatch({ type: LOGIN, payload: { toke: login } });
    }
    loadingEnd();
  }, []);
  useEffect(() => {
    if (state.auth) {
      fetchServices();
      fetchNews();
      fetchTables();
      fetchApplications();
    }
  }, [state.auth]);
  return (
    <Data.Provider
      value={{
        ...state,
        loadingEnd,
        loadingStart,
        login,
        addNews,
        addService,
        deleteNews,
        updateNews,
        deleteService,
        updateService,
        fetchTables,
        addTable,
        updateTable,
        deleteTable,
      }}
    >
      {children}
    </Data.Provider>
  );
};

export const useDataContext = () => {
  return useContext(Data);
};
