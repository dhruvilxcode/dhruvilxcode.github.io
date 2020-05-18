$(".top-button").click(function() {
    $(".devkit").slideDown()
})

$(".close-btn").click(function() {
    $(".devkit").slideUp()
})

$(document).ready(function() {
    $.getJSON("devkit.json", function (data) {

        var html;

        html = `
            <div class="container">
        `

        $.each(data, function (key, _value) {
            
            html = `
                ${html}
                <h1 class="mt-2">${key[0].toUpperCase()}${key.slice(1)}</h1>
                <div class="row mt-2">
            `

            $.each(data[key], function(_dkey, dvalue) {
                html = `
                    ${html}
                    <div class="col card m-2 p-2">
                        <div class="card-body">
                            <h5 class="card-title">${dvalue.title}</h5>
                            <p class="card-text">${dvalue.description}</p>
                            <a href="${dvalue.url}" target="_blank" class="btn btn-outline-warning">OPEN <i class="material-icons">launch</i></a>
                        </div>
                    </div>
                `
            })

            html = `
                ${html}
                </div>
            `
        })


        html = `
            ${html}
            </div>
        `

        $(".devkit-container").append(html)

    })
})