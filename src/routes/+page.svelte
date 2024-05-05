<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<script lang="ts">

	import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
	import Logo from './logo.svelte';
	import About from './about.svelte';
	import Newsletter from './newsletter.svelte'
	import People from './people.svelte';
	let tabSet: number = 0;


</script>



<div class="container h-screen mx-auto flex justify-center items-center">

	<div class="space-y-10 text-center flex flex-col items-center">


		<!-- Animated Logo -->
		<figure>
			<section class="img-bg" />
			<h1 class="h1">
				<span class="bg-gradient-to-br from-emerald-700 to-amber-300 bg-clip-text text-transparent box-decoration-clone">ColorCoded.</span>
			</h1>
			<h3 class="h3">
				<span class="bg-gradient-to-br from-amber-500 to-yellow-500 bg-clip-text text-transparent box-decoration-clone">By ColorStack.</span>
			</h3>
			
			<div class="space-y-10 text-center flex flex-col items-center">
				<Logo  />
			</div>

		</figure>
		<!-- / -->

	</div>


</div>


<div class="secondary_container h-screen flex mx-auto justify-center items-center h-full">
    <div class="text-center w-full overflow-auto"> <!-- Ensure this div manages overflow -->
        <TabGroup class="text-center w-full">
            <Tab bind:group={tabSet} name="tab2" value={0}>About Us</Tab>
            <Tab bind:group={tabSet} name="tab2" value={1}>Events</Tab>
            <Tab bind:group={tabSet} name="tab3" value={2}>People</Tab>
            <Tab bind:group={tabSet} name="tab3" value={3}>Newsletter</Tab>
            <!-- Tab Panels -->
            <svelte:fragment slot="panel">
                {#if tabSet === 0}
                    <About />
                {:else if tabSet === 1}
                    <!-- Events commented out -->
                {:else if tabSet === 2}
                    <People />
                {:else if tabSet === 3}
                    <Newsletter />
                {/if}
            </svelte:fragment>
        </TabGroup>
    </div>
</div>


<!-- <div class="container h-screen flex mx-auto justify-center items-center">
    <div class="text-center w-full">
        <TabGroup class="text-center w-full">
            <Tab bind:group={tabSet} name="tab2" value={0}>About Us</Tab>
            <Tab bind:group={tabSet} name="tab2" value={1}>Events</Tab>
            <Tab bind:group={tabSet} name="tab3" value={2}>People</Tab>
            <Tab bind:group={tabSet} name="tab3" value={3}>Newsletter</Tab>

            <svelte:fragment slot="panel">
                {#if tabSet === 0}
                    <About />
                {:else if tabSet === 1}
                    
                {:else if tabSet === 2}
                    <People />
                {:else if tabSet === 3}
                    <Newsletter />
                {/if}
            </svelte:fragment>
        </TabGroup>
    </div>
</div> -->



<style lang="postcss">
	figure {
		@apply flex relative flex-col;
	}
	figure svg,
	.img-bg {
		@apply w-64 h-64 md:w-80 md:h-80;
	}

	.img-bg {
		@apply absolute z-[-1] rounded-full blur-[50px] transition-all;
		animation: pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite,
			glow 5s linear infinite;
	}

	@keyframes glow {
		0% {
			@apply bg-primary-400/50;
		}
		33% {
			@apply bg-secondary-400/50;
		}
		66% {
			@apply bg-tertiary-400/50;
		}
		100% {
			@apply bg-primary-400/50;
		}
	}

	@keyframes pulse {
		50% {
			transform: scale(1.5);
		}
	}

	/* .text-center {
    width: 100%; 
    overflow: hidden; 
	} */

	.secondary_container {	
		display: flex;
		flex-direction: column; /* Stack children vertically */
		justify-content: center; /* Center horizontally in the flex container */
		overflow: auto;
		align-items: center; /* Center vertically in the flex container */
		height: 100vh; /* Full viewport height */
	}

	

</style>


