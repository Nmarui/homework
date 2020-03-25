var data = [
    ['Java', 1,'降','-0.01%'],
    ["C",2,'升','+2.44%'],
    ['Python',3,'升','+1.41%'],
    ['C++',4,'降','-2.58%'],
    ['C#',5,'升','+2.07'],
    ['Visual Basic.NET',6,'降','-1.17'],
    ['JavaScript',7,'降','-0.85']
];

var container = document.getElementById('example');
var hot = new Handsontable(container, {
    data: data,
    rowHeaders: false,
    colHeaders: ["语言名称","排名","升或降","变化幅度"],
    colWidths: 160,
    
    cell: [
        {row: 0, col: 0, className: "htCenter htMiddle"}, 
        {row: 0, col: 1, className: "htCenter htMiddle"}, 
        {row: 0, col: 2, className: "htCenter htMiddle"}, 
        {row: 0, col: 3, className: "htCenter htMiddle"}, 
        {row: 1, col: 0, className: "htCenter htMiddle"}, 
        {row: 1, col: 1, className: "htCenter htMiddle"}, 
        {row: 1, col: 2, className: "htCenter htMiddle"}, 
        {row: 1, col: 3, className: "htCenter htMiddle"}, 
        {row: 2, col: 0, className: "htCenter htMiddle"}, 
        {row: 2, col: 1, className: "htCenter htMiddle"}, 
        {row: 2, col: 2, className: "htCenter htMiddle"}, 
        {row: 2, col: 3, className: "htCenter htMiddle"}, 
        {row: 3, col: 0, className: "htCenter htMiddle"}, 
        {row: 3, col: 1, className: "htCenter htMiddle"}, 
        {row: 3, col: 2, className: "htCenter htMiddle"}, 
        {row: 3, col: 3, className: "htCenter htMiddle"}, 
        {row: 4, col: 0, className: "htCenter htMiddle"}, 
        {row: 4, col: 1, className: "htCenter htMiddle"}, 
        {row: 4, col: 2, className: "htCenter htMiddle"}, 
        {row: 4, col: 3, className: "htCenter htMiddle"}, 
        {row: 5, col: 0, className: "htCenter htMiddle"}, 
        {row: 5, col: 1, className: "htCenter htMiddle"}, 
        {row: 5, col: 2, className: "htCenter htMiddle"}, 
        {row: 5, col: 3, className: "htCenter htMiddle"}, 
        {row: 6, col: 0, className: "htCenter htMiddle"}, 
        {row: 6, col: 1, className: "htCenter htMiddle"}, 
        {row: 6, col: 2, className: "htCenter htMiddle"}, 
        {row: 6, col: 3, className: "htCenter htMiddle"}, 
    ],
    filters: true,
    dropdownMenu: true
});

