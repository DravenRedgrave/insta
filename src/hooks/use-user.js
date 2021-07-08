import { useState,useEffect,useContext } from "react";
import UserContext from "../context/user";
import {getUserByUserId} from '../sevices/firebase';
export default function useUser(){
    const [activeUser,setActiveUser] = uuseState({});
    const {user} = useContext(UserContext);

    useEffect(() =>{
        async function getUserObjUserId(){
            const response = await getUserByUserId(user.uid);
            setActiveUser(response);
        }
        if (user?.uid){
            getUserObjUserId();
        }
    },[user]);

    return {user:activeUser};
}