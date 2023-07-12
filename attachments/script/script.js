//question.refresh_question();
//question.timer_refresh(60);

let set_player = {
        "time": 60,
        "name": "",
        "true": [],
        "false": []
    },
    gui_input_step = 1;

function start_gui() {
    Swal.fire({
        title: 'Süreyi giriniz',
        html: `<input type="number" value="` + (set_player['time'] ?? 60) + `" step="${gui_input_step}" class="swal2-input" id="range-value" placeholder="Süre">`,
        input: 'range',
        inputValue: set_player['time'] ?? 60,
        allowOutsideClick: false,
        confirmButtonText: "DEVAM",
        confirmButtonColor: '#3085d6',
        inputAttributes: {
            min: 10,
            max: 120,
            step: gui_input_step
        },
        didOpen: () => {
            const inputRange = Swal.getInput();
            const inputNumber = Swal.getHtmlContainer().querySelector('#range-value');
            inputRange.nextElementSibling.style.display = 'none';
            inputRange.style.width = '100%';
            inputRange.addEventListener('input', () => {
                inputNumber.value = inputRange.value ?? set_player['time']
            });
            inputNumber.addEventListener('change', () => {
                inputRange.value = inputNumber.value ?? set_player['time']
            });
        }
    }).then((result) => {
        if (result.isConfirmed) {
            set_time = result.value;
            Swal.fire({
                title: 'Adınız',
                input: 'text',
                inputValue: set_player['name'],
                inputPlaceholder: 'Adınızı giriniz',
                allowOutsideClick: false,
                confirmButtonText: "BAŞLA",
                confirmButtonColor: '#3085d6',
                inputAttributes: {
                    min: 5,
                    max: 120,
                    step: gui_input_step
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    question.toggle_que();
                    question.refresh_que();
                    question.timer_refresh(set_time);

                    set_player['name'] = result.value,
                    set_player['time'] = set_time,
                    set_player['true'] = [],
                    set_player['false'] = [];
                    
                    score.restart_score();

                    $("#question-button").text("KONTROL ET");
                }
            });
        }
    });
}

$("#question-button").click(function () {
    if ($(this).text() == "BAŞLA") start_gui();
    else question.check();
})

document.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) question.check();
});