class score_table {
    static list = [];
    static toggle = false;

    static hide_table() {
        this.toggle = false;
        $("#menu").stop().animate({ width: "25%" });
        $("#score-card").addClass('hidden');
    }

    static show_table() {
        this.toggle = true;
        $("#menu").stop().animate({ width: "55%" });
        $("#score-card").removeClass('hidden');
    }

    static toggle_table() {
        $("#menu").stop().animate({ width: this.toggle ? '25%' : '55%' }, 500);
        $("#score-card").stop().toggle(500);
        this.toggle = !this.toggle;
    }

    static refresh_table() {
        this.list.sort((a, b) => b.score - a.score);

        $("#score-table").html("");
        let num = 0;
        this.list.forEach(player_score => {
            num++;
            $("#score-table").html($("#score-table").html() + 
                `
                    <li>
                        <label class="score-list-left">
                            <label class="player-num">${num}</label>.&nbsp; <label class="player-name">${player_score['name']}</label>
                        </label>

                        <label class="score-list-right" style="">
                            ⭐&nbsp; <label class="player-score">` + score.calc_score(player_score['true_answer'].length, player_score['false_answer'].length, player_score['time']) + `</label> ⏱️&nbsp; <label class="player-time">${player_score['time']}</label>
                        </label>
                    </li>

                `);
        });}


    static add_list(name, time, true_answer, false_answer) {
        if (!(score_table.list).length) this.toggle_table();
        score_table.list.push({ "name": name, "time": time, "true_answer": true_answer, "false_answer": false_answer });
        score_table.refresh_table();
    }

}