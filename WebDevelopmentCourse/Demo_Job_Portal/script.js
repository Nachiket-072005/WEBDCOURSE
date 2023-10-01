document.addEventListener('DOMContentLoaded', function() {
    const jobs = [
        { id: 1, title: 'Web Developer', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { id: 2, title: 'UX Designer', description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' },
        // Add more jobs as needed
    ];

    const jobsList = document.getElementById('jobs');
    const jobDetail = document.getElementById('job-detail');

    function displayJobs() {
        jobsList.innerHTML = '';
        jobs.forEach(job => {
            const li = document.createElement('li');
            li.textContent = job.title;
            li.addEventListener('click', () => displayJobDetails(job));
            jobsList.appendChild(li);
        });
    }

    function displayJobDetails(job) {
        jobDetail.innerHTML = `
            <h3>${job.title}</h3>
            <p>${job.description}</p>
        `;
    }

    displayJobs();
});
