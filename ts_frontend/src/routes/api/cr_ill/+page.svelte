<script lang="ts">
    import {createIllness} from "../../../lib/helper"
    import {goto} from "$app/navigation"

    function Back(){
        goto("../api/illness");
    }

    //the name of the illness
    let name = "";
    //the kind of the illness
    let kind = "";
    //the healability of the illness
    let cbh: boolean;
</script>

<div id="container">
    <div id="insertion_fields">
        <div class="form-group" id="name">
            <label for="name">Name</label>
            <input type="text" bind:value={name} class="form-control" id="name" placeholder="Name">
        </div>
        <div class="form-group" id="kind">
            <label for="kind">Kind</label>
            <input type="text" bind:value={kind} class="form-control" id="kind" placeholder="Kind">
        </div>
        <div class="form-group" id="cbh">
            <label for="cbh">Can it be healed</label>
            <select bind:value={cbh} class="form-control" id="cbh">
                <option value="true">Yes</option>
                <option value="false">No</option>
            </select>    
        </div>
        <button type="button" on:click={() => createIllness(name, kind, cbh)}>Create</button>
        <div id="back_to_ill">
            <button type="button" on:click={() => Back()}>Back</button>
        </div>        
    </div>
</div>

<style>
    #container{
        border: 3px solid black;
        border-radius: 10px;
        padding: 10px;
        background-color: olive;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 20px;
        align-items: center;
    }

    #insertion_fields{
        display:block;
        border: 3px solid black;
        border-radius: 10px;
        padding: 10px;
        background-color: purple;
        font-family: Arial, Helvetica, sans-serif;

    }

    .form-group{
        border:3px solid black;
        padding:5px;
        border-radius: 4px;
    }

    #insertion_fields > button{
        border: 4px solid black;
        border-radius: 10px;
        padding: 5px;
        align-self: center;
        background-color: aquamarine;
        font-family: Arial, Helvetica, sans-serif;
    }

    #back_to_ill{
        display:block;
        border: 3px solid black;
        border-radius: 10px;
        padding: 10px;
        background-color: pink;
        font-family: Arial, Helvetica, sans-serif;
    }

    #back_to_ill > button{
        border: 4px solid black;
        border-radius: 10px;
        padding: 5px;
        align-self: center;
        background-color: aquamarine;
        font-family: Arial, Helvetica, sans-serif;
    }

</style>