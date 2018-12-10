window.addEventListener("load", () => {

    //board = [[ul, uc, ur], [cl, cc, cr], [ll, lc, lr]];
    board = [[ul, cl, ll], [uc, cc, lc], [ur, cr, lr]];

    turn = 'x'
    x_er.style.border = "2px red solid";

    document.querySelectorAll("table tr td").forEach(
    (e) => {
        e.addEventListener("click",
            (event) => {

                // check om feltet er ledigt? Man kan ikke sætte en brik i et felt der er optaget

                event.target.innerHTML = turn;
                
                // check om spilleren har vundet
                
                if (turn == 'x')
                {
                    turn = 'o';
                    // fjern et o i o_er
                    o_er.style.border = "2px red solid";
                    x_er.style.border = "none";
                }
                else
                {
                    turn = 'x';
                    // fjern et x i x_er
                    x_er.style.border = "2px red solid";
                    o_er.style.border = "none";
                }

                

            })
        }
    )

});
