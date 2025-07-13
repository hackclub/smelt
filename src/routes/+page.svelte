<script lang="ts">
  import { onMount } from 'svelte';

  // Helper to get next Wednesday at noon EDT (UTC-4 or UTC-5 depending on DST)
  // For every 100 counts, decrease target time by 1 hour
  function getNextWednesdayNoonEDT(count: number = 0) {
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
    
    // Calculate hours to subtract based on count (1 hour per 100 counts)
    const hoursToSubtract = Math.floor(count / 100);
    const targetHour = 16 - hoursToSubtract; // 16:00 UTC = noon EDT
    
    // Target date in UTC: Wednesday at adjusted time
    const target = new Date(Date.UTC(
      now.getUTCFullYear(),
      now.getUTCMonth(),
      now.getUTCDate() + daysUntilWednesday,
      targetHour, 0, 0, 0
    ));
    return target;
  }

  let targetDate = getNextWednesdayNoonEDT();
  let timeLeft = 0;
  let interval: any;
  let pageViews = 515;

  function updateTimeLeft() {
    timeLeft = Math.max(0, targetDate.getTime() - Date.now());
  }

  async function incrementPageViews() {
    try {
      const response = await fetch('/api/count', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      pageViews = data.count;
      
      // Update target date based on new count
      targetDate = getNextWednesdayNoonEDT(pageViews);
    } catch (error) {
      console.error('Failed to increment page views:', error);
    }
  }

  onMount(async () => {
    // Increment page views via API (server handles IP-based deduplication)
    await incrementPageViews();
    
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
    {pageViews} people have found this site. You're one of them...
  </div>
  <div class="text-white text-lg mt-4 opacity-75">
  #smelt
  </div>
</div>
