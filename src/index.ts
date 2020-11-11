import Vue from "vue";
import HelloComponent from "./components/Hello.vue";
import Login from './components/login/Login.vue'

let v = new Vue({
    el: "#app",
    template: `
    <div>
        Name: <input v-model="name" type="text">
        <hello-component :name="name" :initialEnthusiasm="5" />
        <Login />
    </div>
    `,
    data: { name: "World" },
    components: {
        Login,
        HelloComponent
    }
});