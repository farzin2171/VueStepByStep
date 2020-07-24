import Vue from 'vue'
import Form from "./Form"
import TextField from "./TextField"
import SelectField from "./SelectField"


[
    Form,
    TextField,
    SelectField,
    TextField

].forEach(c=>{
    Vue.component(c.name,c);
})