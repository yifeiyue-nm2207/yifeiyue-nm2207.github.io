
function insertImage(imagePath, elementId) {
  const element = document.getElementById(elementId);
  element.innerHTML = `<img src="${imagePath}" alt="Image" width="1000" height="500" style="display:block; margin:auto;">`;
}


const imagePath = 'resources/background.png';
const elementId = 'image-container';

insertImage(imagePath, elementId);

const themeButton = document.getElementById('themeButton');
const body = document.querySelector('body');

themeButton.addEventListener('click', () => {
  body.classList.toggle('dark');
});

// gender pie
new Chart("gender",
{
    type: "pie",
    data: {
        labels: ["Male", "Female"],
        datasets: [ {
            data: [208, 259],
            backgroundColor: ["#3b5998", "#dc3545"],
            hoverOffset: 4,
            }]
        },
    options: {
        title:{
            display: true,
            text: ["Number of Male/Female completed the survey"],
            fontFamily: "TrebuchetMS",
            fontSize: 18,
            fontColor: 'rgb(0,120,0)',
        }
   }
});

const timeSpentDataObj = {
    labels: [
        "Less than an Hour",
        "Between 1 and 2 hours",
        "Between 2 and 3 hours",
        "Between 3 and 4 hours",
        "Between 4 and 5 hours",
        "More than 5 hours",
      ],
      datasets: [
        {
          label: "Time Spent on Social Media",
          data: [33, 69, 96, 92, 65, 112],
          backgroundColor: [
            "#3b5998",
            "#007bff",
            "#6f42c1",
            "#dc3545",
            "#fd7e14",
            "#28a745",
          ],
        },
      ],
}

new Chart("time-spent-chart", {
    type: "bar",
    data: timeSpentDataObj,
    options: {
        maintainAspectRatio: false,
        legend: {
            display: false,
        },
        title: {
            display: true,
            text: ["Time Spent on Social Media"],
            fontFamily: "TrebuchetMS",
            fontSize: 24,
            fontColor: 'rgb(0,120,0)',
        }
    }
  });



// Make a request for the CSV file
const sleep_data = fetch("https://raw.githubusercontent.com/yifeiyue-nm2207/yifeiyue-nm2207.github.io/main/resources/filtered_dataset.csv")
.then(function (response){
    return response.text();
})
.then(function(sleep_data){
    const table = [];
    const rows = sleep_data.split("\n");

    rows.forEach((r,index) => {
        const item = r.split(",");
        table.push(item);
    });

    //add your for loop here
    const sleep_issues_yes = [];
    const sleep_issues_no = [];

    //add your for loop here
    for(j=1; j<table.length; j++)
        {
        if (table[j][6].replace(/[^\w\s]/g, '') === "Yes") {
            sleep_issues_yes.push(table[j][20])
        } else {
            sleep_issues_no.push(table[j][20])
        }
        }

    const sleep_issues_yes_freq = [];

    for (let i = 0; i <= 4; i++) {
        sleep_issues_yes_freq[i] = 0;
    }

    for (let i = 0; i < sleep_issues_yes.length; i++) {
        let num = sleep_issues_yes[i].replace(/[^\w\s]/g, '')
        sleep_issues_yes_freq[num-1]++;
    }

    const sleep_issues_no_freq = [];

    for (let i = 0; i <= 4; i++) {
        sleep_issues_no_freq[i] = 0;
    }

    for (let i = 0; i < sleep_issues_no.length; i++) {
        let num = sleep_issues_no[i].replace(/[^\w\s]/g, '')
        sleep_issues_no_freq[num-1]++;
    }

    const dataObj = {
        labels: ['1', '2', '3', '4', '5'],
        datasets: [
            {
                label: 'Yes, I use social media',
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                data: sleep_issues_yes_freq
            },
            {
                label: 'No, I don\'t use social media',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                data: sleep_issues_no_freq
            }
        ]
    }
    new Chart("my_chart_1",
    {
        type: "bar",
        data: dataObj,
        options: {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            title: {
                display: true,
                text: ['The relation between Sleeping issues and ','the Use of Social Media'],//set this to ['The most negative phrases in the Singlish vocabulary','According to research']
                fontFamily: "TrebuchetMS",
                fontSize: 24,
                fontColor: 'rgb(0,120,0)',
            }
        }
    });
});


