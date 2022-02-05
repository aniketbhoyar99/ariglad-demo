import React from 'react'

import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import TextFeildFirstNameComponent from '../form/TextFeildComponent'
import RadioFeildComponent from '../form/ReadioFeildComponents'
import CheckBoxComponent from './CheckBoxComponent'
import SimpleSelectComponent from './SimpleSelectComponent'
import MultiSelectComponent from './MultiSelectComponent'
import TodoFeildComponent from './TodoFeildComponent'
import SelectComponent from '../ValidationTest/CountryDropDown'
import StateDropDown from "../ValidationTest/StateDropDown"
import CityDropDown from '../ValidationTest/CityDropDown'
interface IFormInputs {
    firstName: string
    lastName: string
    email: any
    password: string
    confirmPassword: string
    gender: string
    checkbox: boolean
    selectBox: { label: string; value: string };
    multiSelect: any;
    state:any;
    country:any;
    city:any
    // initialName: any
}

const PersonalDetailsForm = () => {

    const [initialName, setInitialName] = React.useState<number>()
    console.log(initialName,"initialName______________")
    const schema = yup.object({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        email: yup.string().required(),
        gender: yup.string().required(),
        password: yup.string()
            .required('Password is required'),
        confirmPassword: yup.string()
            .required('Confirm Password is required')
            .oneOf([yup.ref('password')], 'Passwords must match'),
        acceptTerms: yup.boolean().required()
            .oneOf([true], 'Accept Ts & Cs is required'),
        selectBox: yup.object().shape({
            label: yup.string().required(),
            value: yup.string().required()
        }),

        multiSelect: yup.array().required(),

        country: yup.object().shape({
            label: yup.string().required(),
            value: yup.string().required()        
        }),

        state: yup.string()
            .when("country", {
                is: (selectBox2: any) => selectBox2.value === "Domain",
                then: yup.string()
                    .required('domain address is required.'),
                otherwise: yup.string().email().required('Email address is required.'),
            }
            ),
        city: yup.string()
            .when("country", {
                is: (selectBox2: any) => selectBox2.value === "Domain",
                then: yup.string()
                    .required('domain address is required.'),
                otherwise: yup.string().email().required('Email address is required.'),
            }
            ),
        // initialName: yup.string().required()

    }).required();

    const methods = useForm<IFormInputs>({
        resolver: yupResolver(schema)
    });
    const onSubmit: SubmitHandler<IFormInputs> = (data: IFormInputs) => console.log(data, "data");

    return (
        <div style={{ width: "50%", margin: "20px" }}>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <TextFeildFirstNameComponent name="firstName" label="firstName" type="text" />
                    <TextFeildFirstNameComponent name="lastName" label="lastName" type="text" />
                    <TextFeildFirstNameComponent name="email" label="email" type="email" />
                    <TextFeildFirstNameComponent name="password" label="password" type="password" />
                    <TextFeildFirstNameComponent name="confirmPassword" label="ConfirmPassword" type="password" />
                    <SimpleSelectComponent name="selectBox" />
                    <MultiSelectComponent name="multiSelect" />
                    <RadioFeildComponent name="gender" />
                    <TodoFeildComponent setInitialName={setInitialName} />
                    <CheckBoxComponent name="acceptTerms" label="i accept all mention in above" type="checkbox" />

                    {/* <SelectComponent name="country" label="Country"/>
                    <StateDropDown name="state" />
                    <CityDropDown name="city" /> */}
                    {/* <TextFeildFirstNameComponent name="AssetValue" label="Asset Value"/> */}
                    <input type="submit" style={{ marginRight: "10px" }}/>
                    <input type="button" onClick={() => methods.reset({ firstName: "", lastName: "", email: "", gender: "", password: "", confirmPassword: "", multiSelect: "" })} value="reset" />
                </form>
            </FormProvider>
        </div>
    );
}
export default PersonalDetailsForm;