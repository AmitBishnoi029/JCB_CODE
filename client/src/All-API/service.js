import axios from "axios";
const PORT = "https://earthmoversonline.onrender.com"
// const PORT = "http://localhost:8000"
// call API for LOGIN
export const login = async(data) =>{
    try {
        return await axios.post(`${PORT}/auth/login`,data)
    } catch (error) {
        console.log("Error while login API",error.message);
    }
}
export const RegisterApi = async(data) =>{
    try {
        return await axios.post(`${PORT}/auth/register`,data)
    } catch (error) {
        console.log("Error while registering API",error.message);
    }
}
export const ChangePasswordApi = async(data) =>{
    try {
        return await axios.put(`${PORT}/auth/changePassword`,data)
    } catch (error) {
        console.log("Error while registering API",error.message);
    }
}
export const BookOnlyJcb = async(data) =>{
    try {
        return await axios.post(`${PORT}/user/bookOnlyJcb`,data)
    } catch (error) {
        console.log("Error while BookOnlyJcb API",error.message);
    }
}
export const BookOnlyTrolly = async(data) =>{
    try {
        return await axios.post(`${PORT}/user/bookOnlyTrolly`,data)
    } catch (error) {
        console.log("Error while BookOnlyTrolly API",error.message);
    }
}
export const BookBoth = async(data) =>{
    try {
        return await axios.post(`${PORT}/user/bookBoth`,data)
    } catch (error) {
        console.log("Error while BookBoth API",error.message);
    }
}

export const getHistory = async(id) =>{
    try {
        return await axios.get(`${PORT}/user/getHistory/${id}`)
    } catch (error) {
        console.log("Error while BookBoth API",error.message);
    }
}
export const OnlyJcbDeshBoard = async(data) =>{
    try {
        return await axios.post(`${PORT}/user/OnlyJcb_deshBoard`,data)
    } catch (error) {
        console.log("Error while OnlyJcb_deshBoard API",error.message);
    }
}
export const OnlyTrollyDeshBoard = async(data) =>{
    try {
        return await axios.post(`${PORT}/user/OnlyTrolly_deshboard`,data)
    } catch (error) {
        console.log("Error while OnlyTrolly_deshboard API",error.message);
    }
}
export const CombinedDeshBoard = async(data) =>{
    try {
        return await axios.post(`${PORT}/user/Combined_deshboard`,data)
    } catch (error) {
        console.log("Error while Combined_deshboard API",error.message);
    }
}
export const getDashData = async() =>{
    try {
        return await axios.get(`${PORT}/user/getDashboard`)
    } catch (error) {
        console.log("Error while getDashData API",error.message);
    }
}
