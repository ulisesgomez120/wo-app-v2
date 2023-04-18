/* eslint-disable */
 <!-- eslint-disable  -->
<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <ion-header :translucent="true">
                <ion-toolbar>
                    <ion-buttons slot="start">
                        <ion-back-button></ion-back-button>
                    </ion-buttons>
                    <ion-title> {{ workout.name.replaceAll("_", " ") }} </ion-title>
                </ion-toolbar>
            </ion-header>

            <div id="container">
                <ion-grid>
                    <ion-row>
                        <ion-col>
                            <p>Sets</p>
                            <p><span>{{ sets_done }}</span>/{{ workout.sets }}</p>
                        </ion-col>
                        <ion-col>
                            <p>Reps</p>
                            <p>{{ workout.reps }}</p>
                        </ion-col>
                    </ion-row>
                </ion-grid>
                <ion-grid>
                    <ion-row>
                        <ion-col>
                            <p>RPE</p>
                            <p>{{ workout.rpe }}</p>
                        </ion-col>
                        <ion-col>
                            <p>Rest</p>
                            <p>{{ workout.rest }}</p>
                        </ion-col>
                    </ion-row>
                </ion-grid>
                <ion-grid>
                    <ion-row id="timer_row">
                        <ion-col>{{ timer_val }} </ion-col>
                        <ion-col v-if="total_seconds == 0">
                            <ion-button @click="timer_start()" fill="clear"><ion-icon size="large" :src="playCircleOutline"></ion-icon></ion-button>
                        </ion-col>
                        <ion-col v-else>
                            <ion-button @click="stop_timer()" fill="clear"><ion-icon size="large" :src="stopCircleOutline"></ion-icon></ion-button>
                        </ion-col>
                    </ion-row>
                </ion-grid>
                <WorkoutForm></WorkoutForm>
                <PastWorkouts></PastWorkouts>
            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
/* eslint-disable */
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonLabel, IonItem, IonIcon, IonItemGroup, IonList, IonGrid, IonRow, IonCol, IonBackButton, IonButtons } from "@ionic/vue";
import { defineComponent } from "vue";
import { playCircleOutline, stopCircleOutline } from "ionicons/icons";
import { full_body_workouts } from "../workout_data";
import WorkoutForm from "../components/WorkoutForm.vue";
import PastWorkouts from "@/components/PastWorkouts.vue";
import {LocalNotifications} from "@capacitor/local-notifications";

interface Day_Workout {
    [key: string]: any;
}
// interface Workout {
//     name: string;
//     sets: string;
//     rpe: string;
//     reps: string;
//     rest: string;
//     type: string;
//     subs: string;
//     tips: string;
//     po_frequency: number;
//     po_weight: number;
//     id: string;
// }
export default defineComponent({
    name: "WorkoutPage",
    components: {
        IonContent,
        IonHeader,
        IonPage,
        IonTitle,
        IonToolbar,
        IonButton,
        IonButtons,
        IonLabel,
        IonItem,
        IonIcon,
        IonItemGroup,
        IonList,
        IonGrid,
        IonRow,
        IonCol,
        IonBackButton,
        WorkoutForm,
        PastWorkouts,
    },
    data() {
        // let workout: Workout = {name: '',
        //     sets: '',
        //     rpe: '',
        //     reps: '',
        //     rest: '',
        //     type: '',
        //     subs: '',
        //     tips: '',
        //     po_frequency: 0,
        //     po_weight: 0,
        //     id: '',
        // }
        let workout: Day_Workout = {};
        return {
            workout: workout,
            playCircleOutline,
            stopCircleOutline,
            timer_ref: 0,
            timer_val: "00:00",
            total_seconds: 0,
            sets_done: 0,
        };
    },
    created() {
        const workouts = full_body_workouts.find((w) => w.id == this.$route.params.id);
        this.workout = workouts?.workouts.find((w:Day_Workout) => w.id == this.$route.params.idx) || {};
    },
    methods: {

        timer_start() {
            // console.log(LocalNotifications)
            
            const update_timer = () => {
                ++this.total_seconds;
                let min = (Math.floor(this.total_seconds / 60) + "").padStart(2, "0");
                let sec = ((this.total_seconds % 60) + "").padStart(2, "0");
                this.timer_val = min + ":" + sec;
            };
            send_notification(this.workout?.rest[0]);
            this.timer_ref = setInterval(update_timer, 1000);
        },
        stop_timer() {
            clearInterval(this.timer_ref);
            this.timer_val = "00:00";
            this.total_seconds = 0;
        },
    },
});

function send_notification (minute:any) {
    let timer = Number(minute) * 60;
    LocalNotifications.schedule({
      notifications: [
        {
          title: "Lift!",
          body: "Minimum rest time has been reached",
          id: 1,
          schedule: {
            at: new Date(Date.now() + 1000 * timer) // in a minute
          }
        }
      ]
    });
}

</script>

<style>
ion-grid {
    text-align: center;
}
ion-col > p:first-of-type {
    background-color: rgb(255 255 255 / 10%);
    margin-left: auto;
    margin-right: auto;
    width: 80%;
}
#timer_row {
    border-top: 6px double #333;
}
#timer_row ion-col:first-of-type {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
