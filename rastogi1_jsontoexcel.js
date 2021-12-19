let excel = require('xlsx');
let data = require('./rastogi1.json');
let newWb = excel.utils.book_new();
let newWs = excel.utils.json_to_sheet(data);
excel.utils.book_append_sheet(newWb, newWs, 'rastogi1');
excel.writeFile(newWb, './rastogi1.xlsx');
