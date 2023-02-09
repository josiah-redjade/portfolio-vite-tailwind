<script lang="ts">
    import projects from "../projects.json";
    import CoolRadioButton from "./CoolRadioButton.svelte";

    function filterProjects() {
        const filteredProjects : typeof projects = [];
        const regex = new RegExp(searchText, "i");
        projects.forEach(project => {
            if (
                (!searchText || project.description.match(regex) || project.name.match(regex))
                    && 
                (selectedTag == "all" || project.tags.includes(selectedTag))
            ) {
                filteredProjects.push(project)
            }
        });
        return filteredProjects;
    };

    function inputHandler(e: any) {
        searchText = e.target.value;
        filteredProjects = filterProjects();
    }


    const tags = ['all', ...new Set(projects.map(project => project.tags).flat())];
    const featuredProjects = [projects[2], projects[5], projects[8]];
    let selectedTag = tags[0];
    let searchText = "";
    let filteredProjects = filterProjects();

    $: { selectedTag, searchText, filteredProjects = filterProjects(); }

</script>

<section id="portfolio" class="bg-gray-500 w-screen font-['Quicksand'] justify-center items-center p-4 lg:grid lg:grid-cols-2 h-fit min-h-[100vh]">
    <div class="flex flex-col h-max p-8  justify-center items-center">
        <img src="/Laptop.svg" alt="">
        <h1 class="text-white text-6xl font-bold">Portfolio</h1>
        <p class="text-yellow-400 text-2xl font-semibold">See some of my work.</p>
    </div>
    <div class="p-8 mx-auto my-8 rounded-xl overflow-scroll overflow-x-hidden to-slate-700 from-slate-600 bg-gradient-to-b max-w-[50rem] lg:mr-0 w-9/10 h-[45rem]">
        <!-- FEATURED PROJECTS -->
        <h1 class="left-1/2 font-['Spinaker'] tracking-widest text-center uppercase text-gray-200 mb-4">Featured</h1>
        <div class="grid grid-cols-3 bg-slate-700 grid-rows-1 rounded-xl mb-8 w-full h-40">
            {#each featuredProjects as project}
                <div class="flex flex-col h-full p-4 pr-0 last:pr-4 relative">
                    <img class="h-full rounded shadow-slate-900 shadow-md object-cover flex-1" src={"/" + project.image}/>
                    <span class="absolute left-1/2 font-['Spinaker'] tracking-widest bottom-6 translate-x-[-50%] uppercase text-xs text-gray-200 bg-[rgba(0,0,0,.75)] p-2 px-4 w-max rounded ">{project.name}</span>
                </div>
            {/each} 
        </div>
        <!-- INPUT -->
    
        <!-- RADIO BUTTONS -->
        <div class="my-4">
            <div class="w-full px-2 m-2 mb-6">
                <input on:input={e => inputHandler(e)} value={searchText} class="w-full p-2 text-lg px-4 rounded-full" placeholder="Search here..."/>
            </div>
            {#each tags as tag}
                <CoolRadioButton
                    on:click={()=>selectedTag = tag}
                    selected={selectedTag == tag}>
                    {tag}
                </CoolRadioButton>
            {/each}
        </div>
        
        <div class="flex-1 pl-6">
            {#each filteredProjects as project}
                <div class="w-full flex my-8 min-h-[6rem] h-auto">
                    <!-- <div class="w-20 h-full max-sm:hidden flex items-center justify-center">
                        <img class="w-20  border-b-4 border-r-4 border-b-gray-300 border-r-gray-500 h-20 object-cover mr-8 rounded-md opacity-90" src={project.image || "EmptyCode.png"}/>
                    </div> -->
                    <div class="flex-1 w-full flex flex-col p-4 px-6 text-gray-200 bg-slate-600 shadow-md shadow-gray-700 rounded">
                        <a href={project.link} class="mb-1 w-full hover:underline text-gray-50 text-lg leading-0 font-bold">{project.name}</a>
                        <p class="leading-[1.5] w-full break-words">
                            <img class="w-16 h-16 float-right  border-b-4 border-r-4 border-b-gray-300 border-r-gray-500 h-20 object-cover m-2 ml-3 mt-0 rounded-md opacity-90" src={project.image || "EmptyCode.png"}/>
                            {project.description}

                        </p>
                        <div class="mt-2 w-full flex flex-wrap">
                            {#each project.tags as tag}
                                <span class="text-xs opacity-90 bg-yellow-400 mb-2 inline-block font-semibold rounded-full text-yellow-800 p-1 px-2 mr-2">{tag}</span>
                            {/each}
                            {#each project.langs as lang}
                            <span class="text-xs opacity-90 bg-blue-400 inline-block  mb-2 font-semibold rounded-full text-blue-800 p-1 px-2 mr-2">{lang}</span>
                             {/each}
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>

</section>