import Vue from "vue";
import HelloComponent from "./components/Hello.vue";
import Hello2 from './components/HelloSecond.vue';

let v = new Vue({
    el: "#app",
    template: `
    <div>
        Name: <input v-model="name" type="text">
        <hello-component :name="name" :initialEnthusiasm="5" />
        <hello-second :name="name"/>
    </div>
    `,
    data: { name: "World" },
    components: {
        HelloSecond: Hello2,
        HelloComponent
    }
});