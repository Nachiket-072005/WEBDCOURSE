document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.getElementById("search-btn");
  const usernameInput = document.getElementById("user-input");
  const statsContainer = document.querySelector(".stats-container");
  const easyProgressCircle = document.querySelector(".easy-progress");
  const mediumProgressCircle = document.querySelector(".medium-progress");
  const hardProgressCircle = document.querySelector(".hard-progress");
  const easyLabel = document.getElementById("easy-label");
  const mediumLabel = document.getElementById("medium-label");
  const hardLabel = document.getElementById("hard-label");
  const cardStatsContainer = document.querySelector(".stats-cards");

  //return true or false based on a regex
  function validateUsername(username) {
    if (username.trim() === "") {
      alert("Username should not be empty");
      return false;
    }
    const regex = /^[a-zA-Z0-9_-]{1,15}$/;
    const isMatching = regex.test(username);
    if (!isMatching) {
      alert("Username should be alphanumeric and less than 15 characters");
    }
    return isMatching;
  }

  async function fetchUserDetails(username) {
    const url = `https://leetcode-stats-api.herokuapp.com/${username}`;
    try {
      searchButton.textContent = "Loading...";
      searchButton.disabled = true;
      const response = await fetch(url);
      //   const proxyUrl = "https://cors-anywhere.herokuapp.com/";
      //   const targetUrl = "https://leetcode.com/graphql/";

      //   const myHeaders = new Headers();
      //   myHeaders.append("content-type", "application/json");

      //   const graphql = JSON.stringify({
      //     query:
      //       "\n    query userSessionProgress($username: String!) {\n  allQuestionsCount {\n    difficulty\n    count\n  }\n  matchedUser(username: $username) {\n    submitStats {\n      acSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n      totalSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n    }\n  }\n}\n    ",
      //     variables: { username: `${username}` },
      //   });
      //   const requestOptions = {
      //     method: "POST",
      //     headers: myHeaders,
      //     body: graphql,
      //     redirect: "follow",
      //   };

      //   const response = await fetch(proxyUrl + targetUrl, requestOptions);
      if (!response.ok) {
        throw new Error("API Error");
      }
      const parsedData = await response.json();
      console.log(parsedData);
      displayUserDetails(parsedData);
    } catch (error) {
      statsContainer.innerHTML = `<h2>Something went wrong</h2>`;
    } finally {
      searchButton.textContent = "Search";
      searchButton.disabled = false;
      console.log("API call completed");
    }
  }

  function updateProgress(solved, total, label, circle) {
    const progressDegree = (solved / total) * 100;
    circle.style.setProperty("--progress-degree", `${progressDegree}%`);
    label.textContent = `${solved}/${total}`;
  }

  function displayUserDetails(parsedData) {
    const totalQues = parsedData.totalQuestions;
    const totalHardQues = parsedData.totalHard;
    const totalMediumQues = parsedData.totalMedium;
    const totalEasyQues = parsedData.totalEasy;
    const totalSolved = parsedData.totalSolved;
    const solvedHardQues = parsedData.hardSolved;
    const solvedMediumQues = parsedData.mediumSolved;
    const solvedEasyQues = parsedData.easySolved;

    updateProgress(
      solvedEasyQues,
      totalEasyQues,
      easyLabel,
      easyProgressCircle
    );
    updateProgress(
      solvedMediumQues,
      totalMediumQues,
      mediumLabel,
      mediumProgressCircle
    );
    updateProgress(
      solvedHardQues,
      totalHardQues,
      hardLabel,
      hardProgressCircle
    );
  }

  searchButton.addEventListener("click", function () {
    let username = usernameInput.value;
    console.log("Login: " + username);
    if (validateUsername(username)) {
      fetchUserDetails(username);
    }
  });
});
