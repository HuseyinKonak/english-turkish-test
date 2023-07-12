class score {
    static score = 0;

    static get_score(){
        let score = this.calc_score(set_player['true'].length, set_player['false'].length, set_player['time']);
        $(".question #score").html(score <= 0 ? 0 : score);
    }


    static calc_score(true_val, false_val, timer) {
        if (!true_val) return 0;
        
        var score = (true_val * 5) - (false_val * 4);
        var timer_score = Math.floor((3 / timer) * 100);

        score += timer_score;

        return score;
    }

    static restart_score() {
        $(".question #score").html('0');
    }
}