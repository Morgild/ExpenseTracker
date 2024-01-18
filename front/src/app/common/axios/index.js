import axios from "axios";

export const api=axios.create({
    baseURL:"https://expense-tracker-0f16.onrender.com/",
    headers:{"Content-Type":"application/json",},
})
