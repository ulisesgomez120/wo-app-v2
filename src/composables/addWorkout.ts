/* eslint-disable */
// @ts-nocheck
import { ref } from 'vue';
import { db } from '../firebase/config';
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 

const getWorkouts : any = () => {
    const error = ref(null);

    const load = async (payload) => {
        try {
            const res = await addDoc(collection(db, 'past_workouts'), payload);
            console.log(res);
        }
        catch (err) {
            error.value = err.message;
            console.log(error.value);
        }
    }
    
    return { error, load, serverTimestamp }
};

export default getWorkouts;