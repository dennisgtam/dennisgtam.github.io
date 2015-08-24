alphabet_string = "abcdefghijklmnopqrstuvwxyz";
alphabet = new Array();
for (var index = 0; index < alphabet_string.length; index++){
	alphabet.push(alphabet_string[index]);
}


function Cipher(shift){
	this.shift = shift;

	this.mod = function(num, mod_v){
		return ((num % mod_v) + mod_v) % mod_v;
	}

	this.decode = function(message){
		var decoded = "";
		for(var index = 0; index < message.length; index++){
			var character = message[index];
			console.log(character + " maps to " + alphabet[this.mod((alphabet.indexOf(character)-this.shift),26)]);
			if (alphabet.indexOf(character) != -1) decoded = decoded + alphabet[this.mod((alphabet.indexOf(character)-this.shift),26)];
			else if (character == "@" || character == "#" || character == "$" || character == "%"|| character == "^" || character == "&"|| character =="*") decoded = decoded + " ";
			else decoded = decoded + character;
		}
		return decoded;
	};
}

mycipher = new Cipher(4);
console.log(mycipher.shift);
console.log(mycipher.decode);
console.log(mycipher.decode("m^aerx%e&gsoi!"));