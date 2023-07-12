class question {
    static test_mode = false;
    static toggle = false;
    static active_question = [];
    static questions = [
        { question: "name", answer: ["isim", "ad"] },
        { question: "how", answer: "nasıl" },
        { question: "you", answer: "sen" },
        { question: "are", answer: "olsun" },
        { question: "from", answer: "nereden" },
        { question: "time", answer: "zaman" },
        { question: "old", answer: "yaşlı" },
        { question: "good", answer: "iyi" },
        { question: "bad", answer: "kötü" },
        { question: "happy", answer: "mutlu" },
        { question: "sad", answer: "üzgün" },
        { question: "big", answer: "büyük" },
        { question: "small", answer: "küçük" },
        { question: "hot", answer: "sıcak" },
        { question: "cold", answer: "soğuk" },
        { question: "fast", answer: "hızlı" },
        { question: "slow", answer: "yavaş" },
        { question: "today", answer: "bugün" },
        { question: "tomorrow", answer: "yarın" },
        { question: "yesterday", answer: "dün" },
        { question: "love", answer: "sevgi" },
        { question: "hate", answer: "nefret" },
        { question: "happy", answer: "mutlu" },
        { question: "sad", answer: "üzgün" },
        { question: "goodbye", answer: "hoşça kal" },
        { question: "hello", answer: "merhaba" },
        { question: "thank you", answer: "teşekkür ederim" },
        { question: "please", answer: "lütfen" },
        { question: "sorry", answer: "üzgünüm" },
        { question: "help", answer: "yardım et" },
        { question: "where", answer: "nerede" },
        { question: "when", answer: "ne zaman" },
        { question: "why", answer: "neden" },
        { question: "how much", answer: "ne kadar" },
        { question: "which", answer: "hangi" },
        { question: "who", answer: "kim" },
        { question: "what", answer: "ne" },
        { question: "bus", answer: "otobüs" },
        { question: "car", answer: "araba" },
        { question: "train", answer: "tren" },
        { question: "plane", answer: "uçak" },
        { question: "bicycle", answer: "bisiklet" },
        { question: "book", answer: "kitap" },
        { question: "pen", answer: "kalem" },
        { question: "pencil", answer: "kurşun kalem" },
        { question: "bag", answer: "çanta" },
        { question: "shoes", answer: "ayakkabı" },
        { question: "shirt", answer: "gömlek" },
        { question: "pants", answer: "pantolon" },
        { question: "dress", answer: "elbise" },
        { question: "apple", answer: "elma" },
        { question: "banana", answer: "muz" },
        { question: "orange", answer: "portakal" },
        { question: "grape", answer: "üzüm" },
        { question: "watermelon", answer: "karpuz" },
        { question: "chicken", answer: "tavuk" },
        { question: "beef", answer: "sığır eti" },
        { question: "fish", answer: "balık" },
        { question: "rice", answer: "pirinç" },
        { question: "bread", answer: "ekmek" },
        { question: "milk", answer: "süt" },
        { question: "coffee", answer: "kahve" },
        { question: "tea", answer: "çay" },
        { question: "juice", answer: "meyve suyu" },
        { question: "water", answer: "su" },
        { question: "school", answer: "okul" },
        { question: "university", answer: "üniversite" },
        { question: "hospital", answer: "hastane" },
        { question: "bank", answer: "banka" },
        { question: "post office", answer: "postane" },
        { question: "park", answer: "park" },
        { question: "garden", answer: "bahçe" },
        { question: "movie", answer: "film" },
        { question: "music", answer: "müzik" },
        { question: "art", answer: "sanat" },
        { question: "dance", answer: "dans" },
        { question: "play", answer: "oyna" },
        { question: "read", answer: "oku" },
        { question: "write", answer: "yaz" },
        { question: "listen", answer: "dinle" },
        { question: "speak", answer: "konuş" },
        { question: "learn", answer: "öğren" },
        { question: "study", answer: "çalış" },
        { question: "swim", answer: "yüz" },
        { question: "run", answer: "koş" },
        { question: "walk", answer: "yürü" },
        { question: "sleep", answer: "uyumak" },
        { question: "eat", answer: "ye" },
        { question: "drink", answer: "iç" },
        { question: "happy", answer: "mutlu" },
        { question: "sad", answer: "üzgün" },
        { question: "angry", answer: "kızgın" },
        { question: "tired", answer: "yorgun" },
        { question: "hungry", answer: "aç" },
        { question: "thirsty", answer: "susuz" },
        { question: "beautiful", answer: "güzel" },
        { question: "ugly", answer: "çirkin" },
        { question: "interesting", answer: "ilginç" },
        { question: "boring", answer: "sıkıcı" },
        { question: "difficult", answer: "zor" },
        { question: "easy", answer: "kolay" },
        { question: "expensive", answer: "pahalı" },
        { question: "cheap", answer: "ucuz" },
        { question: "good", answer: "iyi" },
        { question: "bad", answer: "kötü" },
        { question: "right", answer: "doğru" },
        { question: "wrong", answer: "yanlış" },
        { question: "happy", answer: "mutlu" },
        { question: "sad", answer: "üzgün" },
        { question: "hot", answer: "sıcak" },
        { question: "cold", answer: "soğuk" },
        { question: "fast", answer: "hızlı" },
        { question: "slow", answer: "yavaş" },
        { question: "today", answer: "bugün" },
        { question: "tomorrow", answer: "yarın" },
        { question: "yesterday", answer: "dün" },
        { question: "love", answer: "sevgi" },
        { question: "hate", answer: "nefret" },
        { question: "happy", answer: "mutlu" },
        { question: "sad", answer: "üzgün" },
        { question: "goodbye", answer: "hoşça kal" },
        { question: "hello", answer: "merhaba" },
        { question: "thank you", answer: "teşekkür ederim" },
        { question: "please", answer: "lütfen" },
        { question: "sorry", answer: "üzgünüm" },
        { question: "help", answer: "yardım et" },
        { question: "where", answer: "nerede" },
        { question: "when", answer: "ne zaman" },
        { question: "why", answer: "neden" },
        { question: "how much", answer: "ne kadar" },
        { question: "which", answer: "hangi" },
        { question: "who", answer: "kim" },
        { question: "what", answer: "ne" },
        { question: "bus", answer: "otobüs" },
        { question: "car", answer: "araba" },
        { question: "train", answer: "tren" },
        { question: "plane", answer: "uçak" },
        { question: "bicycle", answer: "bisiklet" },
        { question: "book", answer: "kitap" },
        { question: "pen", answer: "kalem" },
        { question: "pencil", answer: "kurşun kalem" },
        { question: "bag", answer: "çanta" },
        { question: "shoes", answer: "ayakkabı" },
        { question: "shirt", answer: "gömlek" },
        { question: "pants", answer: "pantolon" },
        { question: "dress", answer: "elbise" },
        { question: "apple", answer: "elma" },
        { question: "banana", answer: "muz" },
        { question: "orange", answer: "portakal" },
        { question: "grape", answer: "üzüm" },
        { question: "watermelon", answer: "karpuz" },
        { question: "chicken", answer: "tavuk" },
        { question: "beef", answer: "sığır eti" },
        { question: "fish", answer: "balık" },
        { question: "rice", answer: "pirinç" },
        { question: "bread", answer: "ekmek" },
        { question: "milk", answer: "süt" },
        { question: "coffee", answer: "kahve" },
        { question: "tea", answer: "çay" },
        { question: "juice", answer: "meyve suyu" },
        { question: "water", answer: "su" },
        { question: "school", answer: "okul" },
        { question: "university", answer: "üniversite" },
        { question: "hospital", answer: "hastane" },
        { question: "bank", answer: "banka" },
        { question: "post office", answer: "postane" },
        { question: "park", answer: "park" },
        { question: "garden", answer: "bahçe" },
        { question: "movie", answer: "film" },
        { question: "music", answer: "müzik" },
        { question: "art", answer: "sanat" },
        { question: "dance", answer: "dans" },
        { question: "play", answer: "oyna" },
        { question: "read", answer: "oku" },
        { question: "write", answer: "yaz" },
        { question: "listen", answer: "dinle" },
        { question: "speak", answer: "konuş" },
        { question: "learn", answer: "öğren" },
        { question: "study", answer: "çalış" },
        { question: "swim", answer: "yüz" },
        { question: "run", answer: "koş" },
        { question: "walk", answer: "yürü" },
        { question: "sleep", answer: "uyu" },
        { question: "eat", answer: "ye" },
        { question: "drink", answer: "iç" },
        { question: "happy", answer: "mutlu" },
        { question: "sad", answer: "üzgün" },
        { question: "angry", answer: "kızgın" },
        { question: "tired", answer: "yorgun" },
        { question: "hungry", answer: "aç" },
        { question: "thirsty", answer: "susuz" },
        { question: "beautiful", answer: "güzel" },
        { question: "ugly", answer: "çirkin" },
        { question: "interesting", answer: "ilginç" },
        { question: "boring", answer: "sıkıcı" },
        { question: "difficult", answer: "zor" },
        { question: "easy", answer: "kolay" },
        { question: "expensive", answer: "pahalı" },
        { question: "cheap", answer: "ucuz" },
        { question: "good", answer: "iyi" },
        { question: "bad", answer: "kötü" },
        { question: "right", answer: "doğru" },
        { question: "wrong", answer: "yanlış" },
        { question: "happy", answer: "mutlu" },
        { question: "sad", answer: "üzgün" },
        { question: "hot", answer: "sıcak" },
        { question: "cold", answer: "soğuk" },
        { question: "fast", answer: "hızlı" },
        { question: "slow", answer: "yavaş" },
        { question: "today", answer: "bugün" },
        { question: "tomorrow", answer: "yarın" },
        { question: "yesterday", answer: "dün" },
        { question: "love", answer: "sevgi" },
        { question: "hate", answer: "nefret" },
        { question: "happy", answer: "mutlu" },
        { question: "sad", answer: "üzgün" },
        { question: "goodbye", answer: "hoşça kal" },
        { question: "hello", answer: "merhaba" },
        { question: "thank you", answer: "teşekkür ederim" },
        { question: "please", answer: "lütfen" },
        { question: "sorry", answer: "üzgünüm" },
        { question: "help", answer: "yardım et" },
        { question: "where", answer: "nerede" },
        { question: "when", answer: "ne zaman" },
        { question: "why", answer: "neden" },
        { question: "how much", answer: "ne kadar" },
        { question: "which", answer: "hangi" },
        { question: "who", answer: "kim" },
        { question: "what", answer: "ne" },
        { question: "bus", answer: "otobüs" },
        { question: "car", answer: "araba" },
        { question: "train", answer: "tren" },
        { question: "plane", answer: "uçak" },
        { question: "bicycle", answer: "bisiklet" },
        { question: "book", answer: "kitap" },
        { question: "pen", answer: "kalem" },
        { question: "pencil", answer: "kurşun kalem" },
        { question: "bag", answer: "çanta" },
        { question: "shoes", answer: "ayakkabı" },
        { question: "shirt", answer: "gömlek" },
        { question: "pants", answer: "pantolon" },
        { question: "dress", answer: "elbise" },
        { question: "apple", answer: "elma" },
        { question: "banana", answer: "muz" },
        { question: "orange", answer: "portakal" },
        { question: "grape", answer: "üzüm" },
        { question: "watermelon", answer: "karpuz" },
        { question: "chicken", answer: "tavuk" },
        { question: "beef", answer: "sığır eti" },
        { question: "fish", answer: "balık" },
        { question: "rice", answer: "pirinç" },
        { question: "bread", answer: "ekmek" },
        { question: "milk", answer: "süt" },
        { question: "coffee", answer: "kahve" },
        { question: "tea", answer: "çay" },
        { question: "juice", answer: "meyve suyu" },
        { question: "water", answer: "su" },
        { question: "school", answer: "okul" },
        { question: "university", answer: "üniversite" },
        { question: "hospital", answer: "hastane" },
        { question: "bank", answer: "banka" },
        { question: "post office", answer: "postane" },
        { question: "park", answer: "park" },
        { question: "garden", answer: "bahçe" },
        { question: "movie", answer: "film" },
        { question: "music", answer: "müzik" },
        { question: "art", answer: "sanat" },
        { question: "dance", answer: "dans" },
        { question: "play", answer: "oyna" },
        { question: "read", answer: "oku" },
        { question: "write", answer: "yaz" },
        { question: "listen", answer: "dinle" },
        { question: "speak", answer: "konuş" },
        { question: "learn", answer: "öğren" },
        { question: "study", answer: "çalış" },
        { question: "swim", answer: "yüz" },
        { question: "run", answer: "koş" },
        { question: "walk", answer: "yürü" },
        { question: "sleep", answer: "uyu" },
        { question: "eat", answer: "ye" },
        { question: "drink", answer: "iç" },
        { question: "happy", answer: "mutlu" },
        { question: "sad", answer: "üzgün" },
        { question: "angry", answer: "kızgın" },
        { question: "tired", answer: "yorgun" },
        { question: "hungry", answer: "aç" },
        { question: "thirsty", answer: "susuz" },
        { question: "beautiful", answer: "güzel" },
        { question: "ugly", answer: "çirkin" },
        { question: "interesting", answer: "ilginç" },
        { question: "boring", answer: "sıkıcı" },
        { question: "difficult", answer: "zor" },
        { question: "easy", answer: "kolay" },
        { question: "expensive", answer: "pahalı" },
        { question: "cheap", answer: "ucuz" },
        { question: "good", answer: "iyi" },
        { question: "bad", answer: "kötü" },
        { question: "right", answer: "doğru" },
        { question: "wrong", answer: "yanlış" },
        { question: "happy", answer: "mutlu" },
        { question: "sad", answer: "üzgün" },
        { question: "hot", answer: "sıcak" },
        { question: "cold", answer: "soğuk" },
        { question: "fast", answer: "hızlı" },
        { question: "slow", answer: "yavaş" },
        { question: "today", answer: "bugün" },
        { question: "tomorrow", answer: "yarın" },
        { question: "yesterday", answer: "dün" },
        { question: "love", answer: "sevgi" },
        { question: "hate", answer: "nefret" },
        { question: "happy", answer: "mutlu" },
        { question: "sad", answer: "üzgün" },
        { question: "goodbye", answer: "hoşça kal" },
        { question: "hello", answer: "merhaba" },
        { question: "thank you", answer: "teşekkür ederim" },
        { question: "please", answer: "lütfen" },
        { question: "sorry", answer: "üzgünüm" },
        { question: "help", answer: "yardım et" }
    ];
    static test_questions = [
        { question: "name", answer: ["ad", "set_name"] },
        { question: "TESTED", answer: "test" }
    ];

    static refresh_que() {
        $("#answer").val("");
        this.active_question = this.test_mode ? (this.test_questions[Math.floor(Math.random() * this.test_questions.length)]) : (this.questions[Math.floor(Math.random() * this.questions.length)]);
        $("#question-word").html(this.active_question["question"]);

        score.get_score();
    }

    static timer_refresh(counter) {
        let start_count = counter,
        canvas = document.getElementById("canvas"),
        ctx = canvas.getContext("2d"),
        textX = canvas.width / 2,
        textY = canvas.height / 2,
        lastend = 0,
        timer_colors = ["#D95B43", "#ccc", "#F1F1F1", "#000"];
        timer();
        counter--;

        var countdownInterval = setInterval(function() {

            timer();

            if (counter === 0) {
                clearInterval(countdownInterval);

                score.restart_score();
                $("#question-button").text("BAŞLA");
                question.toggle_que();
                score_table.add_list(set_player['name'], set_player['time'], set_player['true'], set_player['false'])


                Swal.fire({
                    title: 'Süreniz doldu!',
                    allowOutsideClick: false,
                    confirmButtonText: "KAPAT",
                    confirmButtonColor: '#3085d6',
                    html: "⏱️ " + set_player['time'] + " - ⭐ " + score.calc_score(set_player['true'].length, set_player['false'].length, set_player['time']) + " <br>✔️ " + set_player['true'].length + " - ❌ " + set_player['false'].length + `<br>
                    <div class="container">
                        <div class="row">
                            <div class="col-6">
                                <ul id="true_answers" style="list-style-type: none;"></ul>
                            </div>
                            <div class="col-6">
                                <ul id="false_answers" style="list-style-type: none;"></ul>
                            </div>
                        </div>
                    </div>
                    `,
                });
                set_player['true'].forEach(answer => {
                    $("#true_answers").html($("#true_answers").html() + "<li>" + answer['question'] + " > " + answer['answer'] + "</li>");
                });
                set_player['false'].forEach(answer => {
                    $("#false_answers").html($("#false_answers").html() + "<li>" + answer['question'] + " > " + answer['answer'] + "</li>");
                });
            }
            counter--;
        }, 1000);

        function timer() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.beginPath();
            ctx.fillStyle = timer_colors[1];
            ctx.arc(100, 75, 60, 0, Math.PI*2);
            ctx.fill();
            ctx.beginPath();
            ctx.fillStyle = timer_colors[0];
            ctx.moveTo(100, 75);
            ctx.arc(100, 75, 60, Math.PI*2, Math.PI*2 + (Math.PI * 2 * ((start_count-counter) / start_count)), false);
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = timer_colors[2];
            ctx.arc(100, 75, 55, 0, Math.PI*2);
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = timer_colors[3];
            ctx.font = "Bold 24px Arial";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(counter, textX, textY);
        }
    }

    static show_que() {
        $("#question").removeClass('hidden');
        $("#question-button").text('KONTROL ET');

        this.toggle = true;
    }

    static hide_que() {
        $("#question").addClass('hidden');
        $("#question-button").text('BAŞLA');

        this.toggle = false;
    }

    static toggle_que() {
        $("#question").stop().toggle(500);
        this.toggle = !this.toggle;
    }

    static check() {
        if (!$("#answer").val()) return;
        let answer = typeof(this.active_question['answer']) != Array ? this.active_question["answer"] .includes( $("#answer").val().toLowerCase()) : 0;
        
        if ( answer ) {
            Toast.fire({
                icon: 'success',
                title: 'Tebrikler cevabınız doğru!'
            })
            set_player['true'].push({
                "question": this.active_question["question"],
                "answer": this.active_question["answer"]
            });
        } else {
            Toast.fire({
                icon: 'error',
                title: 'Üzgünüm cevabınız yanlış!'
            })
            set_player['false'].push({
                "question": this.active_question["question"],
                "answer": this.active_question["answer"]
            });
        }

        this.refresh_que();
    }
}