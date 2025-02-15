async function fetchTime() {
  try {
    let response = await fetch('https://worldtimeapi.org/api/timezone/Etc/UTC');
    let data = await response.json();
    console.log('Current UTC Time:', data.datetime);
  } catch (error) {
    console.error('Error fetching time:', error);
  }
}

fetchTime();
