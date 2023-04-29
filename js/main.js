// --------------------------------------------------------------------
// --------------------------- Landing Page ---------------------------
// --------------------------------------------------------------------
$('#searchBarOpen').click(() => {
    $('.searchNav').removeClass('closed')
})

$('#searchBarClose').click(() => {
    $('.searchNav').addClass('closed')
})

if ($('#advisors').length) {
    new Splide('#advisors .splide', {
        type: 'slide',
        direction: 'rtl',
        pagination: false,
        gap: '1rem',
        perMove: 1,
        perPage: 4,
        padding: { left: 20, right: 20 },
        breakpoints: {
            600: {
                perPage: 1,
            },
            992: {
                perPage: 2
            },
            1200: {
                perPage: 3
            }
        }
    }).mount()
}

if ($('#gallery').length) {
    new Splide('#gallery .splide', {
        type: 'slide',
        direction: 'rtl',
        pagination: false,
        gap: '1rem',
        perMove: 1,
        perPage: 3,
        breakpoints: {
            600: {
                perPage: 1,
            },
            1200: {
                perPage: 2
            }
        }
    }).mount()
}

if ($('#workshops').length) {
    new Splide('#workshops .splide', {
        type: 'slide',
        direction: 'rtl',
        pagination: false,
        gap: '1rem',
        perMove: 1,
        perPage: 4,
        padding: { left: 20, right: 20 },
        breakpoints: {
            600: {
                perPage: 1,
            },
            992: {
                perPage: 2
            },
            1200: {
                perPage: 3
            }
        }
    }).mount()
}

// --------------

const cards = $('#card-slider .card').toArray();

startAnim(cards);

function startAnim(array) {
    if (array.length >= 4) {
        TweenMax.fromTo(
            array[0],
            0.5,
            { x: 0, y: 0, opacity: 0.25 },
            { x: 0, y: -120, opacity: 0, zIndex: 0, delay: 0.03, ease: Cubic.easeInOut, onComplete: sortArray(array) }
        );

        TweenMax.fromTo(
            array[1],
            0.5,
            { x: 79, y: 125, opacity: 1, zIndex: 1 },
            {
                x: 0, y: 0, opacity: 0.25, zIndex: 0,
                boxShadow: '0 5px 15px #e5e5e5', ease: Cubic.easeInOut
            }
        );

        TweenMax.to(
            array[2],
            0.5,
            {
                bezier: [{ x: 0, y: 250 }, { x: 65, y: 200 }, { x: 79, y: 125 }],
                boxShadow: '0 5px 15px #e5e5e5', zIndex: 1, opacity: 1, ease: Cubic.easeInOut
            }
        );

        TweenMax.fromTo(
            array[3],
            0.5,
            { x: 0, y: 400, opacity: 0, zIndex: 0 },
            { x: 0, y: 250, opacity: 0.65, zIndex: 0, ease: Cubic.easeInOut }
        );
    } else {
        $('#card-slider').append('<p>Sorry, carousel should contain more than 3 slides</p>')
    }
}

function sortArray(array) {
    clearTimeout(delay);
    var delay = setTimeout(function () {
        var firstElem = array.shift();
        array.push(firstElem);
        return startAnim(array);
    }, 3000)
}

// --------------------------------------------------------------------
// --------------------------- Advisors Page --------------------------
// --------------------------------------------------------------------

$('.filter-box:first-child .header').click(() => {
    $('.filter-box:first-child .body').slideToggle()
    $('.filter-box:first-child .header i').toggleClass('closed')
})

$('.filter-box:last-child .header').click(() => {
    $('.filter-box:last-child .body').slideToggle()
    $('.filter-box:last-child .header i').toggleClass('closed')
})

$(document).ready(() => {
    if ($('.filter-box').length) {
        if (window.matchMedia('(max-width: 991.98px)').matches) {
            $('.filter-box:first-child .body').slideUp()
            $('.filter-box:last-child .body').slideUp()
            $('.filter-box:first-child .header i').addClass('closed')
            $('.filter-box:last-child .header i').addClass('closed')
        }
    }
})

// --------------------------- Advisor Page ---------------------------
// --------------------------------------------------------------------

if ($('#advisor-section').length) {
    new Splide('#advisor-section .splide', {
        type: 'slide',
        direction: 'rtl',
        pagination: false,
        gap: '5px',
        perMove: 1,
        perPage: 4,
        breakpoints: {
            400: {
                perPage: 3
            },
            500: {
                perPage: 4
            },
            600: {
                perPage: 5
            },
            992: {
                perPage: 6
            },
            1200: {
                perPage: 3
            }
        }
    }).mount()
}

$('.splide__slide').each((_, item) => {
    $(item).click(() => {
        $('.splide__slide').removeClass('active')
        $(item).addClass('active')
    })
})

let calendarModal = null
let reservationModal = null
let commentModal = null

if ($('#advisor-page').length) {
    calendarModal = new bootstrap.Modal(document.getElementById('calendarModal'))
    reservationModal = new bootstrap.Modal(document.getElementById('reservationModal'))
    commentModal = new bootstrap.Modal(document.getElementById('commentModal'))
}

$('#calendarModalOpener').click(() => calendarModal.show())
$('#calendarSubmitButton').click(() => calendarModal.hide())

$('#reservationModalOpener').click(() => reservationModal.show())
$('#reservationSubmitButton').click(() => reservationModal.hide())

