<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Online Timer and Stopwatch</title>
</head>
<body>
    <div class="card">
        <div class="timer">
            <h2>Online Timer</h2>
            <p id="timerDisplay">00:00</p>
            <button onclick="startTimer()">Start</button>
            <button onclick="stopTimer()">Stop</button>
            <button onclick="resetTimer()">Reset</button>
        </div>
        <div class="stopwatch">
            <h2>Stopwatch</h2>
            <p id="stopwatchDisplay">00:00</p>
            <button onclick="startStopwatch()">Start</button>
            <button onclick="stopStopwatch()">Stop</button>
            <button onclick="resetStopwatch()">Reset</button>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
