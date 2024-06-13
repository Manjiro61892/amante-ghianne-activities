<html>
<head>
<link rel="stylesheet" href="w3.css">
</head>
<body>
<?php
include_once('header.php')
?>

    <div class="w3-container" style="margin:25%" id="maincontent">
    <div class=w3-card-4">
        <div class="w3-container w3-green">
          <h2>Employee Add Form</h2>
	</div> 

<form class="w3-container" action="insert.php" method="get">
<label>First Name</label>
<input class="w3-input" type="text" name="first_name"><br><br>
<label>last Name</label>
<input class="w3-input" type="text" name="last_name"><br><br>
<label>Job Title</label>
<input class="w3-input" type="text" name="job_title"><br><br>
<label>Department</label>
<input class="w3-input" type="text" name="department"><br><br>
<label>Date Hired</label>
<input class="w3-input" type="text" name="hire_date"><br><br>
<label>Salary</label>
<input class="w3-input" type="text" name="salary"><br><br>
<input class="w3-btn- w3-green" type="submit" name="submit" value="submit">
</form>
</div></div>
<div class="w3-container w3-black"
style="margin-left:25%">
<h3>Copyrights 2023-2100</h3>
</div>
</body>
</html>