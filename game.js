window.addEventListener("load", () => {

    //board = [[ul, uc, ur], [cl, cc, cr], [ll, lc, lr]];
    board = [[ul, cl, ll], [uc, cc, lc], [ur, cr, lr]];

    turn = 'x'
    x_er.style.border = "2px red solid";

    document.querySelectorAll("table tr td").forEach(
    (e) => {
        e.addEventListener("click",
            (event) => {

                // DONE! check om feltet er ledigt? Man kan ikke sætte en brik i et felt der er optaget
                if (event.target.innerHTML.trim() == "")
                {
                    event.target.innerHTML = turn;
                    
                    // TODO check om spilleren har vundet
                    
                    if (turn == 'x')
                    {
                        turn = 'o';
                        // TODO  fjern et o i o_er
                        o_er.style.border = "2px red solid";
                        x_er.style.border = "none";
                    }
                    else
                    {
                        turn = 'x';
                        // TODO  fjern et x i x_er
                        x_er.style.border = "2px red solid";
                        o_er.style.border = "none";
                    }
                }
                

            })
        }
    )

});
