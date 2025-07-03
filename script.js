const NASA_API_KEY = 'Z1p6HS49flAmf7nE4dBvhklcF06ffU0QgdzvEDSX';

const historicalEvents = [
    {
        "date": "05-29",
        "title": "Total Solar Eclipse (Einstein's Relativity Test)",
        "year": 1919,
        "description": "A total solar eclipse on May 29, 1919 was used by Sir Arthur Eddington to test Einstein's general theory of relativity.",
        "location": "Island of Príncipe, West Africa",
        "type": "eclipse",
        "link": "https://eclipse2017.nasa.gov/testing-general-relativity"
    },
    {
        "date": "07-22",
        "title": "Total Solar Eclipse (Longest Totality, 2009)",
        "year": 2009,
        "description": "The total solar eclipse of July 22, 2009 had the longest totality of the 21st century (about 6 min 39 s).",
        "location": "Visible across South and East Asia (Pakistan, India, Nepal, Bhutan, Bangladesh, Myanmar, China, Ryukyu Islands)",
        "type": "eclipse",
        "link": "https://en.wikipedia.org/wiki/Solar_eclipse_of_July_22,_2009"
    },
    {
        "date": "08-21",
        "title": "Total Solar Eclipse (Great American Eclipse)",
        "year": 2017,
        "description": "A total solar eclipse on August 21, 2017 crossed the contiguous USA from Oregon to South Carolina.",
        "location": "Continental United States (from Oregon to South Carolina)",
        "type": "eclipse",
        "link": "https://en.wikipedia.org/wiki/Solar_eclipse_of_August_21,_2017"
    },
    {
        "date": "04-08",
        "title": "Total Solar Eclipse (North America)",
        "year": 2024,
        "description": "A total solar eclipse on April 8, 2024 will be visible across North America (from Mexico through USA into Canada).",
        "location": "Mexico, USA (15 states), and Canada (6 provinces)",
        "type": "eclipse",
        "link": "https://en.wikipedia.org/wiki/Solar_eclipse_of_April_8,_2024"
    },
    {
        "date": "08-12",
        "title": "Total Solar Eclipse",
        "year": 2026,
        "description": "A total solar eclipse on August 12, 2026 will cross Greenland, Iceland, northern Spain and Portugal.",
        "location": "Greenland, Iceland, northern Spain and Portugal",
        "type": "eclipse",
        "link": "https://en.wikipedia.org/wiki/Solar_eclipse_of_August_12,_2026"
    },
    {
        "date": "08-12",
        "title": "Perseids Meteor Shower Peak",
        "year": 2024,
        "description": "Annual Perseids meteor shower peaks on the night of Aug 11–12, 2024, with up to dozens of meteors per hour expected.",
        "location": "Northern Hemisphere (best viewing conditions)",
        "type": "meteor",
        "link": "https://science.nasa.gov/our-science/activities/prepare-for-perseids"
    },
    {
        "date": "05-19",
        "title": "Halley's Comet (Tail Crossing)",
        "year": 1910,
        "description": "On May 19, 1910 Earth passed through the tail of Halley's Comet during its 1910 apparition.",
        "location": "Observable worldwide",
        "type": "comet",
        "link": "https://en.wikipedia.org/wiki/Halley%27s_Comet"
    },
    {
        "date": "02-09",
        "title": "Halley's Comet (1986 Return)",
        "year": 1986,
        "description": "Halley's Comet made an unfavorable apparition in 1986, passing perihelion on Feb 9, 1986.",
        "location": "Visible in Southern Hemisphere (Mars-like brightness)",
        "type": "comet",
        "link": "https://en.wikipedia.org/wiki/Halley%27s_Comet"
    },
    {
        "date": "04-01",
        "title": "Comet Hale-Bopp",
        "year": 1997,
        "description": "Comet Hale-Bopp, one of the brightest comets of the 20th century, passed perihelion on April 1, 1997 and reached magnitude –1.8.",
        "location": "Visible to naked eye worldwide",
        "type": "comet",
        "link": "https://en.wikipedia.org/wiki/Comet_Hale%E2%80%93Bopp"
    },
    {
        "date": "07-03",
        "title": "Comet NEOWISE",
        "year": 2020,
        "description": "Comet NEOWISE (C/2020 F3) passed perihelion on July 3, 2020 and became the brightest comet visible from Earth since 1997, visible to the naked eye.",
        "location": "Visible in Northern Hemisphere skies in July 2020",
        "type": "comet",
        "link": "https://en.wikipedia.org/wiki/Comet_NEOWISE"
    },
    {
        "date": "02-22",
        "title": "Nova Persei 1901 (GK Persei)",
        "year": 1901,
        "description": "Nova Persei (GK Persei) was discovered on Feb 22, 1901, reaching peak magnitude 0.2 and becoming the brightest nova of modern times.",
        "location": "Constellation Perseus (Northern Hemisphere sky)",
        "type": "nova",
        "link": "https://en.wikipedia.org/wiki/GK_Persei"
    },
    {
        "date": "02-24",
        "title": "SN 1987A (Supernova in LMC)",
        "year": 1987,
        "description": "SN 1987A was a type-II supernova in the Large Magellanic Cloud discovered on Feb 24, 1987, the closest SN observed in modern times.",
        "location": "Large Magellanic Cloud (visible from Southern Hemisphere)",
        "type": "supernova",
        "link": "https://en.wikipedia.org/wiki/SN_1987A"
    },
    {
        "date": "01-21",
        "title": "SN 2014J (Supernova in M82)",
        "year": 2014,
        "description": "SN 2014J, a type-Ia supernova in galaxy M82, was discovered on Jan 21, 2014. It was the closest Type-Ia SN in 42 years.",
        "location": "Messier 82 ('Cigar Galaxy', Ursa Major, Northern Hemisphere sky)",
        "type": "supernova",
        "link": "https://en.wikipedia.org/wiki/SN_2014J"
    },
    {
        "date": "08-14",
        "title": "Nova Delphini 2013 (V339 Delphini)",
        "year": 2013,
        "description": "Nova Delphini 2013 (V339 Del) was discovered on Aug 14, 2013 at mag 6.8 and peaked at mag 4.3 two days later.",
        "location": "Constellation Delphinus (Northern Hemisphere)",
        "type": "nova",
        "link": "https://en.wikipedia.org/wiki/V339_Delphini"
    },
    {
        "date": "12-21",
        "title": "Great Conjunction of Jupiter and Saturn",
        "year": 2020,
        "description": "On Dec 21, 2020 Jupiter and Saturn performed a 'Great Conjunction', appearing only 0.1° apart in the southwestern sky.",
        "location": "Southwestern sky after sunset (visible worldwide)",
        "type": "conjunction",
        "link": "https://www.nasa.gov/solar-system/the-great-conjunction-of-jupiter-and-saturn/"
    },
    {
        "date": "02-18",
        "title": "Discovery of Pluto",
        "year": 1930,
        "description": "Clyde W. Tombaugh discovered Pluto on Feb 18, 1930 at Lowell Observatory, the first known Kuiper Belt object.",
        "location": "Lowell Observatory, Flagstaff, Arizona (telescope images)",
        "type": "discovery",
        "link": "https://en.wikipedia.org/wiki/Pluto"
    },
    {
        "date": "10-06",
        "title": "Discovery of 51 Pegasi b",
        "year": 1995,
        "description": "On Oct 6, 1995 astronomers Michel Mayor and Didier Queloz announced the discovery of 51 Pegasi b, the first exoplanet orbiting a Sun-like star.",
        "location": "51 Pegasi (about 50 ly away in the Pegasus constellation)",
        "type": "discovery",
        "link": "https://en.wikipedia.org/wiki/51_Pegasi_b"
    },
    {
        "date": "08-02",
        "title": "Total Solar Eclipse (2027)",
        "year": 2027,
        "description": "A total solar eclipse on Aug 2, 2027 will be visible across northern Africa, southern Europe, and the Middle East.",
        "location": "North Africa and Southern Europe to the Middle East (partial visible in N. America and Asia)",
        "type": "eclipse",
        "link": "https://en.wikipedia.org/wiki/Solar_eclipse_of_August_2,_2027"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const dateInput = document.getElementById('date');
    const nasaImageDiv = document.getElementById('nasa-image');
    const historicalContainer = document.querySelector('.historical-container');

    // NASA APOD Event Listener
    dateInput.addEventListener('change', async (e) => {
        const selectedDate = e.target.value;
        try {
            const response = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}&date=${selectedDate}`
            );
            const data = await response.json();

            if (data.url) {
                nasaImageDiv.innerHTML = `
                    <h3>${data.title}</h3>
                    <img src="${data.url}" alt="${data.title}">
                    <p>${data.explanation}</p>
                `;
            } else {
                nasaImageDiv.innerHTML = '<p>No image available for this date.</p>';
            }
        } catch (error) {
            console.error('Error fetching NASA image:', error);
            nasaImageDiv.innerHTML = '<p>Error loading image. Please try again later.</p>';
        }
    });

    // Function to display historical events
    function displayHistoricalEvents(events = historicalEvents) {
        historicalContainer.innerHTML = '';
        
        // Add filter buttons
        const filterContainer = document.createElement('div');
        filterContainer.className = 'filter-container';
        const eventTypes = [...new Set(historicalEvents.map(event => event.type))];
        
        filterContainer.innerHTML = `
            <button class="filter-btn active" data-type="all">All Events</button>
            ${eventTypes.map(type => `
                <button class="filter-btn" data-type="${type}">${type.charAt(0).toUpperCase() + type.slice(1)}s</button>
            `).join('')}
        `;
        
        historicalContainer.appendChild(filterContainer);

        // Sort events by date and year
        const sortedEvents = [...events].sort((a, b) => {
            const dateA = new Date(a.year, parseInt(a.date.split('-')[0]) - 1, parseInt(a.date.split('-')[1]));
            const dateB = new Date(b.year, parseInt(b.date.split('-')[0]) - 1, parseInt(b.date.split('-')[1]));
            return dateB - dateA;
        });

        // Add events
        sortedEvents.forEach(event => {
            const eventBox = document.createElement('div');
            eventBox.className = `historical-box ${event.type}`;
            const date = new Date(event.year, parseInt(event.date.split('-')[0]) - 1, parseInt(event.date.split('-')[1]));
            
            eventBox.innerHTML = `
                <h3>${date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</h3>
                <h4>${event.title}</h4>
                <p>${event.description}</p>
                <div class="event-details">
                    <span class="location"><strong>Location:</strong> ${event.location}</span>
                    <span class="type-badge ${event.type}">${event.type.charAt(0).toUpperCase() + event.type.slice(1)}</span>
                </div>
                <a href="${event.link}" target="_blank" class="learn-more">Learn More →</a>
            `;
            
            historicalContainer.appendChild(eventBox);
        });

        // Add filter functionality
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const type = button.dataset.type;
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                const filteredEvents = type === 'all' 
                    ? historicalEvents 
                    : historicalEvents.filter(event => event.type === type);
                
                displayHistoricalEvents(filteredEvents);
            });
        });
    }

    // Initialize historical events display
    displayHistoricalEvents();

    // Monthly events code
    const eventsContainer = document.querySelector('.events-container');
    const moreMonths = [
        {
            month: 'March 2025',
            events: [
                'March 13: New Moon',
                'March 28: Full Moon',
                'March 20: Spring Equinox'
            ]
        },
        {
            month: 'April 2025',
            events: [
                'April 11: New Moon',
                'April 22-23: Lyrids Meteor Shower Peak',
                'April 26: Full Moon'
            ]
        },
        {
            month: 'May 2025',
            events: [
                'May 11: New Moon',
                'May 26: Full Moon',
                'May 6-7: Eta Aquarids Meteor Shower Peak'
            ]
        },
        {
            month: 'June 2025',
            events: [
                'June 10: New Moon',
                'June 24: Full Moon',
                'June 21: Summer Solstice'
            ]
        },
        {
            month: 'July 2025',
            events: [
                'July 9: New Moon',
                'July 24: Full Moon',
                'July 28-29: Delta Aquarids Meteor Shower Peak'
            ]
        },
        {
            month: 'August 2025',
            events: [
                'August 8: New Moon',
                'August 22: Full Moon',
                'August 12-13: Perseids Meteor Shower Peak'
            ]
        },
        {
            month: 'September 2025',
            events: [
                'September 6: New Moon',
                'September 21: Full Moon',
                'September 22: Autumn Equinox'
            ]
        },
        {
            month: 'October 2025',
            events: [
                'October 6: New Moon',
                'October 20: Full Moon',
                'October 21-22: Orionids Meteor Shower Peak'
            ]
        },
        {
            month: 'November 2025',
            events: [
                'November 4: New Moon',
                'November 19: Full Moon',
                'November 17-18: Leonids Meteor Shower Peak'
            ]
        },
        {
            month: 'December 2025',
            events: [
                'December 4: New Moon',
                'December 18: Full Moon',
                'December 13-14: Geminids Meteor Shower Peak',
                'December 21: Winter Solstice'
            ]
        }
    ];

    moreMonths.forEach(monthData => {
        const monthBox = document.createElement('div');
        monthBox.className = 'month-box';
        monthBox.innerHTML = `
            <h2>${monthData.month}</h2>
            <ul>
                ${monthData.events.map(event => `<li>${event}</li>`).join('')}
            </ul>
        `;
        eventsContainer.appendChild(monthBox);
    });
}); 