const distraction_data = fetch("https://raw.githubusercontent.com/yifeiyue-nm2207/yifeiyue-nm2207.github.io/main/resources/filtered_dataset.csv")
.then(function (response){
    return response.text();
})
.then(function(distraction_data){
    const table = [];
    const rows = distraction_data.split("\n");

    rows.forEach((r,index) => {
        const item = r.split(",");
        table.push(item);
    });

    //add your for loop here
    const distraction_yes =[]
    const distraction_no = [];

    //add your for loop here
    for(j=1; j<table.length; j++)
        {
        if (table[j][6].replace(/[^\w\s]/g, '') === "Yes") {
            distraction_yes.push(table[j][12])
        } else {
            distraction_no.push(table[j][12])
        }
        }

    const distraction_yes_freq = [];

    for (let i = 0; i <= 4; i++) {
        distraction_yes_freq[i] = 0;
    }

    for (let i = 0; i < distraction_yes.length; i++) {
        let num = distraction_yes[i].replace(/[^\w\s]/g, '')
        distraction_yes_freq[num-1]++;
    }

    const distraction_no_freq = [];

    for (let i = 0; i <= 4; i++) {
        distraction_no_freq[i] = 0;
    }

    for (let i = 0; i < distraction_no.length; i++) {
        let num = distraction_no[i].replace(/[^\w\s]/g, '')
        distraction_no_freq[num-1]++;
    }

    const dataObj = {
        labels: ['1', '2', '3', '4', '5'],//uncomment this and set this to negLabels
        datasets: [
            {
                label: 'Yes, I use social media',
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                data: distraction_yes_freq
            },
            {
                label: 'No, I don\'t use social media',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                data: distraction_no_freq
            }
        ]
    }
    new Chart("my_chart_2",
    {
        type: "bar",
        data: dataObj,
        options: {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            title: {
                display: true,
                text: ['The relation between Distractibility and ','the Use of Social Media'],//set this to ['The most negative phrases in the Singlish vocabulary','According to research']
                fontFamily: "TrebuchetMS",
                fontSize: 24,
                fontColor: 'rgb(0,120,0)',
            }
        }
    });
});


const concentration_data = fetch("https://raw.githubusercontent.com/yifeiyue-nm2207/yifeiyue-nm2207.github.io/main/resources/filtered_dataset.csv")
.then(function (response){
    return response.text();
})
.then(function(concentration_data){
    const table = [];
    const rows = concentration_data.split("\n");

    rows.forEach((r,index) => {
        const item = r.split(",");
        table.push(item);
    });

    //add your for loop here
    const concentration_yes =[]
    const concentration_no = [];

    //add your for loop here
    for(j=1; j<table.length; j++)
        {
        if (table[j][6].replace(/[^\w\s]/g, '') === "Yes") {
            concentration_yes.push(table[j][14])
        } else {
            concentration_no.push(table[j][14])
        }
        }

    const concentration_yes_freq = [];

    for (let i = 0; i <= 4; i++) {
        concentration_yes_freq[i] = 0;
    }

    for (let i = 0; i < concentration_yes.length; i++) {
        let num = concentration_yes[i].replace(/[^\w\s]/g, '')
        concentration_yes_freq[num-1]++;
    }

    const concentration_no_freq = [];

    for (let i = 0; i <= 4; i++) {
        concentration_no_freq[i] = 0;
    }

    for (let i = 0; i < concentration_no.length; i++) {
        let num = concentration_no[i].replace(/[^\w\s]/g, '')
        concentration_no_freq[num-1]++;
    }

    const dataObj = {
        labels: ['1', '2', '3', '4', '5'],//uncomment this and set this to negLabels
        datasets: [
            {
                label: 'Yes, I use social media',
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                data: concentration_yes_freq
            },
            {
                label: 'No, I don\'t use social media',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                data: concentration_no_freq
            }
        ]
    }
    new Chart("my_chart_3",
    {
        type: "bar",
        data: dataObj,
        options: {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            title: {
                display: true,
                text: ['The relation between Difficulty in Concentrating and ','the Use of Social Media'],//set this to ['The most negative phrases in the Singlish vocabulary','According to research']
                fontFamily: "TrebuchetMS",
                fontSize: 24,
                fontColor: 'rgb(0,120,0)',
            }
        }
    });
});

