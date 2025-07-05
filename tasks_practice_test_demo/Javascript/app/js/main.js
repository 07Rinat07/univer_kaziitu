<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>METANIT.COM</title>
</head>
<body>
<script>
const people = [{name: "Tom", age: 37}, {name:"Sam", age: 41}, {name: "Bob", age: 21}];
const markup = `<ul>
    ${people.map(person => `<li>${person.name}</li>`)}
</ul>`;
 
document.body.innerHTML = markup;
</script>
</body>
</html>