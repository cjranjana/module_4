var names=new Array();
names[0]="Theresa";
names[1]="Tessa";
names[2]="Hardin";
names[3]="Mariyam";
names[4]="zeya";
names[5]="mathew";
names[6]="peter";
names[7]="kiara";
names[8]="freya";
names[9]="sakhi";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}