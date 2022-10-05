import {configureStore, createSlice} from '@reduxjs/toolkit'

const contactSlice=createSlice({
    name:'contact',
    initialState:{
        name:null,
        email:null,
        subject:null,
        message:null,
        links:['about','portfolio','contact','resume','services'],
        open:false,
        displayx:null
    },
    reducers:{
        fill(state,payload){
            return{
                ...state,
                name:payload.name,
                email:payload.email,
                subject:payload.subject,
                message:payload.message
            }
        },
        about(state){
            return{
                ...state,
                open:true
            }
        },
        change(state){
            return{
                ...state,
                displayx:'block'
            }
           
        },
        unchange(state){
            return{
                ...state,
                displayx:'none'
            }
        }
    }
})
const animateSlice = createSlice({
    name:'animate',
    initialState:{
        element:null
    },
    reducers:{
        fill(state,payload){
            console.log(payload.payload)
            return{
                element:payload.payload

            }
        }
    }
})
export const contact = contactSlice.actions
export const animate = animateSlice.actions
const store = configureStore({reducer:{
    contact:contactSlice.reducer,
    animate:animateSlice.reducer
}})
export default store