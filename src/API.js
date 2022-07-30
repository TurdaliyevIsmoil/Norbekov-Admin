
const mainPath = process.env.REACT_APP_MAIN_API_PATH_KEY;
export default {
  admin: {
    login: `http://${mainPath}/admin/login`,
    create: `http://${mainPath}/admin/create`,
    delete: `http://${mainPath}/admin/delete?id=`,
  },
  contact: {
    get: `http://${mainPath}/api/contacts/get`,
  },
  admin: {
    get: `http://${mainPath}/contacts/get `,
    delete: `http://${mainPath}/admin/delete?id=`,
    login: `http://${mainPath}/admin/login`,
  },
  news: {
    create: `http://${mainPath}/api/news/create `,
    delete: `http://${mainPath}/api/news/delete?id=`,
    update: `http://${mainPath}/api/news/update/`,
    updateImage: `http://${mainPath}/api/news/upload-img/`,
    getNews: `http://${mainPath}/api/news/get`,
    getNewsS: `http://${mainPath}/newsS/get`,
  },
  service: {
    create: `http://${mainPath}/api/service/create `,
    delete: `http://${mainPath}/api/service/delete?id=`,
    update: `http://${mainPath}/api/service/update/`,
    updateImage: `http://${mainPath}/api/service/upload-img/`,
    getService: `http://${mainPath}/service/get`,
    getServices: `http://${mainPath}/services/get`,
  },
  table: {
    create: `http://${mainPath}/api/table/create`,
    delete: `http://${mainPath}/api/table/delete?id=`,
    update: `http://${mainPath}/api/table/update/`,
    updateImage: `http://${mainPath}/api/table/upload-img/`,
    getTable: `http://${mainPath}/tables/get`,
    getTables: `http://${mainPath}/tables/get`,
  },
};
