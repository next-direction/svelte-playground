<script>
    export let color = '#FFFFFF';
    export let size = '20px';
</script>

<style>
    .lds-ellipsis {
        margin: auto;
        position: relative;
        width: 4em;
        height: 1em;
    }
    .lds-ellipsis div {
        position: absolute;
        top: 0.2em;
        width: 0.6em;
        height: 0.6em;
        border-radius: 50%;
        animation-timing-function: cubic-bezier(0, 1, 1, 0);
    }
    .lds-ellipsis div:nth-child(1) {
        left: 0.4em;
        animation: lds-ellipsis1 0.6s infinite;
    }
    .lds-ellipsis div:nth-child(2) {
        left: 0.4em;
        animation: lds-ellipsis2 0.6s infinite;
    }
    .lds-ellipsis div:nth-child(3) {
        left: 1.6em;
        animation: lds-ellipsis2 0.6s infinite;
    }
    .lds-ellipsis div:nth-child(4) {
        left: 2.8em;
        animation: lds-ellipsis3 0.6s infinite;
    }
    @keyframes lds-ellipsis1 {
        0% {
            transform: scale(0);
        }
        100% {
            transform: scale(1);
        }
    }
    @keyframes lds-ellipsis3 {
        0% {
            transform: scale(1);
        }
        100% {
            transform: scale(0);
        }
    }
    @keyframes lds-ellipsis2 {
        0% {
            transform: translate(0, 0);
        }
        100% {
            transform: translate(200%, 0);
        }
    }
</style>

<div class="lds-ellipsis" style="font-size: {size}">
    <div style="background: {color}"></div>
    <div style="background: {color}"></div>
    <div style="background: {color}"></div>
    <div style="background: {color}"></div>
</div>