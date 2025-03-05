
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Math Problems</title>
</head>
<body>
    <h1>Math Problems</h1>
    <form>
        <label for="firstNumber">First Number: </label>
        <input type="number" id="firstNumber" name="firstNumber"><br><br>
        <label for="secondNumber">Second Number: </label>
        <input type="number" id="secondNumber" name="secondNumber"><br><br>
        <input type="submit" value="Submit">
    </form>
    <script>
        function solveMathProblem() {
            const firstNumber = document.getElementById('firstNumber').value;
            const secondNumber = document.getElementById('secondNumber').value;
            const problemType = document.querySelector('input[name="problemType"]:checked').value;
            
            let solution;
            if (problemType === 'addition') {
                solution = firstNumber + secondNumber;
            } else if (problemType === 'subtraction') {
                solution = firstNumber - secondNumber;
            } else if (problemType === 'multiplication') {
                solution = firstNumber * secondNumber;
            } else if (problemType === 'division') {
                solution = firstNumber / secondNumber;
            }
            
            document.getElementById('solution').innerHTML = `The solution is: ${solution}`;
        }
    </script>
</body>
</html>