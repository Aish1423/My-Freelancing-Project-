import axios from "axios";


export const Baseurl = process.env.REACT_APP_API_URL || "https://freelancer-backend-live.vercel.app";
class ApiServices {
    getToken() {
        let obj = {
            authorization: sessionStorage.getItem("token")
        }
        return obj
    }
    bdeAll(data) {
        return axios.post(Baseurl + "/client/bde/all", data, { headers: this.getToken() })
    }
    projectAdd(data) {
        return axios.post(Baseurl + "/client/project/add", data, { headers: this.getToken() })
    }
    projectAll(data) {
        return axios.post(Baseurl + "/client/project/all", data, { headers: this.getToken() })
    }
    categoryAll() {
        return axios.post(Baseurl + "/client/category/all")
    }
    bidAll(data) {
        return axios.post(Baseurl + "/client/bid/all", data, { headers: this.getToken() })
    }
    updateProject(data) {
        return axios.post(Baseurl + "/client/project/update", data, { headers: this.getToken() })
    }
    addBde(data) {
        return axios.post(Baseurl + "/bde/bde/add", data)
    }
    ViewAllClients() {
        return axios.post(Baseurl + "/bde/client/all", null, { headers: this.getToken() })
    }
    ViewAllProjects() {
        return axios.post(Baseurl + "/bde/project/all", null, { headers: this.getToken() })
    }
    singleProject(data) {
        return axios.post(Baseurl + "/client/project/single", data, { headers: this.getToken() })
    }
    bdeStatus(data) {
        return axios.post(Baseurl + "/client/bde/changeStatus", data, { headers: this.getToken() })
    }
    categoryAdd(data) {
        return axios.post(Baseurl + "/admin/category/add", data, { headers: this.getToken() })
    }
    adminCategoryAll() {
        return axios.post(Baseurl + "/admin/category/all", null, { headers: this.getToken() })
    }
    allBidDetails() {
        return axios.post(Baseurl + "/client/bid/all", null, { headers: this.getToken() })
    }
    changePassword(data) {
        return axios.post(Baseurl + "/client/changePassword", data, { headers: this.getToken() })
    }
    deleteCategory(data) {
        return axios.post(Baseurl + "/admin/category/delete", data, { headers: this.getToken() })
    }
    updateClient(data) {
        return axios.post(Baseurl + "/client/client/update", data, { headers: this.getToken() })
    }
    singleClient(data) {
        return axios.post(Baseurl + "/client/client/single", data, { headers: this.getToken() })
    }
    adminAllProjects(data) {
        return axios.post(Baseurl + "/admin/project/all", data, { headers: this.getToken() });
    }
    bdeUpdateProfile(data) {
        return axios.post(Baseurl + "/bde/bde/update", data, { headers: this.getToken() })
    }
    singleBde(data) {
        return axios.post(Baseurl + "/bde/bde/single", data, { headers: this.getToken() })
    }
    bdeAllProjects(data) {
        return axios.post(Baseurl + "/bde/project/all", data, { headers: this.getToken() })
    }
    clientBidDetails(data) {
        return axios.post(Baseurl + "/client/bid/all", data, { headers: this.getToken() })
    }
    viewBids(data) {
        return axios.post(Baseurl + "/bde/bid/all", data, { headers: this.getToken() })
    }
    clientsAllProjects(data) {
        return axios.post(Baseurl + "/client/project/all", data, { headers: this.getToken() })
    }
    bdeAddBid(data) {
        return axios.post(Baseurl + "/bde/bid/add", data, { headers: this.getToken() })
    }
    bidUpdateStatus(data) {
        return axios.post(Baseurl + "/client/bid/updateStatus", data, { headers: this.getToken() })
    }
    deleteProject(data) {
        return axios.post(Baseurl + "/client/project/delete", data, { headers: this.getToken() })
    }
    bidHistory(data) {
        return axios.post(Baseurl + "/bde/bid/all", data, { headers: this.getToken() })
    }
    clientChangeStatus(data) {
        return axios.post(Baseurl + "/admin/client/changeStatus", data, { headers: this.getToken() })
    }
    BdeBids(data) {
        return axios.post(Baseurl + "/admin/bid/all", data, { headers: this.getToken() })
    }
    Dashboard() {
        return axios.post(Baseurl + "/admin/dashboard", { headers: this.getToken() })
    }
    addClient(data) {
        return axios.post(Baseurl + "/client/client/add", data)
    }
    login(data) {
        return axios.post(Baseurl + "/admin/user/login", data)
    }
    AddCategory(data) {
        return axios.post(Baseurl + "/admin/category/add", data, { headers: this.getToken() })
    }
    ChangePasswordAdmin(data) {
        return axios.post(Baseurl + "/admin/user/changePassword", data, { headers: this.getToken() })
    }
    EditCategory(data) {
        return axios.post(Baseurl + "/admin/category/update", data, { headers: this.getToken() })
    }
    SingleCategory(data) {
        return axios.post(Baseurl + "/admin/category/single", data, { headers: this.getToken() })
    }
    ViewAllCategory() {
        return axios.post(Baseurl + "/admin/category/all", null, { headers: this.getToken() })
    }
    ChangePasswordBde(data) {
        return axios.post(Baseurl + "/bde/user/changePassword", data, { headers: this.getToken() })
    }
    ViewCategoryBde() {
        return axios.post(Baseurl + "/bde/category/all", null, { headers: this.getToken() })
    }


}

export default new ApiServices;