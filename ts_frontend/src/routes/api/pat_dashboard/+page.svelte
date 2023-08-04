<script lang="ts">
    import Property from '$lib/components/PropertiesPatient.svelte';
    import {goto} from '$app/navigation';
    import { time } from './clock';
	import type {PageData} from './$types';
    import {dashboardPatientName} from "$lib/dashboard_helper";
    export let data: PageData;

    //look up how url querystrings work in general
    //how to use them in svelte
    //use stores    

    //name of the specific patient which's information should be shown
    let name = "";
    dashboardPatientName.subscribe((value) => {
        name = value;
    });
    console.log(name);

    //instance for the patient which was selected by the user
    let patient: any;

    filter_patients();

    //returns array with one element
    function filter_patients(){
        patient = data.patients.filter((p: any) => {
            if (p.name == name) return p;
        });

    }

    //array to object
    patient = patient[0];    

    const clock_formatter = new Intl.DateTimeFormat(
        'en',
        {
            hour12: true,
            hour: 'numeric',
            minute: '2-digit',
            second: '2-digit'
        }
    );

</script>

<main>
    <div class="header">
        ™<p>{clock_formatter.format($time)}</p>
        <button on:click={() => goto('../../')}>Go to Patients</button>
		<button on:click={() => goto('illness')}>Go to Illness</button>
    </div>

    <Property patient={patient} Illnesses={data.illnesses}/>
</main>

<!--create a component for every field-->

<style>
    .header{
        display: grid;
        padding: 4px;
        grid-template-columns: repeat(3, 7em);
    }

    .header > button{
        width: 100px;
        height: 30px;
    }

    main{
        font-family: Arial, Helvetica, sans-serif;
    }
</style>