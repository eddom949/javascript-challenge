// from data.js
var tableData = data;

// YOUR CODE HERE!
//console.log(tableData);

var tBody = d3.select('tbody');
var button = d3.select('#filter-btn');

tableData.forEach( ( element ) =>
{
//console.log(element);
//console.log (inputDate);
//if( element.datetime === inputDate )
//{
var row = tBody.append('tr');
row.append( 'td' ).text( element.datetime );
row.append( 'td' ).text( element.city);
row.append( 'td' ).text( element.state);
row.append( 'td' ).text( element.country);
row.append( 'td' ).text( element.shape);
row.append( 'td' ).text( element.durationMinutes);
row.append( 'td' ).text( element.comments);
//}
});

function clickHandler()
{
var inputDate = d3.select('#datetime').property('value');
//from:
//https://www.daniweb.com/programming/web-development/threads/113340/delete-all-rows-from-table-in-javascript
for(var i = document.getElementById("ufo-table").rows.length; i > 0;i--)
{
document.getElementById("ufo-table").deleteRow(i -1);
}

tableData.forEach( ( element ) =>
{
//console.log(element);
console.log (inputDate);
if( element.datetime === inputDate )
{
var row = tBody.append('tr');
row.append( 'td' ).text( element.datetime );
row.append( 'td' ).text( element.city);
row.append( 'td' ).text( element.state);
row.append( 'td' ).text( element.country);
row.append( 'td' ).text( element.shape);
row.append( 'td' ).text( element.durationMinutes);
row.append( 'td' ).text( element.comments);
}

});
}

button.on('click', clickHandler );
