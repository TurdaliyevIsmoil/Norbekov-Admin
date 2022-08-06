
const mainPath = process.env.REACT_APP_MAIN_API_PATH_KEY;
const HTTP = process.env.REACT_APP_CORE_HTTP;
export default {
  admin: {
    login: `${HTTP}://${mainPath}/admin/login`,
    create: `${HTTP}://${mainPath}/admin/create`,
    delete: `${HTTP}://${mainPath}/admin/delete?id=`,
  },
  contact: {
    get: `${HTTP}://${mainPath}/api/contact/get`,
  },
  admin: {
    get: `${HTTP}://${mainPath}/contacts/get `,
    delete: `${HTTP}://${mainPath}/admin/delete?id=`,
    login: `${HTTP}://${mainPath}/admin/login`,
  },
  news: {
    create: `${HTTP}://${mainPath}/api/news/create `,
    delete: `${HTTP}://${mainPath}/api/news/delete?id=`,
    update: `${HTTP}://${mainPath}/api/news/update/`,
    updateImage: `${HTTP}://${mainPath}/api/news/upload-img/`,
    getNews: `${HTTP}://${mainPath}/api/news/get`,
    getNewsS: `${HTTP}://${mainPath}/newsS/get`,
  },
  service: {
    create: `${HTTP}://${mainPath}/api/service/create `,
    delete: `${HTTP}://${mainPath}/api/service/delete?id=`,
    update: `${HTTP}://${mainPath}/api/service/update/`,
    updateImage: `${HTTP}://${mainPath}/api/service/upload-img/`,
    getService: `${HTTP}://${mainPath}/service/get`,
    getServices: `${HTTP}://${mainPath}/services/get`,
  },
  table: {
    create: `${HTTP}://${mainPath}/api/table/create`,
    delete: `${HTTP}://${mainPath}/api/table/delete?id=`,
    update: `${HTTP}://${mainPath}/api/table/update/`,
    updateImage: `${HTTP}://${mainPath}/api/table/upload-img/`,
    getTable: `${HTTP}://${mainPath}/tables/get`,
    getTables: `${HTTP}://${mainPath}/tables/get`,
  },
};
