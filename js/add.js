var data= {
	defaultLanguage:'en',
	dictionary: {
		en: {
			name: "Your name",
			namePlaceholder:"Input your name",
			genderMale: "Male",
			genderFemale: "Female",
			countryWraper:"Choose country where you live",
			countries: {
				ua: "Ukraine",
				ru: "Russia",
				fr: "France",
			    us: "USA"
			},
			isShowBornCountry: "The country where you born and lived",	
			bornCountryWrapper:"Choose country where you born",
			email: "Your email",
			emailPlaceholder: "Input your email",
			buttonText: "Send"
		},
		ua: {
			name: "Ваше имя",
			namePlaceholder:"Впищи своё имячко",
			genderMale: "мужик",
			genderFemale: "Женщина",
			countryWraper:"Выбери страну где ты живёшь",
			countries: {
				ua: "Ukraine",
				ru: "Russia",
				fr: "France",
			    us: "USA"
			},
			isShowBornCountry: "странна где тебф выродили и ты жывёшь",	
			bornCountryWrapper:"Выбери странну где тебя родили",
			email: "твой емайл",
			emailPlaceholder: "введи свой емайл",
			buttonText: "отправить"
		},
	}
}
$(".language-image").click(function(event) {
	var currentLanguage = $(this).attr('data-lang')
	$(".language-image").removeClass('active')
	$(this).addClass('active');
	console.log(currentLanguage)
});
function setFormValue(){
	var dict = data.dictionary[currentLanguage]
	$("#name .description").text(dict.name)
	$("#name input").attr('placeholder',dict.namePlaceholder)
}
var currentLanguage = data.defaultLanguage;
setFormValue();
