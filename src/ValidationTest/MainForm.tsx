import React from 'react'
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import CountryDropDown from '../ValidationTest/CountryDropDown'
import StateDropDown from "../ValidationTest/StateDropDown"
import CityDropDown from '../ValidationTest/CityDropDown'

interface IFormInputs {
    state: string;
    country: string;
    city: string
}

const MainForm = () => {
    const [selectedCountry, setSelectedCountry] = React.useState();
    const [selectedState, setSelectedState] = React.useState();

    const country = [
        { value: "india", cid: 1, label: "india" },
        { value: "pakistan", cid: 2, label: "pakistan" },
        { value: "Austrelia", cid: 3, label: "Austrelia" }
    ]

    const state = [
        { value: "maharastra", cdi: 1, sti: "b", label: "maharastra" },
        { value: "lahor", cdi: 2, sti: "c", label: "gujrat" },
        { value: "ovel", cdi: 3, sti: "v", label: "ovel" }
    ]
    const city = [
        { value: "mumbai", sti: "b", label: "mumbai" },
        { value: "islamabad", sti: "c", label: "islamabad" },
        { value: "melborn", sti: "v", label: "melborn" }
    ]

    const schema = yup.object({
        country: yup.object()
            .shape({
                label: yup.string(),
                value: yup.string()
            }),
        state: yup.object()
            .when("country", {
                is: (country: any) => !!country.value,
                then: yup.object()
                    .required('state is required.'),
                otherwise: yup.object()
            }
            ),
        city: yup.object()
            .when(['country', 'state'], {
                is: (country: any, state: any) => !!country.value || !!state.value,
                then: yup.object()
                    .required('city is  is required.'),
                otherwise: yup.object(),
            }
            ),
    }).required();

    const methods = useForm<IFormInputs>({
        resolver: yupResolver(schema)
    });

    const onSubmit: SubmitHandler<IFormInputs> = (data: IFormInputs) => console.log(data, "data");

    return (

        <div style={{ width: "50%", margin: "20px" }}>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <CountryDropDown name="country" country={country} />
                    <StateDropDown name="state" setSelectedCountry={setSelectedCountry} setSelectedState={setSelectedState} state={state} />
                    <CityDropDown name="city" city={city} selectedState={selectedState} />
                    <input type="submit" style={{ marginRight: "10px" }} />
                </form>
            </FormProvider>
        </div>
    );
};
export default MainForm;