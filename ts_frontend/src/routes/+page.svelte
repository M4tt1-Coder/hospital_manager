<script lang="ts">
	import { goto } from "$app/navigation";
    import type {PageData} from './$types';
    import {deletePatient} from "../lib/helper"
    export let data: PageData;

    //open create patient svelte page
    function open_create_patient_svelte(){
        goto("/api/cr_pat");
    }

    function open_illness_svelte(){
        goto("/api/illness");
    }

    function open_search_svelte(){
        goto("/api/search");
    }

    function removeAllChildNodes(parent: Element): void{
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);            
        }        
    }

    function fill_data_of_patient(name: string){
        var div = document.getElementById("fields");
        
        const patient_infos = document.querySelector("#fields");
        if (patient_infos !== null){
            removeAllChildNodes(patient_infos);
        }

        for(var i=0; i<data.patients.length; i++){
            if (data.patients[i].name === name){
                //fill data of patient
                //create patient name
                let name = document.createElement("label");
                let name_text = "Name: " + data.patients[i].name;
                name.innerText = name_text;
                name.append(document.createElement("br"));
                //create patient age
                let age = document.createElement("label");
                let age_text = "Age: " + data.patients[i].age.toString();
                age.innerText = age_text;
                age.append(document.createElement("br"));
                //create patient roomnumber
                let roomnumber = document.createElement("label");
                let roomnumber_text = "Roomnumber: " + data.patients[i].roomnumber.toString();
                roomnumber.innerText = roomnumber_text;
                roomnumber.append(document.createElement("br"));
                //create patient email
                let illness = document.createElement("label");
                let illness_text = "Illness: " + data.patients[i].illness;
                illness.innerText = illness_text;
                illness.append(document.createElement("br"));

                //append children to div 
                div?.appendChild(name);
                div?.appendChild(age);
                div?.appendChild(roomnumber);
                div?.appendChild(illness);
            }
        }
    }

    //hide or show info fields
    let show_info_fields = false;
    //binding variable for name of patient
    let patient_name = "";
</script>

<div id="patient_page">
    <button type="button" on:click={() => open_search_svelte()}>Search</button>
    <button type="button" on:click={() => open_illness_svelte()}>Illness</button>
    <div id="entrance" class="grid grid-cols-1 gap-4 min-w-full md:min-w-[750px]">
        <h3 class="text-center py-6">Create a Patient</h3>
        <div id="open_cr_pat" class="card p-4 w-full text-token space-y-4">
            <button type="button" on:click={() => open_create_patient_svelte()} class="btn btn-sm variant-filled-secondary">
                Click Here!
            </button>
        </div>
        <!--list of all patients-->
        <div id="list_patients" class="card p-4 w-full text-token space-y-4">
            <!--for loop -> create check input + name of every patient-->
            <!--event when one patient was selected -> fill boxes of infofields with specific data-->
            <!-- {#each patients as patient}-->
            {#await data.patients}
                <p>...getting patients</p>
            {:then patients} 
                {#if typeof patients == "string"}
                    <p>{patients}</p>    
                {:else}
                    <h4>Patients: </h4>
                    <ul>
                        {#each patients as patient}
                            <li>
                                <p>{patient.name}</p>    
                            </li>
                        {/each}
                    </ul>
                {/if}            
            {/await}
        </div>        
    </div>

    <div id="info_fields">
        <label>
            Show the patient fields: 
            <input type="checkbox" bind:checked={show_info_fields}/> 
        </label>
        <p></p>
        {#if show_info_fields}
            <label>
                Patientname:
                <!-- <input type="text" bind:value={patient_name}/>-->
                <select bind:value={patient_name}>
                    {#each data.patients as patient}
                        <option value={patient.name}>
                            {patient.name}
                        </option>
                    {/each}
                </select>
                <button type="button" on:click={() => deletePatient(patient_name)} data-sveltekit-reload class="btn btn-sm variant-filled-secondary">Delete</button>
            </label> 
            <button type="button" on:click={() => fill_data_of_patient(patient_name)}>Load Data ...</button>
            <div id="fields">

            </div>
        {/if}
    </div>
</div>

<style>
    #patient_page > #entrance {
        background-color: whitesmoke;
        border-radius: 2px;
        text-align: left;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        border: black 1px solid;
    
    }


    #patient_page > #info_fields {
        font-family:Arial, Helvetica, sans-serif;
        border-radius: 15px;
        border: black 4px solid;
    }

    #patient_page > #info_fields > #fields {
        left: 125px;
        /* position: fixed; */
        text-align: center;
    }

</style>