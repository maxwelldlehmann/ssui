<script lang="ts">
    import "$lib/main.css"
    import "$lib/reset.css"
    import { page } from '$app/stores';  
    let menuOpen = true
</script>
<header>
    <div class="icon-button" on:click={() => {menuOpen = !menuOpen}}>
        <img src="/icons/menu.svg" alt="menu">
    </div>
    <img src="favicon.png" alt="ssui logo">
    <p class="title">SSUI</p>
</header>

<div class="wrapper">
    {#if menuOpen}
    <nav>
        <a href="/" class={$page.url.pathname === "/" ? "active-link": ""}>Home</a>
        <a href="/text" class={$page.url.pathname === "/text" ? "active-link": ""}>Text</a>
    </nav>
    {/if}
    <div class="content">
        <slot/>
    </div>
</div>

<style>
    header {
        background-color: #FFFFFF17;
        height: 48px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: start;
        padding: 8px;
        gap: 8px;
        box-shadow: 0 4px 4px black;
        z-index: -1000;
    }
    nav {
        display: flex;
        flex-direction: column;
        width: 164px;
        min-width: 164px;
        height: calc(100vh - 84px);
        border-right: 1px solid #5F5F5F;
        box-shadow: 6px 0 4px  -4px #222 , -6px 0 4px  -4px #222;
    }
    a {
        width: 100%;
        color: var(--text-secondary);
        text-decoration: none;
        height: auto;
        display: flex;
        align-items: center;
        padding: 8px 0 8px 8px;
        border-left: 4px solid transparent;
        font-size: 16px;
    }
    .active-link {
        border-left: 4px solid #54A6F3;
        background-color: rgba(255, 255, 255, 0.07);
    }
    a:hover {
        background-color: rgba(255, 255, 255, 0.05);
        cursor: pointer;
    }
    .wrapper {
        display: flex;
    }
    .title {
        font-size: 16px;
        font-weight: 700;
        margin: 4px 0 0 0;
        padding: 0;
    }
    .content {
        padding: 16px 24px;
        overflow-y: auto;
        height: calc(100vh - 84px);
    }
    .icon-button:hover {
        border-radius: 100px;
        background-color: rgba(255, 255, 255, 0.09);
        cursor: pointer;
    }
    img {
        height: 24px;
        width: 24px;
    }
</style>
