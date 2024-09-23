let str = "1032";
let str_out = "";
let i = 0;
while (i < str.length) 
{
	for (let j = 0; j < str[i]; j = j+1) 
	{
		str_out = str_out + str[i];
	}
	i= i+1;
}

console.log(str_out);