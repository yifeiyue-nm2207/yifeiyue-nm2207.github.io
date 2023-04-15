// 添加单击事件监听器
document.addEventListener('click', function(event) {
	var heart = document.createElement('div');
	heart.classList.add('heart');

	// 鼠标点击的位置
	var x = event.clientX;
	var y = event.clientY;

	// 设置爱心的位置
	heart.style.left = x + 'px';
	heart.style.top = y + 'px';

	// 将爱心添加到容器中
	document.querySelector('.heart-container').appendChild(heart);

	// 一定时间后删除爱心元素
	setTimeout(function() {
		heart.remove();
	}, 1000);
});


const cursor = document.getElementById("cursor");
document.addEventListener("mousemove", function(e) {
    let x = e.pageX;
    let y = e.pageY;

    // update the position of the custom cursor element based on the mouse position
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
});

let timeoutId; // stores the ID of the timeout

// hide the cursor while scrolling
window.addEventListener("scroll", function() {
  clearTimeout(timeoutId);
  cursor.style.display = "none";
  timeoutId = setTimeout(function() {
    cursor.style.display = "block";
  }, 100); // show the cursor after 0.1 second of not scrolling
});


//   document.body.style.cursor = "none"; // hide default cursor

//   cursor.style.position = "fixed"; // set custom cursor to fixed position


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

