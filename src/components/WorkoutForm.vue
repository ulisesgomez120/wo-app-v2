<template>
    <ion-segment value="working" @ionChange="segmentChanged($event)">
        <ion-segment-button value="warm_up">
            <ion-label>Warm-Up</ion-label>
        </ion-segment-button>
        <ion-segment-button value="working">
            <ion-label>Working</ion-label>
        </ion-segment-button>
    </ion-segment>
    <ion-item>
        <ion-label>Weight</ion-label>
        <ion-input id="set_weight" type="number" v-model="set_weight" @focusin="select_content"></ion-input>
    </ion-item>
    <ion-item>
        <ion-label>Reps</ion-label>
        <ion-input id="set_reps" type="number" v-model="set_reps" @focusin="select_content"></ion-input>
    </ion-item>
    <ion-item>
        <ion-label>RPE</ion-label>
        <ion-input id="set_rpe" type="number" v-model="set_rpe" @focusin="select_content"></ion-input>
    </ion-item>
    <ion-item>
        <ion-label>Alt Name</ion-label>
        <ion-input id="set_alt" type="text" v-model="set_alt_name" @focusin="select_content($event)"></ion-input>
    </ion-item>
    <ion-item>
        <ion-label position="stacked">Notes</ion-label>
        <textarea id="set_notes" rows="4" v-model="set_notes"></textarea>
    </ion-item>
    <ion-button @click="complete_set" expand="full">Add</ion-button>

</template>

<script lang="ts">
/* eslint-disable */
import { IonInput, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonLabel, IonItem, IonIcon, IonItemGroup, IonList, IonGrid, IonRow, IonCol, IonSegment, IonSegmentButton, } from "@ionic/vue";
import { defineComponent, ref } from "vue";
import addWorkout from '../composables/addWorkout';
import { useRoute } from 'vue-router';

export default defineComponent({
    name: "WorkoutPage",
    components: {
        IonInput,
        IonContent,
        IonHeader,
        IonPage,
        IonTitle,
        IonToolbar,
        IonButton,
        IonLabel,
        IonItem,
        IonIcon,
        IonItemGroup,
        IonList,
        IonGrid,
        IonRow,
        IonCol,
        IonSegment,
        IonSegmentButton,
    },
    setup() {
        const route = useRoute();
        const workout_id = route.params.idx;
        const set_weight = ref(0);
        const set_reps = ref(0);
        const set_rpe = ref(0);
        const set_alt_name = ref("");
        const set_notes = ref("");
        const set_type = ref("working");
        const set_num = ref(0);
        const { load, serverTimestamp } = addWorkout();

        const complete_set = () => {
            if (!set_rpe.value) {
                set_rpe.value = 0;
            }
            const d = new Date();
            const date = d.toLocaleDateString() + " - " + d.toLocaleString('en-us', {weekday:'long'});
            let payload = {
                date,
                workout_id,
                type: set_type.value,
                weight: set_weight.value,
                reps: set_reps.value,
                rpe: set_rpe.value,
                alt_name: set_alt_name.value,
                notes: set_notes.value,
                order: set_num.value,
                created_on: serverTimestamp(),
            }
            load(payload);
        }

        return {set_weight, set_reps, set_rpe, set_alt_name, set_notes, set_type, set_num, complete_set };
    },
    methods: {
        select_content(e:any) {
            e.target.select();
        },
        segmentChanged(e: any) {
            this.set_type = e.detail.value;
        },
    },
});
</script>

<style>
ion-item {
    margin: 14px 0;
    border: 1px solid #333;
    border-radius: 6px;
    box-shadow: 0px 2px 3px #111;
}
ion-label {
    color: #444444;
}
#set_notes {
    width: 100%;
}
textarea {
    margin: 8px 0;
}
</style>
