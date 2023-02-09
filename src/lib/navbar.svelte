<script lang="ts">
    import Navlink from "./navlink.svelte";

    const navlinks = [
        { content: "Home", href: "/" },
        { content: "About Me", href: "/#about-me" },
        { content: "Portfolio", href: "/#portfolio" },
        { content: "Contact", href: "/#contact" },
        // { content: "Blog", href: "/" },
    ];

    let selectedIndex = 0;

</script>

<!-- NAVBAR -->
<nav class="w-screen h-16 bg-slate-800 flex items-center justify-center shadow-lg text-slate-200 font-['Quicksand'] font-semibold fixed top-0 z-50">
    {#each navlinks as link, i}
        <Navlink on:mousedown={()=>selectedIndex = i} config={{content: link.content, href: link.href, selected: i == selectedIndex}}/>
    {/each}
</nav>