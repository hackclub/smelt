<script lang="ts">
  import { onMount } from 'svelte';

  // Helper to get next Wednesday at noon EDT (UTC-4 or UTC-5 depending on DST)
  function getNextWednesdayNoonEDT() {
    const now = new Date();
    // EDT is UTC-4, EST is UTC-5. We'll use UTC-4 for simplicity (EDT).
    // Find next Wednesday
    const day = now.getUTCDay();
    // Wednesday is 3 (Sunday=0)
    let daysUntilWednesday = (3 - day + 7) % 7;
    if (daysUntilWednesday === 0 && (now.getUTCHours() >= 16)) {
      // If it's already past noon EDT today, go to next week
      daysUntilWednesday = 7;
    }
    // Target date in UTC: Wednesday at 16:00 UTC (noon EDT)
    const target = new Date(Date.UTC(
      now.getUTCFullYear(),
      now.getUTCMonth(),
      now.getUTCDate() + daysUntilWednesday,
      16, 0, 0, 0
    ));
    return target;
  }

  let targetDate = getNextWednesdayNoonEDT();
  let timeLeft = 0;
  let interval: any;
  let pageViews = 0;

  function updateTimeLeft() {
    timeLeft = Math.max(0, targetDate.getTime() - Date.now());
  }

  onMount(() => {
    // Load page views from localStorage
    const storedViews = localStorage.getItem('pageViews');
    pageViews = storedViews ? parseInt(storedViews) : 0;
    
    // Increment page views
    pageViews++;
    localStorage.setItem('pageViews', pageViews.toString());
    
    updateTimeLeft();
    interval = setInterval(() => {
      updateTimeLeft();
    }, 1000);
    return () => clearInterval(interval);
  });

  $: days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  $: hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  $: minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  $: seconds = Math.floor((timeLeft / 1000) % 60);
</script>

<div class="flex flex-col items-center justify-center w-full h-screen">
  <div class="countdown">
    {#if timeLeft > 0}
      {#if days > 0}
        {days}d
      {/if}
      {hours.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
    {:else}
      00:00:00
    {/if}
  </div>
  <div class="text-white text-lg mt-4 opacity-75">
    Page Views: {pageViews}
  </div>
</div>
