<script lang="ts">
    import {slide,  fly} from "svelte/transition";
    import {UpdatePatient} from "$lib/helper";
    export let patient: any;
    export let Illnesses: any;

    //represent patient properties
    let name: string = patient.name;

    let age: number = patient.age;

    let roomnumber: number = patient.roomnumber;

    let illnesses = Illnesses;

    function checkProp(prop1: any, prop2: any){
        if (prop1 == prop2){
            return false;
        }    
        else{
            return true;
        }
    }

    //TODO - update button 
    //TODO - show all illnesses in drop box

    //if the user changed some information 
    //age
    $: ageChange = checkProp(age, patient.age);

    //roomnumber
    $: roomNumberChange = checkProp(roomnumber, patient.roomnumber);

    //illness
    let selectedIllness: string = patient.illness;/*just for the start when the start begins*/
    $: illnessChange = checkProp(selectedIllness, patient.illness);



</script>

<!--Add a popup notification -->

<div transition:slide class="property">
    <h2>Patient</h2>
    <p></p>
    <!--Cant change name because its the ID-->
    <p>Name: {name}</p>
    <p></p>
    <label transition:fly>
        Age: 
        <input type="number" bind:value={age}/>          
    </label>
    {#if ageChange}
        <p class="notification">Changed!</p>
    {/if}
    <p></p>
    <label transition:fly>
        Roomnumber:
        <input type="number" bind:value={roomnumber}/>
    </label>
    {#if roomNumberChange}
        <p class="notification">Changed!</p>
    {/if}
    <p></p>
    <label transition:fly>
        Illness:
        <select>
            {#each illnesses as illness}
                <option value={illness.name} on:click={() => {
                    selectedIllness = illness.name;
                }}>
                    {illness.name}
                </option>
            {/each}
        </select> 
    </label>
    {#if illnessChange}
        <p class="notification">Changed!</p>
    {/if}
    <p></p>
    <button id="submit" type="button" on:click={() => {
        if (ageChange || illnessChange || roomNumberChange) {
            UpdatePatient(name, age, roomnumber, selectedIllness);
        }
    }}>Save</button>
</div>

<style>
    .property{
        font-family: Arial, Helvetica, sans-serif;
        border: 3px solid black;
        border-radius: 5px;      
        width: 280px;
        padding: 10px;
        min-height: xxx;
        overflow: hidden;  
    }

    .property > .notification{
        color: red;
    }

    .property > #submit{
        font-size: 16px;
        border: 3px solid black;
        border-radius: 4px;
        background-color: blue;
        color: white;
    }
</style>
