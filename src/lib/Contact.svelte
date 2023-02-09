<script>
    import ActionButton from "./ActionButton.svelte";
</script>

<div id="contact" class="h-screen min-h-[50rem] font-['Quicksand'] bg-radial-gradient w-screen flex items-center justify-center">
 
    <form class="relative text-center from-blue-400 to-blue-500 bg-gradient-to-b p-8 min-w-[320px] max-w-[600px] rounded-xl shadow-lg w-2/3">
            <div class="relative z-10">
                <h1 class="text-6xl text-white font-semibold">Contact Me</h1>
                <h2 class="text-2xl">Let's get in touch.</h2>
                <div class="p-4 w-full">
                    <label class="block w-full font-semibold my-2 text-lg" for="name">Name</label>
                    <input class="border-2 w-full max-w-[35rem] border-gray-200 rounded-full p-1 px-4" id="name" type="text">
                </div>
                <div class="p-4 w-full">
                    <label class="block w-full font-semibold my-2 text-lg" for="email">Email</label>
                    <input class="border-2 w-full max-w-[35rem] border-gray-200 rounded-full p-1 px-4" id="email" type="email">
                </div>
                <div class="p-4 w-full">
                    <label class="block w-full font-semibold my-2 text-lg" for="message">Message</label>
                    <textarea rows="5" class="border-2 w-full max-w-[35rem] border-gray-200 rounded-xl p-1 px-4" id="message"/>
                </div>
                <div class="w-max mx-auto my-4">
                    <ActionButton>
                        Send Message
                    </ActionButton>
                </div>
            </div>
     
       
        <img src="CoolSquares.svg" class="absolute bottom-0 left-0 z-0 w-5/6" alt="">

    </form>
</div>