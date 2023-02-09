<script>
	import ActionButton from "./ActionButton.svelte";

</script>
<div class="
    w-screen
    min-h-[50rem]
    p-[7rem] 
    max-sm:p-0
    max-sm:mt-16
    mt-7 
    relative 
    h-screen  
    grid 
    grid-cols-2 
    max-[960px]:grid-cols-1 
    max-[960px]:grid-rows-2 
    max-[960px]:h-max
    bg-gradient-to-b  
    from-slate-200 
    to-slate-300">
    <div class="bg-[#5c83f9] min-w-[300px] min-h-[36rem] drop-shadow-md rounded-tl-lg rounded-bl-lg flex flex-col relative justify-between overflow-hidden">
        <div class="w-full  basis-1/5 relative z-10">
            <div class="bg-gray-300  absolute right-0 top-10 p-6 font-['Spinaker'] w-max max-sm:text-md max-sm:px-2 xl:text-lg 2xl:text-xl rounded-tl-[2rem] tracking-[0.5rem] rounded-br-[2rem]">
                FULL STACK DEVELOPER
            </div>
        </div>
        <h1 class="font-['Roboto-Bold'] basis-3/5 flex flex-col justify-center tracking-tight  2xl:text-[8rem] xl:text-[6rem] text-[4rem] text-center drop-shadow-lg leading-none text-white font-bold z-10">
            <div class=" font-['Quicksand'] mt-[-2rem] tracking-normal text-4xl text-center text-slate-200">Hi, I'm</div>
           <span class="text-left pl-10 mt-5">
            Josiah Sprankle.
            </span>
        </h1>

        <div class="w-full basis-1/5  relative">
            <div class="tracking-[0.5rem] absolute max-sm:text-md max-sm:px-2  text-slate-100 left-0 bottom-16 text-left p-6 rounded-tr-[2rem] rounded-bl-[2rem] bg-[var(--blue-dark)] w-max xl:text-xl 2xl:text-2xl font-['Spinaker'] z-10">
                LET'S CONNECT.
            </div>
        </div>
        <div class="absolute bottom-10 left-10 w-full ">
            <img class="w-full" src="/CoolSquares.svg" alt=""/>
        </div>
    </div>
    <div class="bg-slate-100 min-w-[300px] min-h-[20rem] drop-shadow-md w-full h-full flex items-center justify-center overflow-hidden rounded-tr-lg rounded-br-lg">
        <img class=" saturate-0 w-3/5 h-3/4 object-cover rounded-tl-[10rem] box-content border-b-gray-300 border-b-[3rem] border-r-gray-300 border-r-[3rem] rounded-br-[10rem]" src="/josiah-profile-thanksgiving.png" alt=""/>
    </div>
    <a href="/#about-me" class="absolute left-1/2 bottom-20  translate-x-[-50%] ">
        <ActionButton>
            See More
        </ActionButton>
    </a>

</div>