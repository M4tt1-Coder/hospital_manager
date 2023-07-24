<script lang="ts">
    import {goto } from "$app/navigation";
	import {deleteIllness} from "../../../lib/helper";
    import type {PageData} from './$types';
    import {fade} from "svelte/transition";
    export let data: PageData;

    function removeAllChildNodes(parent: Element): void {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

    function fill_data_of_illness(name: string){
        var div = document.getElementById('fields');
        const illnesses_infos = document.querySelector('#fields');        
        if (illnesses_infos !== null) {
            removeAllChildNodes(illnesses_infos);
        }

        for(var i = 0; i < data.illnesses.length; i++){
            if (data.illnesses[i].name == name){
                //create illness name
                let name = document.createElement('label');
                let name_text = "Name: " + data.illnesses[i].name;
                name.innerText = name_text;
                name.append(document.createElement('br'));
                //create illness kind
                let kind = document.createElement('label');
                let kind_text = "Kind: " + data.illnesses[i].kind;
                kind.innerText = kind_text;
                kind.append(document.createElement('br'));
                //create illness description
                let cbh = document.createElement('label');
                let cbh_text = "Can it be healed?: " + data.illnesses[i].can_be_healed.toString();
                cbh.innerText = cbh_text;
                cbh.append(document.createElement('br'));
                
                //append children to div
                div?.appendChild(name);
                div?.appendChild(kind);
                div?.appendChild(cbh);
            }    
        }
    }

    //show the information of a specific
    let show_illness_info = false;
    //the name of the illness
    let illness_name = "";
</script>

<div transition:fade id="body">
    <button type="button" on:click={() => goto('search')}>Search</button>
    <button type="button" on:click={() => goto('../../')}>Patient</button>
    <p></p>
    <div id="go_to_cr_ill">
        <button type="button" on:click={() => goto("../api/cr_ill")}>
            Create Illness
        </button>
    </div>
    <!--listing of all illness-->
    <div id ="list_illness" class="card p-4 w-full text-token space-y-4">
        {#await data.illnesses}
            <p>...getting illnesses</p>
        {:then illnesses} 
            {#if typeof illnesses == "string"}
                <p>{illnesses}</p>
            {:else}
                <h4>Illnesses: </h4>
                <ul>
                    {#each illnesses as illness}
                        <li>
                            <p>{illness.name}</p>
                        </li>
                    {/each}
                </ul>
            {/if}
        {/await}
    </div>

    <div id="info_fields">
        <label>
            Show the illness information: 
            <input type="checkbox" bind:checked={show_illness_info} />
        </label>
        <p></p>
        {#if show_illness_info}
            <label>
                Illnessname: 
                <select bind:value={illness_name}>
                    {#each data.illnesses as illness}
                        <option value={illness.name}>
                            {illness.name}
                        </option>
                    {/each}
                </select>
                <button type="button" on:click={() => deleteIllness(illness_name)} data-sveltekit-reload >Delete</button>
            </label>
            <button type="button" on:click={() => fill_data_of_illness(illness_name)}>Load Data ...</button>
            <div transition:fade id="fields">

            </div>
        {/if}

    </div>
</div>
<style>
    #body > button {
        background-color: chartreuse;
        border-radius: 3px;
        border: 2px solid black;    
        color: black;
        padding: 5px 10px;
        text-align: center;
        position: static;
    }

    #go_to_cr_ill > button {
        background-color: red;
        border-radius: 3px;
        border: 2px solid gray;
        color: white;
        position: static;
    }

    #list_illness{
        border: 3px solid black;
        border-radius: 5px;
        font-family: Arial, Helvetica, sans-serif;
        text-align: left;
        padding: 10px 10px;
        background-color: darkorange;
    }

    #info_fields{
        border: 3px solid black;
        border-radius: 5px;
        font-family: Arial, Helvetica, sans-serif;
        text-align: left;
        padding: 10px 10px;
        background-color: palevioletred;
    }

    #fields{
        border: 3px solid black;
        border-radius: 5px;
        font-family: Arial, Helvetica, sans-serif;
        text-align: left;
        padding: 10px 10px;
        background-color: palegreen;
    }
</style>