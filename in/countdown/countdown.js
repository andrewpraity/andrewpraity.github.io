simplyCountdown('.simply-countdown', { 
        year: 2024, // required
        month: 2, // required
        day: 24, // required
        hours: 15, // Default is 0 [0-23] integer 
        minutes: 0, // Default is 0 [0-59] integer
        words: { //words displayed into the countdown
            days: { singular: 'hari', plural: 'hari' },
            hours: { singular: 'jam', plural: 'jam' },
            minutes: { singular: 'menit', plural: 'menit' },
            seconds: { singular: 'detik', plural: 'detik' }
},
});
