$(document).ready(function () {

    var events = [
        {
            date: 'January,2021 - Present',
            content: 'Programming Hero Online Course <small>For Full-stack Web Development</small>'
        },
        {
            date: 'March,2020 - April, 2020',
            content: 'Sololearn Online Course  <small>For Fundamental HTML</small>'
        },

        {
            date: 'July,2019 - Present',
            content: 'Lovely Professional University  <small>For B.Tech Computer Science & Engineering</small>'
        },
        {
            date: 'July,2016 - June,2018',
            content: 'Govt. Azizul Haque College  <small>For Higher Secondary School Certificate</small>'
        },

        {
            date: 'January,2014 - May,2016',
            content: 'BIAM Modle School & College  <small>For Secondary School Certificate</small>'
        },
    ];

    $('#my-timeline').roadmap(events, {
        eventsPerSlide: 6,
        slide: 1,
        prevArrow: '<i class="fas fa-chevron-left"></i>',
        nextArrow: '<i class="fas fa-chevron-right"></i>'
    });
});