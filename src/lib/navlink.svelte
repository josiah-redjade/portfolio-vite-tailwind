<script>
    export let config = {
        href: "/",
        content: "",
        selected: false
    };
</script>

<a 
    on:mousedown 
    href={config.href} 
    style="min-width: max-content;"
    class:text-yellow-500={config.selected} 
    class:hover:text-yellow-500={config.selected} 
    class:underline={config.selected}
    class="
        text-xl
        mx-5 
        hover:opacity-80
        max-sm:mx-2 
        active:text-yellow-500
        bg-gradient-to-b  
        rounded-[100px] 
        transition
        p-1 
         w-fit
        "
        >
    {config.content}
</a>