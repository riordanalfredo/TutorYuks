// mock arrays of tutors
const tutors = [
    {
        tutorName:'Primagama',
        desc: 'This is desc for Primagama'
    },
    {
        tutorName:'Gajah Mada',
        desc: 'This is a desc for Gajah Mada'
    }
];

$(function () {
    for(let i=0;i<tutors.length;i++){
        $('#TutorInfoCard').append('<div id="' +
            i.toString() +
            '" ></div>');

        let $uniqueId = $("#"+i.toString());

        // load the InfoCard to load at each div wrapper
        $uniqueId.load("./ReusableComponents/TutorInfoCard.html", function (){

            $('.mdl-card__title-text').each(function(i){
                $(this).text(tutors[i].tutorName);
            });

            $('.mdl-card__supporting-text').each(function(i){
                $(this).text(tutors[i].desc);
            });
        });

        // insert a line break after each dynamically added div
        $('<br><br>').insertAfter($uniqueId);
    }

});