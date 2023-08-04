<script lang="ts">
    import {goto} from "$app/navigation";
    import {time } from "./clock";
    import {dashboardIllnessName} from "$lib/dashboard_helper";
    import Property from "$lib/components/PropertiesIllness.svelte";
    import type {PageData} from "./$types";
    export let data: PageData;

    //get the name of the illness
    let name = "";
    dashboardIllnessName.subscribe((value) => {
        name = value;
    });
    console.log(name);

    let illness: any;

    filter_illnesses();

    //returns array with one element
    function filter_illnesses(){
        illness = data.illnesses.filter((i: any) =>{
            if (i.name === name) return i;
        });
    }

    illness = illness[0];


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
        <p>{clock_formatter.format($time)}</p>
        <button on:click={() => goto('../../')}>Go to Patients</button>
		<button on:click={() => goto('illness')}>Go to Illness</button>
    </div>

    <Property illness={illness} />
</main>

<style>
    .header{
        display:grid;
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