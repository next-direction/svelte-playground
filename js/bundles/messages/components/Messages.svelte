<script>
    import Spinner from '../../../compontents/ui/Spinner.svelte';

    let messages = [];
    let loading = true;

    const fetchMessages = async () => {
        try {
            const response = await fetch('https://my-json-server.typicode.com/next-direction/demo-data/messages');
            messages = await response.json();
            loading = false;
        } catch(e) {
            alert(`Fetching messages failed due to the following reason: ${e.message}`);
        }
    };

    fetchMessages();
</script>

<style>
    * {
        font-family: sans-serif;
    }

    h1 {
        font-family: sans-serif;
        font-size: 2rem;
        color: green;
    }

    h3 {
        background: lightgrey;
        padding: 0.4rem;
        margin-bottom: 0;
    }

    p {
        margin-top: 0;
        padding: 0.4rem;
        border-width: 0 1px 1px 1px;
        border-color: lightgrey;
        border-style: solid;
    }
</style>

<h1>Messages</h1>

{#if loading}
    <Spinner color="grey" size="10rem"/>
{:else}
    {#each messages as message (message.id)}
        <h3>Created at {message.date}</h3>
        <p>
            {message.message}
        </p>
    {/each}
{/if}