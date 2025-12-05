let students = [{name: "An", score: 8}, {name: "Bình", score: 7}];
students.push(
    {name: "Cường", score: 9},
    {name: "Long", score: 7},
    {name: "Quý", score: 8},
    {name: "Phước", score: 6},
    {name: "Đức", score: 7},
);
students.pop();
students.sort((a, b)=> b.score - a.score);
for (const student of students) {
    console.log(student);
}