const gender_data = fetch("https://raw.githubusercontent.com/yifeiyue-nm2207/yifeiyue-nm2207.github.io/main/resources/filtered_dataset.csv")
  .then(function (response){
      return response.text();
  })
  .then(function(gender_data){
      const table = [];
      const rows = gender_data.split("\n");
      rows.forEach((r,index) => {
          const item = r.split(",");
          if (item.length !== 1 || item[0] !== "") {
              table.push(item);
          }
      });

      //add your for loop here
      const male_level = [];
      const female_level = [];

      //add your for loop here
      for (j = 1; j < table.length; j++) {
          if (table[j][2].replace(/[^\w\s]/g, '') === "Male") {
            male_level.push(table[j][13])
          }
          if (table[j][2].replace(/[^\w\s]/g, '') === "Female") {
            female_level.push(table[j][13])
          }
      }

      // Initialize the count array with zeros for each index
      const maleLevelCount = [0, 0, 0, 0, 0];
      const femaleLevelCount = [0, 0, 0, 0, 0];

      // Iterate over each number in the array
      for (let i = 0; i < male_level.length; i++) {
        const num = male_level[i];
        // Increment the corresponding index in the count array
        maleLevelCount[num - 1]++;
      }

      for (let i = 0; i < female_level.length; i++) {
          const num = female_level[i];
          // Increment the corresponding index in the count array
          femaleLevelCount[num - 1]++;
        }

      const labelGender = [
          "Male",
          "Female",
        ];

      const genderObj = {
          labels: labelGender,           //we want the x axis to be the years
          datasets: [
              {
                  label: "Level 1",// uncomment this line and set this to "Accountancy" for example
                  data: [maleLevelCount[0], femaleLevelCount[0]],// uncomment this line and set this to an array [] with commas that are the bold numbers next to Accountancy for example
                  borderWidth: 2,
                  backgroundColor: "#3b5998",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
              },
              {
                  label: "Level 2",// uncomment this line and set this to "Accountancy" for example
                  data: [maleLevelCount[1], femaleLevelCount[1]],// uncomment this line and set this to an array [] with commas that are the bold numbers next to Accountancy for example
                  borderWidth: 2,
                  backgroundColor: "#007bff",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
              },
              {
                  label: "Level 3",// uncomment this line and set this to "Accountancy" for example
                  data: [maleLevelCount[2], femaleLevelCount[2]],// uncomment this line and set this to an array [] with commas that are the bold numbers next to Accountancy for example
                  borderWidth: 2,
                  backgroundColor: "#dc3545",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
              },
              {
                  label: "Level 4",// uncomment this line and set this to "Accountancy" for example
                  data: [maleLevelCount[3], femaleLevelCount[3]],// uncomment this line and set this to an array [] with commas that are the bold numbers next to Accountancy for example
                  borderWidth: 2,
                  backgroundColor: "#fd7e14",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
              },
              {
                  label: "Level 5",// uncomment this line and set this to "Accountancy" for example
                  data: [maleLevelCount[4], femaleLevelCount[4]],// uncomment this line and set this to an array [] with commas that are the bold numbers next to Accountancy for example
                  borderWidth: 2,
                  backgroundColor: "#28a745",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
              }
          ],
      }

      new Chart("my_chart_0",
      {
          type: "bar",
          data: genderObj,
          options: {
              maintainAspectRatio: false,
              legend: {
                  display: true
              },
              title: {
                  display: true,
                  text: ['The relation between Gender and ','how much are they Bothered by Worries'],//set this to ['The most negative phrases in the Singlish vocabulary','According to research']
                  fontFamily: "TrebuchetMS",
                  fontSize: 24,
                  fontColor: 'rgb(0,120,0)',
              }
          }
      });
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
        if (item.length !== 1 || item[0] !== "") {
            table.push(item);
        }
    });

    //add your for loop here
    const sleep_issues_0 = [];
    const sleep_issues_1 = [];
    const sleep_issues_2 = [];
    const sleep_issues_3 = [];
    const sleep_issues_4 = [];
    const sleep_issues_5 = [];

    //add your for loop here
    for (j = 1; j < table.length; j++) {
        if (table[j][8].replace(/[^\w\s]/g, '') === "Less than an Hour") {
            sleep_issues_0.push(table[j][20])
        }
        if (table[j][8].replace(/[^\w\s]/g, '') === "Between 1 and 2 hours") {
            sleep_issues_1.push(table[j][20])
        }
        if (table[j][8].replace(/[^\w\s]/g, '') === "Between 2 and 3 hours") {
            sleep_issues_2.push(table[j][20])
        }
        if (table[j][8].replace(/[^\w\s]/g, '') === "Between 3 and 4 hours") {
            sleep_issues_3.push(table[j][20])
        }
        if (table[j][8].replace(/[^\w\s]/g, '') === "Between 4 and 5 hours") {
            sleep_issues_4.push(table[j][20])
        }
        if (table[j][8].replace(/[^\w\s]/g, '') === "More than 5 hours") {
            sleep_issues_5.push(table[j][20])
        }
    }

    // Initialize the count array with zeros for each index
    const sleepCount0 = [0, 0, 0, 0, 0];
    const sleepCount1 = [0, 0, 0, 0, 0];
    const sleepCount2 = [0, 0, 0, 0, 0];
    const sleepCount3 = [0, 0, 0, 0, 0];
    const sleepCount4 = [0, 0, 0, 0, 0];
    const sleepCount5 = [0, 0, 0, 0, 0];

    // Iterate over each number in the array
    for (let i = 0; i < sleep_issues_0.length; i++) {
      const num = sleep_issues_0[i];
      // Increment the corresponding index in the count array
      sleepCount0[num - 1]++;
    }

    for (let i = 0; i < sleep_issues_1.length; i++) {
        const num = sleep_issues_1[i];
        // Increment the corresponding index in the count array
        sleepCount1[num - 1]++;
      }

      for (let i = 0; i < sleep_issues_2.length; i++) {
        const num = sleep_issues_2[i];
        // Increment the corresponding index in the count array
        sleepCount2[num - 1]++;
      }

      for (let i = 0; i < sleep_issues_3.length; i++) {
        const num = sleep_issues_3[i];
        // Increment the corresponding index in the count array
        sleepCount3[num - 1]++;
      }

      for (let i = 0; i < sleep_issues_4.length; i++) {
        const num = sleep_issues_4[i];
        // Increment the corresponding index in the count array
        sleepCount4[num - 1]++;
      }

      for (let i = 0; i < sleep_issues_5.length; i++) {
        const num = sleep_issues_5[i];
        // Increment the corresponding index in the count array
        sleepCount5[num - 1]++;
      }

    const labelTimeSpent = [
        "Less than an Hour",
        "Between 1 and 2 hours",
        "Between 2 and 3 hours",
        "Between 3 and 4 hours",
        "Between 4 and 5 hours",
        "More than 5 hours",
      ];

    const timeSpentObj = {
        labels: labelTimeSpent,           //we want the x axis to be the years
        datasets: [
            {
                label: "Level 1",// uncomment this line and set this to "Accountancy" for example
                data: [sleepCount0[0], sleepCount1[0], sleepCount2[0], sleepCount3[0], sleepCount4[0], sleepCount5[0]],// uncomment this line and set this to an array [] with commas that are the bold numbers next to Accountancy for example
                borderWidth: 2,
                backgroundColor: "#3b5998",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
            },
            {
                label: "Level 2",// uncomment this line and set this to "Accountancy" for example
                data: [sleepCount0[1], sleepCount1[1], sleepCount2[1], sleepCount3[1], sleepCount4[1], sleepCount5[1]],// uncomment this line and set this to an array [] with commas that are the bold numbers next to Accountancy for example
                borderWidth: 2,
                backgroundColor: "#007bff",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
            },
            {
                label: "Level 3",// uncomment this line and set this to "Accountancy" for example
                data: [sleepCount0[2], sleepCount1[2], sleepCount2[2], sleepCount3[2], sleepCount4[2], sleepCount5[2]],// uncomment this line and set this to an array [] with commas that are the bold numbers next to Accountancy for example
                borderWidth: 2,
                backgroundColor: "#dc3545",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
            },
            {
                label: "Level 4",// uncomment this line and set this to "Accountancy" for example
                data: [sleepCount0[3], sleepCount1[3], sleepCount2[3], sleepCount3[3], sleepCount4[3], sleepCount5[3]],// uncomment this line and set this to an array [] with commas that are the bold numbers next to Accountancy for example
                borderWidth: 2,
                backgroundColor: "#fd7e14",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
            },
            {
                label: "Level 5",// uncomment this line and set this to "Accountancy" for example
                data: [sleepCount0[4], sleepCount1[4], sleepCount2[4], sleepCount3[4], sleepCount4[4], sleepCount5[4]],// uncomment this line and set this to an array [] with commas that are the bold numbers next to Accountancy for example
                borderWidth: 2,
                backgroundColor: "#28a745",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
            }
        ],
    }

    new Chart("my_chart_1",
    {
        type: "bar",
        data: timeSpentObj,
        options: {
            maintainAspectRatio: false,
            legend: {
                display: true
            },
            title: {
                display: true,
                text: ['The relation between Sleeping Issues and ','the Time Spent on Social Media'],//set this to ['The most negative phrases in the Singlish vocabulary','According to research']
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
        if (item.length !== 1 || item[0] !== "") {
            table.push(item);
        }
    });

    //add your for loop here
    const distraction_0 = [];
    const distraction_1 = [];
    const distraction_2 = [];
    const distraction_3 = [];
    const distraction_4 = [];
    const distraction_5 = [];

    //add your for loop here
    for (j = 1; j < table.length; j++) {
        if (table[j][8].replace(/[^\w\s]/g, '') === "Less than an Hour") {
            distraction_0.push(table[j][14])
        }
        if (table[j][8].replace(/[^\w\s]/g, '') === "Between 1 and 2 hours") {
            distraction_1.push(table[j][14])
        }
        if (table[j][8].replace(/[^\w\s]/g, '') === "Between 2 and 3 hours") {
            distraction_2.push(table[j][14])
        }
        if (table[j][8].replace(/[^\w\s]/g, '') === "Between 3 and 4 hours") {
            distraction_3.push(table[j][14])
        }
        if (table[j][8].replace(/[^\w\s]/g, '') === "Between 4 and 5 hours") {
            distraction_4.push(table[j][14])
        }
        if (table[j][8].replace(/[^\w\s]/g, '') === "More than 5 hours") {
            distraction_5.push(table[j][14])
        }
    }

    // Initialize the count array with zeros for each index
    const distractionCount0 = [0, 0, 0, 0, 0];
    const distractionCount1 = [0, 0, 0, 0, 0];
    const distractionCount2 = [0, 0, 0, 0, 0];
    const distractionCount3 = [0, 0, 0, 0, 0];
    const distractionCount4 = [0, 0, 0, 0, 0];
    const distractionCount5 = [0, 0, 0, 0, 0];

    // Iterate over each number in the array
    for (let i = 0; i < distraction_0.length; i++) {
      const num = distraction_0[i];
      // Increment the corresponding index in the count array
      distractionCount0[num - 1]++;
    }

    for (let i = 0; i < distraction_1.length; i++) {
        const num = distraction_1[i];
        // Increment the corresponding index in the count array
        distractionCount1[num - 1]++;
      }

      for (let i = 0; i < distraction_2.length; i++) {
        const num = distraction_2[i];
        // Increment the corresponding index in the count array
        distractionCount2[num - 1]++;
      }

      for (let i = 0; i < distraction_3.length; i++) {
        const num = distraction_3[i];
        // Increment the corresponding index in the count array
        distractionCount3[num - 1]++;
      }

      for (let i = 0; i < distraction_4.length; i++) {
        const num = distraction_4[i];
        // Increment the corresponding index in the count array
        distractionCount4[num - 1]++;
      }

      for (let i = 0; i < distraction_5.length; i++) {
        const num = distraction_5[i];
        // Increment the corresponding index in the count array
        distractionCount5[num - 1]++;
      }

    const labelTimeSpent = [
        "Less than an Hour",
        "Between 1 and 2 hours",
        "Between 2 and 3 hours",
        "Between 3 and 4 hours",
        "Between 4 and 5 hours",
        "More than 5 hours",
      ];

    const timeSpentObj = {
        labels: labelTimeSpent,           //we want the x axis to be the years
        datasets: [
            {
                label: "Level 1",// uncomment this line and set this to "Accountancy" for example
                data: [distractionCount0[0], distractionCount1[0], distractionCount2[0], distractionCount3[0], distractionCount4[0], distractionCount5[0]],// uncomment this line and set this to an array [] with commas that are the bold numbers next to Accountancy for example
                borderWidth: 2,
                backgroundColor: "#3b5998",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
            },
            {
                label: "Level 2",// uncomment this line and set this to "Accountancy" for example
                data: [distractionCount0[1], distractionCount1[1], distractionCount2[1], distractionCount3[1], distractionCount4[1], distractionCount5[1]],// uncomment this line and set this to an array [] with commas that are the bold numbers next to Accountancy for example
                borderWidth: 2,
                backgroundColor: "#007bff",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
            },
            {
                label: "Level 3",// uncomment this line and set this to "Accountancy" for example
                data: [distractionCount0[2], distractionCount1[2], distractionCount2[2], distractionCount3[2], distractionCount4[2], distractionCount5[2]],// uncomment this line and set this to an array [] with commas that are the bold numbers next to Accountancy for example
                borderWidth: 2,
                backgroundColor: "#dc3545",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
            },
            {
                label: "Level 4",// uncomment this line and set this to "Accountancy" for example
                data: [distractionCount0[3], distractionCount1[3], distractionCount2[3], distractionCount3[3], distractionCount4[3], distractionCount5[3]],// uncomment this line and set this to an array [] with commas that are the bold numbers next to Accountancy for example
                borderWidth: 2,
                backgroundColor: "#fd7e14",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
            },
            {
                label: "Level 5",// uncomment this line and set this to "Accountancy" for example
                data: [distractionCount0[4], distractionCount1[4], distractionCount2[4], distractionCount3[4], distractionCount4[4], distractionCount5[4]],// uncomment this line and set this to an array [] with commas that are the bold numbers next to Accountancy for example
                borderWidth: 2,
                backgroundColor: "#28a745",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
            }
        ],
    }

    new Chart("my_chart_2",
    {
        type: "bar",
        data: timeSpentObj,
        options: {
            maintainAspectRatio: false,
            legend: {
                display: true
            },
            title: {
                display: true,
                text: ['The relation between Distractibility and ','the Time Spent on Social Media'],//set this to ['The most negative phrases in the Singlish vocabulary','According to research']
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
        if (item.length !== 1 || item[0] !== "") {
            table.push(item);
        }
    });

    //add your for loop here
    const concentration_0 = [];
    const concentration_1 = [];
    const concentration_2 = [];
    const concentration_3 = [];
    const concentration_4 = [];
    const concentration_5 = [];

    //add your for loop here
    for (j = 1; j < table.length; j++) {
        if (table[j][8].replace(/[^\w\s]/g, '') === "Less than an Hour") {
            concentration_0.push(table[j][12])
        }
        if (table[j][8].replace(/[^\w\s]/g, '') === "Between 1 and 2 hours") {
            concentration_1.push(table[j][12])
        }
        if (table[j][8].replace(/[^\w\s]/g, '') === "Between 2 and 3 hours") {
            concentration_2.push(table[j][12])
        }
        if (table[j][8].replace(/[^\w\s]/g, '') === "Between 3 and 4 hours") {
            concentration_3.push(table[j][12])
        }
        if (table[j][8].replace(/[^\w\s]/g, '') === "Between 4 and 5 hours") {
            concentration_4.push(table[j][12])
        }
        if (table[j][8].replace(/[^\w\s]/g, '') === "More than 5 hours") {
            concentration_5.push(table[j][12])
        }
    }

    // Initialize the count array with zeros for each index
    const concentrationCount0 = [0, 0, 0, 0, 0];
    const concentrationCount1 = [0, 0, 0, 0, 0];
    const concentrationCount2 = [0, 0, 0, 0, 0];
    const concentrationCount3 = [0, 0, 0, 0, 0];
    const concentrationCount4 = [0, 0, 0, 0, 0];
    const concentrationCount5 = [0, 0, 0, 0, 0];

    // Iterate over each number in the array
    for (let i = 0; i < concentration_0.length; i++) {
      const num = concentration_0[i];
      // Increment the corresponding index in the count array
      concentrationCount0[num - 1]++;
    }

    for (let i = 0; i < concentration_1.length; i++) {
        const num = concentration_1[i];
        // Increment the corresponding index in the count array
        concentrationCount1[num - 1]++;
      }

      for (let i = 0; i < concentration_2.length; i++) {
        const num = concentration_2[i];
        // Increment the corresponding index in the count array
        concentrationCount2[num - 1]++;
      }

      for (let i = 0; i < concentration_3.length; i++) {
        const num = concentration_3[i];
        // Increment the corresponding index in the count array
        concentrationCount3[num - 1]++;
      }

      for (let i = 0; i < concentration_4.length; i++) {
        const num = concentration_4[i];
        // Increment the corresponding index in the count array
        concentrationCount4[num - 1]++;
      }

      for (let i = 0; i < concentration_5.length; i++) {
        const num = concentration_5[i];
        // Increment the corresponding index in the count array
        concentrationCount5[num - 1]++;
      }

    const labelTimeSpent = [
        "Less than an Hour",
        "Between 1 and 2 hours",
        "Between 2 and 3 hours",
        "Between 3 and 4 hours",
        "Between 4 and 5 hours",
        "More than 5 hours",
      ];

    const timeSpentObj = {
        labels: labelTimeSpent,           //we want the x axis to be the years
        datasets: [
            {
                label: "Level 1",// uncomment this line and set this to "Accountancy" for example
                data: [concentrationCount0[0], concentrationCount1[0], concentrationCount2[0], concentrationCount3[0], concentrationCount4[0], concentrationCount5[0]],// uncomment this line and set this to an array [] with commas that are the bold numbers next to Accountancy for example
                borderWidth: 2,
                backgroundColor: "#3b5998",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
            },
            {
                label: "Level 2",// uncomment this line and set this to "Accountancy" for example
                data: [concentrationCount0[1], concentrationCount1[1], concentrationCount2[1], concentrationCount3[1], concentrationCount4[1], concentrationCount5[1]],// uncomment this line and set this to an array [] with commas that are the bold numbers next to Accountancy for example
                borderWidth: 2,
                backgroundColor: "#007bff",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
            },
            {
                label: "Level 3",// uncomment this line and set this to "Accountancy" for example
                data: [concentrationCount0[2], concentrationCount1[2], concentrationCount2[2], concentrationCount3[2], concentrationCount4[2], concentrationCount5[2]],// uncomment this line and set this to an array [] with commas that are the bold numbers next to Accountancy for example
                borderWidth: 2,
                backgroundColor: "#dc3545",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
            },
            {
                label: "Level 4",// uncomment this line and set this to "Accountancy" for example
                data: [concentrationCount0[3], concentrationCount1[3], concentrationCount2[3], concentrationCount3[3], concentrationCount4[3], concentrationCount5[3]],// uncomment this line and set this to an array [] with commas that are the bold numbers next to Accountancy for example
                borderWidth: 2,
                backgroundColor: "#fd7e14",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
            },
            {
                label: "Level 5",// uncomment this line and set this to "Accountancy" for example
                data: [concentrationCount0[4], concentrationCount1[4], concentrationCount2[4], concentrationCount3[4], concentrationCount4[4], concentrationCount5[4]],// uncomment this line and set this to an array [] with commas that are the bold numbers next to Accountancy for example
                borderWidth: 2,
                backgroundColor: "#28a745",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
            }
        ],
    }

    new Chart("my_chart_3",
    {
        type: "bar",
        data: timeSpentObj,
        options: {
            maintainAspectRatio: false,
            legend: {
                display: true
            },
            title: {
                display: true,
                text: ['The relation between Difficulty in Concentrating and ','the Time Spent on Social Media'],//set this to ['The most negative phrases in the Singlish vocabulary','According to research']
                fontFamily: "TrebuchetMS",
                fontSize: 24,
                fontColor: 'rgb(0,120,0)',
            }
        }
    });
});

const backToTopButton = document.getElementById('backToTopButton');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 0) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


