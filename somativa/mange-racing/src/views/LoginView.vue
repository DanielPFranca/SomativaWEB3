<script setup lang="ts">
import { useRouter } from 'vue-router';
import { reactive, ref } from 'vue';

const router = useRouter();

const credenciais = reactive({
    email: '',
    password: ''
});

const erroLogin = ref('');

const fazerLogin = async () => {
    try {

        const response = await fetch(`http://localhost:3000/login?usuario=${credenciais.email}&senha=${credenciais.password}`);
        const users = await response.json();

        if (users.length > 0) {
            erroLogin.value = '';
            router.push('/moto');

        } else {
            erroLogin.value = 'Usuário ou senha incorretos';
            alert('email ou senha errado');
        }


    } catch (error) {
        erroLogin.value = 'Erro ao fazer login';
        console.error('Erro:', error);
    }
};
</script>

<template>
    <main class="login flex align-items-center justify-content-center">
        <section class="login-container flex flex-column align-items-center justify-content-center">
            <h2 class="row-login">Login</h2>
            <div class="row-login">
                <FloatLabel>
                    <label for="email-input">Email</label> <br>
                    <input v-model="credenciais.email" type="email" id="email-input" class="input-text">        
                </FloatLabel>
            </div>
            <div class="row-login">
                <FloatLabel>
                    <label for="email-input">Senha</label> <br>
                    <input v-model="credenciais.password" type="password" id="password-input" class="input-text" />
                </FloatLabel>
            </div>
            <div class="row-login">
                <Button @click="fazerLogin" id="login-button">Entrar</Button>
            </div>
        </section>
    </main>
</template>



<style scoped lang="scss">
.login {
    width: 80vw;
    height: 75vh;
    background-size: cover;

    .login-container {
        width: 30vw;
        height: 70vh;
        background-color: rgb(150, 150, 150);
        border-radius: 30px;

        .row-login {
            margin: 1rem 0 1rem 0;

            .input-text {
                height: 2.5rem;
                width: 250px;
            }

            #login-button {
                width: 250px;
                height: 30px;
                font-weight: bold;
                background-color: rgb(94, 94, 94);
                color: black;
                border-color: black;
            }
        }
    }
}

</style>
