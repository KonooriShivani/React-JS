//export is of - 2 types


// ----------1st  Type: Default import and export----------

//---------It sends the value to another file without the need of giving a name, so when
//---------it is imported it can be received using any name(at export u have to send it using exact name while at import u can use any name)
var a = 10;

export default a; //sends only one value







//-----------2nd Type: Named export

//---------At export and import u have to use same name
//---------At import u have to use cursive brackets {name}
export const arr = [10, 20 , 30];

