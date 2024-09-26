<script>
    import { username, user } from './user';
  
    function signout() {
      user.leave();
      username.set('');
    }
  </script>
  
  <header>
  <h1>Hello There!!</h1>
    {#if $username}
      <div class="user-bio">
        
        <span>Hello fella <strong>{$username}</strong></span>
        <img src={``} alt="avatar" /> 
      </div>
      <br>
  
      <button class="signout-button" on:click={signout}>Sign Out</button>
  <br>
      {:else}
  
        <h3> Start a E2E chat  </h3>
    {/if}
  </header>