$('#commentModalOpener').click(() => commentModal.show())
$('#commentSubmitButton').click(() => commentModal.hide())

$(document).ready(() => {
    if ($('#calendar-cont').length) {
        $('#calendar-cont').pDatepicker({
            "inline": true,
            "format": "LLLL",
            "viewMode": "day",
            "initialValue": true,
            "minDate": 1654842002746,
            "maxDate": 1686792402772,
            "autoClose": true,
            "position": "auto",
            "altFormat": "lll",
            "altField": "#altfieldExample",
            "onlyTimePicker": false,
            "onlySelectOnDate": false,
            "calendarType": "persian",
            "inputDelay": 800,
            "observer": false,
            "calendar": {
                "persian": {
                    "locale": "fa",
                    "showHint": true,
                    "leapYearMode": "algorithmic"
                },
                "gregorian": {
                    "locale": "en",
                    "showHint": false
                }
            },
            "navigator": {
                "enabled": true,
                "scroll": {
                    "enabled": true
                },
                "text": {
                    "btnNextText": ">",
                    "btnPrevText": "<"
                }
            },
            "toolbox": {
                "enabled": false,
                "calendarSwitch": {
                    "enabled": false,
                    "format": "MMMM"
                },
                "todayButton": {
                    "enabled": false,
                    "text": {
                        "fa": "امروز",
                        "en": "Today"
                    }
                },
                "submitButton": {
                    "enabled": false,
                    "text": {
                        "fa": "تایید",
                        "en": "Submit"
                    }
                },
                "text": {
                    "btnToday": "امروز"
                }
            },
            "timePicker": {
                "enabled": false,
                "step": 1,
                "hour": {
                    "enabled": false,
                    "step": null
                },
                "minute": {
                    "enabled": false,
                    "step": null
                },
                "second": {
                    "enabled": false,
                    "step": null
                },
                "meridian": {
                    "enabled": false
                }
            },
            "dayPicker": {
                "enabled": true,
                "titleFormat": "YYYY MMMM"
            },
            "monthPicker": {
                "enabled": true,
                "titleFormat": "YYYY"
            },
            "yearPicker": {
                "enabled": true,
                "titleFormat": "YYYY"
            },
            "responsive": true
        })
    }
})

$(document).ready(() => {
    const count = 3
    const allComments = $('.comments-cont').toArray()
    let hiddenComments = []

    $('.load-less').hide()

    const hideComments = () => {
        hiddenComments = []
        allComments.forEach((item, index) => {
            if (index >= count) {
                hiddenComments.push(item)
                $(item).addClass('hidden')
            }
        })
        $('.load-less').hide()
        $('.load-more').show()
    }

    hideComments()

    if (hiddenComments.length) {
        hideComments()
    }
    else {
        $('.load-more').hide()
    }

    const showComments = () => {
        hiddenComments.forEach((item, index) => {
            if (index < count) {
                $(item).removeClass('hidden')
            }
        })
        hiddenComments.splice(0, count)
        if (!hiddenComments.length) {
            $('.load-less').show()
            $('.load-more').hide()
        }
    }

    $('.load-more').click(() => {
        showComments()
    })

    $('.load-less').click(() => {
        hideComments()
    })
})

// --------------------------------------------------------------------
// --------------------------- Workshops Page -------------------------
// --------------------------------------------------------------------

$(document).ready(() => {
    const count = 6
    const allWorkshops = $('#workshops-section .col-11').toArray()
    let hiddenWorkshops = []

    $('.load-less').hide()

    const hideWorkshops = () => {
        hiddenWorkshops = []
        allWorkshops.forEach((item, index) => {
            if (index >= count) {
                hiddenWorkshops.push(item)
                $(item).addClass('hidden')
            }
        })
        $('.show-less').hide()
        $('.show-more').show()
    }

    hideWorkshops()

    if (hiddenWorkshops.length) {
        hideWorkshops()
    }
    else {
        $('.show-more').hide()
    }

    const showWorkshops = () => {
        hiddenWorkshops.forEach((item, index) => {
            if (index < count) {
                $(item).removeClass('hidden')
            }
        })
        hiddenWorkshops.splice(0, count)
        if (!hiddenWorkshops.length) {
            $('.show-less').show()
            $('.show-more').hide()
        }
    }

    $('.show-more').click(() => {
        showWorkshops()
    })

    $('.show-less').click(() => {
        hideWorkshops()
    })
})

// --------------------------------------------------------------------
// --------------------------- Workshop Page --------------------------
// --------------------------------------------------------------------

$(document).ready(() => {
    if ($('#workshop-page').length) {
        reservationModal = new bootstrap.Modal(document.getElementById('reservationModal'))
    }
    $('#reservationModalOpener2').click(() => reservationModal.show())
})

// --------------------------------------------------------------------
// ------------------------ Reservation Page --------------------------
// --------------------------------------------------------------------

$(document).ready(() => {
    if ($('#reservation-advisor-page').length) {
        calendarModal = new bootstrap.Modal(document.getElementById('calendarModal'))
        reservationModal = new bootstrap.Modal(document.getElementById('reservationModal'))
    }
    $('#calendarModalOpener2').click(() => calendarModal.show())
    $('#reservationModalOpener3').click(() => reservationModal.show())
})

// --------------------------------------------------------------------
// --------------------------- Recaptcha ------------------------------
// --------------------------------------------------------------------

function onSubmit(token) {
    document.getElementById("demo-form").submit();
}