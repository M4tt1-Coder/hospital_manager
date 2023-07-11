<script lang="ts">
    import {createPatient} from "../../../lib/helper"

    //the name of the patient
    let name = "";
    //the age of the patient
    let age = 0;
    //the roomnumber of the patient
    let roomnumber = 0;
    //the illness of the patient
    let illness = "";
</script>

<div>
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
</div>