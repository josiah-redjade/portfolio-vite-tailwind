<script lang="ts">
    let foos = [
        { title: "The first foo", id: 1},
        { title: "The second foo", id: 2},
        { title: "The third foo", id: 3}
    ]
    function submitHandler(e: SubmitEvent) {
        e.preventDefault();
        fooCount++;
        foos = [...foos, {title: currentFoo, id: fooCount}];
        currentFoo = "";
    }
    let fooCount = 3;
    let currentFoo = "";

</script>

<div>
    <ul>
        {#each foos as foo}
            <li>{foo.title}</li>
        {/each}
    </ul>
    <form on:submit={submitHandler}>
        <input bind:value={currentFoo}/>
        <button type="submit">Add Foo</button>
    </form>
</div>