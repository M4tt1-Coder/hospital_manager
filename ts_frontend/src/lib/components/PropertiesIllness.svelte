<script lang="ts">
    import {slide, fly} from "svelte/transition";
    import {UpdateIllness} from "$lib/helper";
    export let illness: any;

    //all single illness properties
    let name: string = illness.name;

    let kind: string = illness.kind;

    let cbh: boolean = illness.can_be_healed;

    function checkProp(prop1: any, prop2: any){
        if (prop1 == prop2){
            return false;
        }    
        else{
            return true;
        }
    }

    $: kindChange = checkProp(kind, illness.kind);

    $: cbhChange = checkProp(cbh, illness.can_be_healed);

</script>

<div transition:slide class="property">
    <h2>Illness</h2>
    <p></p>
    <p>Name: {name}</p>
    <p></p>
    <label transition:fly>
        Kind: 
        <input type="text" bind:value={kind}/>          
    </label>
    {#if kindChange}
        <p class="notification">Changed!</p>
    {/if}
    <p></p>
    <label transition:fly>
        Can it be healed?:
        <select>
            {#if cbh}
                <option value={cbh} on:click={() => cbh = true}>Yes</option>
                <option value={cbh} on:click={() => cbh = false}>No</option>    
            {:else}
                <option value={cbh} on:click={() => cbh = false}>No</option>
                <option value={cbh} on:click={() => cbh = true}>Yes</option> 
            {/if}
        </select>
    </label>
    {#if cbhChange}
        <p class="notification">Changed!</p>
    {/if}
    <p></p>


    <button id="submit" type="button" on:click={() => {
        if (cbhChange || kindChange) {
            UpdateIllness(name, kind, cbh);
        }
    }}>Save</button>
</div>


<style>
    .property{
        font-family: Arial, Helvetica, sans-serif;
        border: 3px solid black;
        border-radius: 5px;      
        width: 340px;
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
