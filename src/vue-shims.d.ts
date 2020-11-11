declare module "*.vue" {
    import Vue from "vue";
    export default Vue;
}
//It is automatically included by TypeScript, and it tells it that anything
// imported that ends in .vue has the same shape of the Vue constructor itself