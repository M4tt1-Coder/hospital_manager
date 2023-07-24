<script lang="ts">
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';
	import { fade, fly } from 'svelte/transition';
	export let data: PageData;

	//searchstring holder
	let search_string = '';

	//use reactivity to search for the search string
	$: matching_patients = data.patients.filter((patient: any) => {
		if(patient.name.includes(search_string) || patient.illness.includes(search_string))
		{
			return patient;
		}
	});

	//filter the illnesses by the entered string from the user
	$: matching_illnesses = data.illnesses.filter((illness: any) =>{
		if(illness.name.includes(search_string) || illness.kind.includes(search_string)){
			return illness;
		}
	});

	//use for opening dashboard
	export let dash_patient_name = "";	
	function open_patients_dashboard(name: string){
		dash_patient_name = name;
		goto('pat_dashboard');
	}
	
	export let dash_illness_name = "";
	function open_illnesses_dashboard(name: string){//usually with a ID 
		dash_patient_name = name;
		goto("ill_dashboard");
	}

    // work trough the svelte tutorial: https://learn.svelte.dev/tutorial/your-first-component

	//svelte components have children -> on:click event one button  overrides one button thats its children

	//to show search patients results
	let show_patients = true;
	//to show search illness results
	let show_illness = true;
</script>

<!--Add 2 linkbuttons to illness & patient homepage-->

<div transition:fade id="container">
	<div class="GoBack">
		<button on:click={() => goto('../../')}>Go to Patients</button>
		<button on:click={() => goto('illness')}>Go to Illness</button>
	</div>
	<div id="searchbar">
		<h2>Search</h2>
		<!--Add a animation for loading -> https://www.youtube.com/watch?v=p_zsc5XUtuc-->
		<input type="text" id="search-input" bind:value={search_string} placeholder="Search" />
	</div>
	<p />
	<div id="hide_results">
		<label>
			Show Patients:
			<!--select if patients result should be shown-->
			<input type="checkbox" bind:checked={show_patients} placeholder="Hide Patients" />
			||
		</label>
		<label>
			Show Illnesses:
			<!--select if illnesses result should be shown-->
			<input type="checkbox" bind:checked={show_illness} placeholder="Hide Illnesses" />
		</label>
	</div>
	<p />
	<div id="fields">
		{#if show_patients}
			<div id="patients" class="category" >
				{#each matching_patients as patient}
					<label in:fly={{duration: 800}} out:fade={{duration: 200}}>
						- {patient.name}
						| 
						<button type="button" on:click={() => open_patients_dashboard(patient.name)}>Open</button> 
					</label>
					<p></p>
				{/each}
			</div>
		{/if}
		{#if show_illness} 
			<div id="illnesses" class="category">
				{#each matching_illnesses as illness}
					<label in:fly={{duration: 800}} out:fade={{duration: 200}}>
						- {illness.name}
						| 
						<button type="button" on:click={() => open_illnesses_dashboard(illness.name)}>Open</button>
					</label>
					<p></p>
				{/each}
			</div>	
		{/if}
	</div>
</div>

<style>
	#container {
		font-family: Arial, Helvetica, sans-serif;
		text-align: center;
	}

	.GoBack{
		text-align:left;
	}

	#patients{
		text-align: left;
	}

	#fields {
		display: flex;
		
	}

	#fields > .category {
		flex: 1;
		padding: 10px;
		border: 2px solid black;
		border-radius: 4px;
	}

	#illnesses{
		text-align: left;
	}

	#searchbar {
		align-content: center;
		text-align: center;
	}
</style>
