let dark = document.getElementById('darkmod');
let darkTheme = true
dark.addEventListener('click' , function(){
	if (darkTheme) {
		document.getElementById('hh').setAttribute('data-theme','dracula')
		document.getElementById('logo').setAttribute('src' ,'Picsart_23-06-04_17-12-24-002.png')
		darkTheme = false
	} else {
		document.getElementById('hh').setAttribute('data-theme','cupcake')
		document.getElementById('logo').setAttribute('src' ,'Logo.png')
		darkTheme = true
	}
	
})


// music plyer