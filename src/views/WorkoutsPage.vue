<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <ion-header :translucent="true">
                <ion-toolbar>
                    <ion-buttons slot="start">
                        <ion-back-button></ion-back-button>
                    </ion-buttons>
                    <ion-title> Workouts </ion-title>
                </ion-toolbar>
            </ion-header>

            <div class="container">
                <ion-list class="list">
                    <ion-item-group>
                        <ion-item v-for="(wo) in workouts" :key="wo.name" @click="workout_detail(wo.id)">
                            <ion-label> {{ wo.name.replaceAll("_", " ") }}</ion-label
                            ><ion-button fill="clear" size="large"><ion-icon :src="chevronForwardCircleOutline"></ion-icon></ion-button>
                        </ion-item>
                    </ion-item-group>
                </ion-list>
            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
/* eslint-disable */
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonLabel, IonItem, IonIcon, IonItemGroup, IonList, IonBackButton, IonButtons } from "@ionic/vue";
import { defineComponent } from 'vue';
import { chevronForwardCircleOutline } from "ionicons/icons";
import { full_body_workouts } from "../workout_data";
import router from '@/router';

interface WO_Data {
    chevronForwardCircleOutline: string;
    workouts: object[];
}
export default defineComponent({
    name: "WorkoutsPage",
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
        IonBackButton
    },
    data() {
        const wo_data: WO_Data = {
            chevronForwardCircleOutline,
            workouts: [],
        };
        return wo_data;
    },
    mounted() {
        let wo = full_body_workouts.find((ele) => ele.id === this.$route.params.id);
        console.log(wo);
        this.workouts = wo?.workouts || [];
    },
    methods: {
        workout_detail(idx: number) {
            router.push('/workout/'+this.$route.params.id+'/'+idx);
        },
    }
});
</script>

