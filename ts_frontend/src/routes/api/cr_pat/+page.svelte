<script lang="ts">
    import {createPatient} from "../../../lib/helper"
    import {goto} from "$app/navigation"

    function Back(){
        goto("../");
    }

    //the name of the patient
    let name = "";
    //the age of the patient
    let age = 0;
    //the roomnumber of the patient
    let roomnumber = 0;
    //the illness of the patient
    let illness = "";
</script>

<div id="body">
    <div id="insertion_fields">
        <div class="form-group" id="name">
            <label for="name">Name</label>
            <input type="text" bind:value={name} class="form-control" id="name" placeholder="Name">
        </div>
        <div class="form-group" id="age">
            <label for="age">Age</label>
            <input type="text" bind:value={age} class="form-control" id="age" placeholder="Age">
        </div>
        <div class="form-group" id="roomnumber">
            <label for="roomnumber">Roomnumber</label>
            <input type="text" bind:value={roomnumber} class="form-control" id="roomnumber" placeholder="Room Number">
        </div>
        <div class="form-group" id="illness">
            <label for="illness">Illness</label>
            <input type="text" bind:value={illness} class="form-control" id="illness" placeholder="Illness">
        </div>

        <button type="button" on:click={() => {createPatient(name, age, roomnumber, illness)}}>Create</button>
    </div>
    <div id="back_to_pat">
        <button type="button" on:click={() => Back()}>Back</button>
    </div>
</div>

<style>
    #body > #insertion_fields {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: Arial, Helvetica, sans-serif;
        background-color:coral;
        border:3px solid black;
    }

    #body > #insertion_fields > .form-group > input{
        font-family: Arial, Helvetica, sans-serif;
        font-size: 16px;
        margin-bottom: 10px;
        padding: 10px;
        width: 300px;
        border-radius: 5px;
        border: 3px solid black;
        text-align: left;
        align-items:last baseline;
    }

    #body > #insertion_fields > button{
        border:2px solid black;
        background-color: blueviolet;
        color: white;
        border-radius: 15px;
    }

    #body > #back_to_pat {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: Arial, Helvetica, sans-serif;
        background-color:coral;
        border:3px solid black;
    }
</style>