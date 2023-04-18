<template>
    <form @submit.prevent="handle_submit">
        <input type="email" required placeholder="Email" v-model="email">
        <input type="password" required placeholder="Password" v-model="password">
        <div class="error">{{error}}</div>
        <button>Login</button>
    </form>
</template>

<script lang="ts">
import useLogin from '@/composables/useLogin';
import {useRouter} from 'vue-router';
// import useSignup from '@/composables/useSignup';
import { ref } from '@vue/reactivity'
export default {
    setup() {

        const {error, login} = useLogin();
        // //refs
        const email = ref('');
        const password = ref('');
        const router = useRouter();
        // const {signup, error} = useSignup();
        
        const handle_submit = async () => {
        //     await signup(email.value, password.value);

        //     if (!error.value) {
        //         console.log('success');
        //     }
            await login(email.value, password.value);
            if (!error.value) {
                router.push('/home');
            }
        }

        return {email,password, handle_submit, error}

    }
}
</script>

<style>

</style>