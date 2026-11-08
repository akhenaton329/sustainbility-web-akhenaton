let score = 0;
let answered = [];

document.getElementById("quiz").innerHTML = `
    <h3>Question 1</h3>
    <p>Which of these items can be recycled?</p>
    <button onclick="checkAnswer(1, false, this)">Banana peel</button>
    <button onclick="checkAnswer(1, true, this)">Plastic bottle</button>
    <button onclick="checkAnswer(1, false, this)">Food scraps</button>

    <h3>Question 2</h3>
    <p>What should you do before recycling a plastic bottle?</p>
    <button onclick="checkAnswer(2, true, this)">Empty and rinse it</button>
    <button onclick="checkAnswer(2, false, this)">Fill it with water</button>
    <button onclick="checkAnswer(2, false, this)">Put food inside it</button>

    <h3>Question 3</h3>
    <p>Which item can be reused at home?</p>
    <button onclick="checkAnswer(3, false, this)">Used tissues</button>
    <button onclick="checkAnswer(3, true, this)">Glass jars</button>
    <button onclick="checkAnswer(3, false, this)">Food wrappers</button>

    <h3>Question 4</h3>
    <p>Why is recycling important?</p>
    <button onclick="checkAnswer(4, true, this)">It helps reduce waste</button>
    <button onclick="checkAnswer(4, false, this)">It creates more rubbish</button>
    <button onclick="checkAnswer(4, false, this)">It increases pollution</button>

    <h3>Question 5</h3>
    <p>What is a good way to reduce plastic waste?</p>
    <button onclick="checkAnswer(5, false, this)">Use more plastic bags</button>
    <button onclick="checkAnswer(5, false, this)">Throw bottles away</button>
    <button onclick="checkAnswer(5, true, this)">Use a reusable shopping bag</button>

    <p id="result">Your score: 0/5</p>
`;

function checkAnswer(question, correct, button) {

    if (answered.includes(question)) {
        return;
    }

    answered.push(question);

    if (correct) {
        score++;
        document.getElementById("result").innerHTML =
            "Correct! Well done! Your score is " + score + "/5";
    } else {
        document.getElementById("result").innerHTML =
            "Not quite! Your score is " + score + "/5";
    }

    button.parentElement.querySelectorAll("button");

    button.disabled = true;
}