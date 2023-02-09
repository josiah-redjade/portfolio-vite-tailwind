<script>
    import Link from "./link.svelte";
</script>

<style scoped>
    .bottom-shadow {
        box-shadow: 0px -3rem 2rem 0rem rgba(255,255,255);
    }
</style>

<div id="about-me" class="w-screen font-['Quicksand'] pt-4">
    <section class="p-4 border-r-slate-200 border-r-2 relative bottom-shadow">
        <h1 class="text-6xl text-center m-4 font-semibold">About Me</h1>
        <p class="paragraph">
            My name is Josiah, and I am a full-stack web developer with a passion for bringing new projects to life.
            I enjoy coding because it combines creativity and problem-solving. 
            Originally a music major, I started learning how to code in 2020 by creating practice projects for fun. 
            Some are beginner projects, a few are simple websites, others are more elaborate applications with features like secure authentication, payment, real-time chat, etc. 
            All of my open-source projects are on <Link href="https://github.com/jspranklemusic">Github.</Link>
        </p>
        <p class="paragraph">
            I am currently employed at <Link href="https://redjade.net/">RedJade Sensory Software</Link> as a Junior Software Engineer, 
            where I have worked since Fall 2022. 
            I work with talented software engineers to maintain a powerful set of Sensory & Data Analysis software written with Ruby on Rails, 
            AngularJS, and other tools. I am most familiar with full-stack Javascript/Typescript development, 
            and have completed the 
            <Link href="https://www.credly.com/badges/23cf3962-2906-4ec7-897f-3e9de7449495/public_url">AWS Associate Developer Exam.</Link>
        </p>
   
        <p class="paragraph">
            As for my personal life, I am also a husband & father, and a classically-trained pianist/composer, and a Christian. I live in Staunton, Virginia and lead worship at <Link href="https://www.restorationstaunton.org/">Restoration Anglican Church.</Link> 
            If you're interested, you can check out my <Link href="https://josiahspranklemusic.com/app/">music site</Link> or my 
            <Link href="https://www.youtube.com/user/Kopaka0111/videos">YouTube page.</Link> 
        </p>
        <p class="paragraph">
            (Also, for anyone who is curious, <em>this</em> portfolio website was graphically prototyped with PenPot, and coded with Svelte and Tailwind! This combination is new to me, but I love working with it.)
        </p>
        <div class="tracking-[0.1rem] mb-10 text-slate-100 text-sm  font-['Spinaker'] m-auto w-max bg-[var(--blue-dark)] p-3 px-10 shadow-lg rounded-3xl flex  transition justify-center">
            <a target="_blank" rel="noreferrer" class="hover:scale-110 transition scale-100 flex justify-center items-center flex-col" href="https://github.com/jspranklemusic">
                <img class="w-16  m-4" src="/github.png" alt="Github Link"/>
                <span>GITHUB</span>
            </a>
            <a target="_blank" rel="noreferrer" class="hover:scale-110 transition scale-100 flex justify-center items-center flex-col" href="https://www.linkedin.com/in/josiah-sprankle-8862a1103/">
                <img class="w-16  m-4" src="/linkedin.png" alt="LinkedIn Link"/>
                <span>LINKEDIN</span>
            </a>
        </div>
    </section>
</div>