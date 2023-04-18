/* eslint-disable */
// @ts-nocheck
import { ref, watchEffect } from 'vue';
import { db } from '../firebase/config';
import { collection, where, query, onSnapshot } from "firebase/firestore"; 

const getWorkouts : any = (id) => {
    const past_workouts = ref([]);
    // const error = ref(null);
    // const load = async (id) => {
    //     try {
            
    //     }
    //     catch (err) {
    //         error.value = err.message;
    //         console.log(error.value);
    //     }
    // }
    const q = query(collection(db, "past_workouts"), where("workout_id", "==", id));
    const unsub = onSnapshot(q, (querySnapshot) => {
        let grouped_sets = [];
        querySnapshot.forEach((doc) => {
            const set_data = doc.data();
            if (grouped_sets.length === 0 || (grouped_sets.findIndex((set) => set.date === set_data.date)) === -1) {
                grouped_sets.push({date: set_data.date, set: [set_data]})
            } else {
                grouped_sets.find((set) => set.date === set_data.date).set.push(set_data);
            }
        });
        grouped_sets.sort((a,b) => {
            let a_date = new Date(a.date.split(' ')[0]);
            let b_date = new Date(b.date.split(' ')[0]);
            return b_date - a_date;
        }).forEach(group => {
            group.set.sort((a,b) => (a?.created_on?.seconds ?? new Date().getTime() / 1000) - (b?.created_on?.seconds ?? new Date().getTime() / 1000));
        })
        past_workouts.value = grouped_sets;
    });

    watchEffect((onInvalidate) => onInvalidate(() => unsub()))

    return past_workouts;
};

export default getWorkouts;
            // {
            //     "notes": "",
            //     "type": "warm_up",
            //     "date": "11/08/2022 - Saturday",
            //     "workout_id": "31992ff5-1a30-492b-a78a-8ed8842c566e",
            //     "weight": "155",
            //     "alt_name": "Leg Press Machine",
            //     "created_on": {
            //         "seconds": 1668880472,
            //         "nanoseconds": 757000000
            //     },
            //     "order": 0,
            //     "rpe": "0",
            //     "reps": "12"
            // }