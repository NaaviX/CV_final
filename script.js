let app = new Vue({
    el: '#head',
    data: {
        firstname: 'Antoine',
        lastname: 'Legrand'
    },
    computed: {
        fullname: function(){
            return this.firstname + ' ' + this.lastname
        }
    }
});



$('.scrollTo').click(function() { // Au clic sur un élément
			var page = $(this).attr('href'); // Page cible
			var speed = 750; // Durée de l'animation (en ms)
			$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
			return false;
		});
        
    $(document).ready(function(){
    
    var $nom = $('#nom'),
        $email = $('#email'),
        $msg = $('#message'),
        $envoi = $('#envoi'),
        $erreur = $('#erreur'),
        $champ = $('.champ');
        $tel = $('#telephone');
        
    $envoi.click(function(e){
        e.preventDefault(); // on annule la fonction par défaut du bouton d'envoi
        // puis on lance la fonction de vérification sur tous les champs :
        verifier($nom);
        verifier($email);
        verifier($msg);
    });
    function verifier(champ){
        if(champ.val() == ""){ // si le champ est vide
    	    $erreur.css('display', 'block'); // on affiche le message d'erreur
            champ.css({ // on rend le champ rouge
    	        borderColor : 'red',
    	    });
        }
    }
    });
    
    function switchOnglet() {
    var scrollTop = $(window).scrollTop() + $(window).height()/2;
    $('#Accueil').removeClass("active");
    $('#CV').removeClass("active");
    $('#Portefolio').removeClass("active");
    $('#Contact').removeClass("active");
    
    if (scrollTop >= $('body').offset().top && scrollTop < $('#cv').offset().top) {
        $('#Accueil').addClass("active");
    }
    else if (scrollTop >= $('#cv').offset().top && scrollTop < $('#portefolio').offset().top) {
        $('#CV').addClass("active");
    }
    else if (scrollTop >= $('#portefolio').offset().top && scrollTop < $('#contact').offset().top) {
        $('#Portefolio').addClass("active");
    }
    else {
        $('#Contact').addClass("active");
    }
}
$(document).ready(function() {
    switchOnglet();
     
    // quand on scroll
    $(window).scroll(function() {
        switchOnglet();
    });
     
    // quand on redimensionne
    $(window).resize(function() {
        switchOnglet();
    });
});