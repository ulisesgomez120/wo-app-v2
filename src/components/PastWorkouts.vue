<template>
    <div v-if="past_workouts.length > 0">
        <details v-for="(wo, idx) in past_workouts" :key="wo.date" :open="idx === 0">
            <summary>{{ wo.date }}</summary>
            <ion-list>
                <div v-for="set in wo.set" :key="set?.created_on?.seconds ?? (new Date().getTime() / 1000)" class="history_set">
                    <span :class="{'set__warm_up': set.type === 'warm_up'}">{{set.type}}</span> 
                    <span>{{set.weight}} x {{set.reps}}</span>
                    <ion-button 
                    @click="setOpen(true, set)" 
                    id="open-modal" 
                    fill="clear" 
                    size="large" 
                    expand="block" 
                    v-if="set.notes !== '' || set.rpe > 0 || set.alt_name">
                        <ion-icon :src="informationCircleOutline"></ion-icon>
                    </ion-button>
                    <ion-button :disabled="true" size="large" v-else>
                        <ion-icon :src="informationCircleOutline"></ion-icon>
                    </ion-button>
                </div>
            </ion-list>
        </details>
    </div>
    <div v-else></div>
    <ion-modal :is-open="showModal">
      <ion-content class="ion-padding">
          <h3 class="modal_heading">RPE</h3>
          <p>{{ modal_workout.rpe || 'No RPE recorded' }}</p>
          <h3 class="modal_heading" v-if="modal_workout.alt_name">Alt Name</h3>
          <p v-if="modal_workout.alt_name">{{ modal_workout.alt_name }}</p>
        <h3 class="modal_heading">Notes</h3>
        <p>{{ modal_workout.notes || 'No notes recorded' }}</p>
        <ion-fab slot="fixed" vertical="bottom" horizontal="center">
            <ion-fab-button color="light">
                <ion-icon @click="setOpen(false, null)" :src="closeCircleOutline"></ion-icon>
            </ion-fab-button>
        </ion-fab>
      </ion-content>
    </ion-modal>
</template>

<script lang="ts">
import { IonList, IonButton, IonIcon, IonModal, IonContent, IonFab, IonFabButton, } from "@ionic/vue";
import { defineComponent, ref} from "vue";
import { informationCircleOutline, closeCircleOutline } from "ionicons/icons";
import getWorkouts from "../composables/getWorkouts";
import { useRoute } from 'vue-router';


export default defineComponent({
    name: "HomePage",
    components: {
        IonList,
        IonButton, 
        IonIcon, 
        IonModal, 
        IonContent, 
        IonFab,
        IonFabButton
    },
    setup()  {
        const route = useRoute();
        const showModal = ref(false);
        const workout_id = route.params.idx;
        const past_workouts = getWorkouts(workout_id);
        const modal_workout = ref('');
        const setOpen = (is_open : boolean, wo_data : any) => {
            showModal.value = is_open;
            if (wo_data !== null) {
                modal_workout.value = wo_data;
                console.log(modal_workout.value)
            }
        }

        return {past_workouts,informationCircleOutline,closeCircleOutline, setOpen, showModal, modal_workout};
    },
});
</script>

<style>
details {
    margin: 0 1.3rem 24px;
}
.history_set {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin: 30px 0;
}
.history_set span:first-child {
    padding: .5em .8em;
    background-color: var(--ion-color-primary);
    border-radius: 0 12px 12px 0;
}
.history_set span.set__warm_up {
    background-color: var(--ion-color-medium);
}
.modal_heading {
    display: inline-block;
    padding: 4px 6px;
    border-bottom: 1px solid #888;
    margin-top: 22px;
}

</style>
