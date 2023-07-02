<script lang="ts">
    import { getPatients } from "../lib/index" 
    import {Patient} from "../lib/models"
    //4 svelte page files for all needed pages
    //work trough all and try features of svelte
    //https://www.youtube.com/watch?v=4soqks5zBLI
    //https://github.com/ivanhofer/sveltekit-typescript-showcase -> code examples
    //https://svelte.dev/tutorial/else-blocks

    //open create patient svelte page
    function open_create_patient_svelte(){

    }

    

    async function load_patient_list(){
        var patients  = await getPatients();
        
        if (typeof patients === "string"){
            console.log(patients);
        }else{
            return patients;
        }
    }
    
    var patients = getPatients();
    console.log(patients);

    //var patients = [{name: "Peter", age: 12}, {name: "John", age:23}]
</script>

<div class="patient_page">
    <div class="grid grid-cols-1 gap-4 min-w-full md:min-w-[750px]">
        <h3 class="text-center py-6">Create a Patient</h3>
        <div class="card p-4 w-full text-token space-y-4">
            <button type="button" on:click={() => load_patient_list} class="btn btn-sm variant-filled-secondary">
                Click Here!
                <!--open other svelte page for creating patient
                ask Liam:
                    - how can I open other svelte page in browser?
                    - use of promise object?
                    - for loop in svelte?-->   
            </button>
        </div>
        <!--list of all patients-->
        <div class="card p-4 w-full text-token space-y-4">
            <!--for loop -> create check input + name of every patient-->
            <!--event when one patient was selected -> fill boxes of infofields with specific data-->
            <!-- {#each patients as patient}-->
            {#await patients}
                <p>...getting patients</p>
            {:then patients} 
                {#if typeof patients == "string"}
                    <p>{patients}</p>    
                {:else}
                    <ul>
                        {#each patients as patient}
                            <li>
                                <label>
                                    {patient.name}
                                    <input type="checkbox"><!--add onclick event that info field is filled with current selceted patient properties-->
                                </label>
                            </li>
                        {/each}
                    </ul>
                {/if}            
            {/await}


            
        </div>        
    </div>    
</div>