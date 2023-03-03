<script lang="ts">
    export let type : "button" | "reset" | "submit" | null | undefined = "button";
</script>

<button 
type={type} on:click on:keydown class="
    font-['Quicksand'] 
    font-bold 
    bg-yellow-500 
    rounded-lg 
    shadow-xl 
    text-slate-900 
    text-xl
    cursor-pointer
    transition
    flex
    items-center
    hover:bg-[#daa41e]
     active:bg-[#c09122]
    p-6"
    >
<slot/>
</button>