<script lang="ts">
    const styles = {
        normal: "text-slate-800 bg-slate-400",
        error: "text-red-800 bg-red-300",
        success: "text-green-800 bg-green-400",
        selected: "bg-blue-500  text-white"

    };
    export let variant : keyof typeof styles = "normal";
    export let selected = false;

</script>

<button 
    on:click
    class={`${selected ? styles['selected'] : styles[variant]} p-2 px-4 text-lg rounded-md hover:opacity-80 active:opacity-70  m-2`}>
    <slot/>
</button>