import Vue from 'vue'
import Form from "./Form"
import TextField from "./TextField"
import SelectField from "./SelectField"
import SubmitButton from "./SubmitButton"


[
    Form,
    TextField,
    SelectField,
    TextField,
    SubmitButton

].forEach(c=>{
    Vue.component(c.name,c);
})