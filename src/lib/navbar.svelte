<script lang="ts">
    import Navlink from "./navlink.svelte";
    import { onMount } from 'svelte';



    const navlinks = [
        { content: "Home", href: "/", id: "home" },
        { content: "About Me", href: "/#about-me", id: "about-me" },
        { content: "Portfolio", href: "/#portfolio", id: "portfolio" },
        { content: "Contact", href: "/#contact", id: "contact" },
        // { content: "Blog", href: "/" },
    ];

    let selectedIndex = 0;
    let jumpingToLink : any = null;

    function navClickHandler(i: number) {
        jumpingToLink = setTimeout(()=> jumpingToLink = null, 300)
        selectedIndex = i;
    }

    onMount(()=>{
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting && jumpingToLink == null) {
                    const target = entry.target as HTMLElement;
                    console.log(target.id)
                    const index = target.getAttribute('data-index');
                    if (index) {
                        selectedIndex =  parseInt(index)
                    }
                }
            })
        })
        navlinks.forEach((link, i) => {
            const element = document.getElementById(link.id);
            if(element) {
                element.setAttribute('data-index', i.toString());
                observer.observe(element);
            }
        })
    })

</script>

<!-- NAVBAR -->
<nav class="w-screen h-16 bg-slate-800 flex items-center justify-center shadow-lg text-slate-200 font-['Quicksand'] font-semibold fixed top-0 z-50">
    {#each navlinks as link, i}
        <Navlink on:mousedown={()=>navClickHandler(i)} config={{content: link.content, href: link.href, selected: i == selectedIndex}}/>
    {/each}
</nav>